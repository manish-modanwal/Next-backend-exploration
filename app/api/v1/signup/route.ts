import { NextRequest, NextResponse } from "next/server";
import prismaClient from "../../../lib/db"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Signup data:", data);

    const { username, password } = data;


    const user = await prismaClient.user.create({
      data: {
        username,
        password, 
      },
    });

    return NextResponse.json({
      message: "You have been signed up",
      user,
    });
  } catch (err: any) {
    console.error("Error creating user:", err);
    return NextResponse.json(
      { error: "Failed to sign up" },
      { status: 500 }
    );
  }
}


export async function GET(req:NextRequest){
  const user = await prismaClient.user.findFirst()

   return NextResponse.json({
    user 
   })
}
