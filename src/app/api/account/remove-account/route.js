import connectToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function DELETE(req) {
  try {
    await connectToDB();

    const { searchParmas } = new URl(req.url);
    const id = searchParmas.get("id");
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "id is required",
      });
    }

    const deleteAccount = await Account.findByIdAndDelete(id);

    if (deleteAccount) {
      return NextResponse.json({
        success: true,
        message: "account deleted successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
