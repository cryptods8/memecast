import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "have you seen this meme by ds8",
  description: "just a meme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-default dark:bg-primary-900">{children}</body>
    </html>
  );
}
