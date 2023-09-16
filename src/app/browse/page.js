"use client";

import CommonLayout from "@/components/commonlayout";
import ManageAccount from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import {
  getPopularMedias,
  getTopRatedMedias,
  getTrendingMedias,
} from "../../utils/index";
import CircleLoader from "@/components/loader";

export default function Browse() {
  const {
    loggedInAccount,
    setPageLoader,
    pageLoader,
    mediaData,
    setMediaData,
  } = useContext(GlobalContext);
  const { data: session } = useSession();

  useEffect(() => {
    async function getAllMedias() {
      const trendingTvShows = await getTrendingMedias("tv");
      const popularTvShows = await getPopularMedias("tv");
      const topratedTvShows = await getTopRatedMedias("tv");

      const trendingMovieShows = await getTrendingMedias("movie");
      const popularMovieShows = await getPopularMedias("movie");
      const topratedMovieShows = await getTopRatedMedias("movie");

      setMediaData([
        ...[
          {
            title: "Trending TV Shows",
            medias: trendingTvShows,
          },
          {
            title: "Popular TV Shows",
            medias: popularTvShows,
          },
          {
            title: "Top rated TV Shows",
            medias: topratedTvShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "tv",
            // addedToFavorites:
            //   allFavorites && allFavorites.length
            //     ? allFavorites.map((fav) => fav.movieID).indexOf(mediaItem.id) >
            //       -1
            //     : false,
          })),
        })),

        ...[
          {
            title: "Trending Movies",
            medias: trendingMovieShows,
          },
          {
            title: "Popular Movies",
            medias: popularMovieShows,
          },
          {
            title: "Top rated Movies",
            medias: topratedMovieShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "movie",
            // addedToFavorites:
            //   allFavorites && allFavorites.length
            //     ? allFavorites.map((fav) => fav.movieID).indexOf(mediaItem.id) >
            //       -1
            //     : false,
          })),
        })),
      ]);

      setPageLoader(false);
    }

    getAllMedias();
  }, []);

  if (session === null) {
    return <UnauthPage />;
  }

  if (loggedInAccount === null) {
    return <ManageAccount />;
  }

  console.log(mediaData);
  return (
    <main className="flex min-h-screen flex-col ">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
