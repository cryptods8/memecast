import { baseUrl } from "@/utils/constants";
import { fetchMetadata } from "frames.js/next";
import { NextServerPageProps } from "frames.js/next/types";
import { Metadata } from "next";
import { metadata } from "./layout";

export async function generateMetadata({
  searchParams,
}: NextServerPageProps): Promise<Metadata> {
  const url = new URL("/frames", baseUrl);
  if (searchParams?.imgurl) {
    url.searchParams.set("imgurl", searchParams.imgurl as string);
  }
  return {
    ...metadata,
    other: await fetchMetadata(url),
  };
}

export default async function Home() {
  return (
    <div className="w-full h-dvh flex items-center justify-center p-4">
      have you seen this meme by{" "}
      <a className="underline" href="https://warpcast.com/ds8">
        ds8
      </a>
      ?
    </div>
  );
}
