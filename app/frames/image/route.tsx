import { ImageResponse } from "@vercel/og";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const imgurl = searchParams.get("imgurl");
  if (!imgurl) {
    return NextResponse.json({ message: "No image provided" }, { status: 400 });
  }
  return new ImageResponse(
    (
      <div tw="flex items-center justify-center w-full h-full bg-white">
        <img src={imgurl} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
      </div>
    ),
    { width: 600, height: 600 }
  );
}
