import type { Metadata, Viewport } from "next";
import { Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const nanumPenScript = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nanum-pen",
});

export const metadata: Metadata = {
  title: "강아지 & 고양이의 결혼식",
  description:
    "서로를 가장 사랑하는 친구였던 강아지와 고양이가 평생을 함께할 부부가 되려 합니다. 소중한 날, 따뜻한 축복으로 함께해 주세요.",
  openGraph: {
    title: "강아지 & 고양이의 결혼식",
    description: "2026년 11월 14일 오전 11시 40분 | 청량리 L65호텔",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fdf6f0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${nanumPenScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
