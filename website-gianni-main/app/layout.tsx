import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Don Gianni Watson — Photographer, Videographer & Video Editor",
  description: "Rotterdam based photographer, videographer and video editor — Don Gianni Watson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/transparant.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
