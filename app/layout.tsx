import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const mapo = localFont({
  src: "../public/fonts/MapoFlowerIsland.ttf",
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "남궁혁 ♥ 최예슬 | 모바일 청첩장",
  description: "2026년 2월 19일 목요일 19시",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={mapo.variable}>
      <body>{children}</body>
    </html>
  );
}
