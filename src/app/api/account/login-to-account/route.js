import connectToDB from "@/database";
import Account from "@/models/Account";
import { compare } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(req) {
  try {
    await connectToDB();
    const { pin, accountId, uid } = await req.json();

    const getCurrentUser = await Account.findOne({ _id: accountId, uid });
    if (!getCurrentUser) {
      return NextResponse.json({
        success: true,
        message: "Account not found",
      });
    }

    const checkPin = await compare(pin, getCurrentUser.pin);

    if (checkPin) {
      return NextResponse.json({
        success: true,
        message: "PIN check success, Welcome",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Incorrect PIN",
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
