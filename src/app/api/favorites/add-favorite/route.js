import connectToDB from "@/database";
import Favorites from "@/models/Favorite";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(req) {
  try {
    await connectToDB();
    const data = await req.json();

    const isFavoriteMovieAlreadyExist = await Favorites.find({
      uid: data.uid,
      accountID: data.accountID,
      movieID: data.movieID,
    });

    if (isFavoriteMovieAlreadyExist && isFavoriteMovieAlreadyExist.length > 0) {
      return NextResponse.json({
        success: false,
        message: "Movie already exist in the favorite list",
      });
    }

    const newlyAddedFavorite = await Favorites.create(data);

    if (newlyAddedFavorite) {
      return NextResponse.json({
        success: true,
        message: "Added to your list successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something Went wrong",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong.Please try again",
    });
  }
}
