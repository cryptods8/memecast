/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  const { searchParams } = ctx;
  const imgurl = searchParams.imgurl || ctx.createExternalUrl("/legoworm.jpg");

  const frameUrl = ctx.createUrlWithBasePath({
    pathname: "",
    query: { imgurl },
  });
  const shareUrl = new URL("https://warpcast.com/~/compose");
  shareUrl.searchParams.set("embeds[]", frameUrl);
  shareUrl.searchParams.set("text", "have you seen this meme?");
  return {
    image: ctx.createUrlWithBasePath({ pathname: "/image", query: { imgurl } }),
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button action="post" target={frameUrl}>
        cool
      </Button>,
      <Button action="post" target={frameUrl}>
        not cool
      </Button>,
      <Button action="link" target={shareUrl.toString()}>
        share
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
