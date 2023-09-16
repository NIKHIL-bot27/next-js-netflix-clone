"use client";

import CommonLayout from "@/components/commonlayout";
import ManageAccount from "@/components/manage-accounts";

import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { getMediaByGenre } from "../../utils";
import UnauthPage from "@/components/unauth-page";

export default function Movies() {
  const {
    loggedInAccount,
    setPageLoader,
    pageLoader,
    mediaData,
    setMediaData,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getAllMedias() {
      const actionAdventure = await getMediaByGenre("tv", 10759);
      const crime = await getMediaByGenre("tv", 80);
      const comedy = await getMediaByGenre("tv", 35);
      const family = await getMediaByGenre("tv", 10751);
      const mystery = await getMediaByGenre("tv", 9648);
      const reality = await getMediaByGenre("tv", 10764);
      const scifiAndFantasy = await getMediaByGenre("tv", 10765);
      const war = await getMediaByGenre("tv", 10768);
      const western = await getMediaByGenre("tv", 37);
      const dramaMovies = await getMediaByGenre("tv", 18);

      setMediaData(
        [
          {
            title: "Action and adventure",
            medias: actionAdventure,
          },
          {
            title: "Crime",
            medias: crime,
          },
          {
            title: "Comedy",
            medias: comedy,
          },
          {
            title: "Family",
            medias: family,
          },
          {
            title: "Mystery",
            medias: mystery,
          },
          {
            title: "Reality",
            medias: reality,
          },
          {
            title: "Sci-Fi and Fantasy",
            medias: scifiAndFantasy,
          },
          {
            title: "Western",
            medias: western,
          },
          {
            title: "War",
            medias: war,
          },
          {
            title: "Dramas",
            medias: dramaMovies,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "tv",
          })),
        }))
      );
      setPageLoader(false);
    }

    getAllMedias();
  }, [loggedInAccount]);

  const { data: session } = useSession();

  if (session === null) {
    return <UnauthPage />;
  }
  if (loggedInAccount === null) {
    return <ManageAccount />;
  }
  return (
    <main className="flex min-h-screen flex-col">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
