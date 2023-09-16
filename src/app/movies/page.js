"use client";

import CommonLayout from "@/components/commonlayout";

import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { getMediaByGenre } from "../../utils";
import CircleLoader from "@/components/loader";
import ManageAccounts from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";

export default function Movies() {
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
      const action = await getMediaByGenre("movie", 28);
      const adventure = await getMediaByGenre("movie", 12);
      const crime = await getMediaByGenre("movie", 80);
      const comedy = await getMediaByGenre("movie", 35);
      const family = await getMediaByGenre("movie", 10751);
      const mystery = await getMediaByGenre("movie", 9648);
      const romance = await getMediaByGenre("movie", 10749);
      const scifiAndFantasy = await getMediaByGenre("movie", 878);
      const war = await getMediaByGenre("movie", 10752);
      const history = await getMediaByGenre("movie", 36);
      const drama = await getMediaByGenre("movie", 18);
      const thriller = await getMediaByGenre("movie", 53);
      const horror = await getMediaByGenre("movie", 27);

      setMediaData(
        [
          {
            title: "Action",
            medias: action,
          },
          {
            title: "Adventure",
            medias: adventure,
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
            title: "Horror",
            medias: horror,
          },
          {
            title: "History",
            medias: history,
          },
          {
            title: "Romance",
            medias: romance,
          },
          {
            title: "Sci-Fi and Fantasy",
            medias: scifiAndFantasy,
          },
          {
            title: "Thriller",
            medias: thriller,
          },
          {
            title: "War",
            medias: war,
          },
          {
            title: "Dramas",
            medias: drama,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "movie",
          })),
        }))
      );
      setPageLoader(false);
    }

    getAllMedias();
  }, [loggedInAccount]);

  if (session === null) {
    return <UnauthPage />;
  }
  if (loggedInAccount === null) {
    return <ManageAccounts />;
  }

  if (pageLoader) {
    return <CircleLoader />;
  }
  return (
    <main className="flex min-h-screen flex-col">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
