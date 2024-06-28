import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/header";

export const metadata: Metadata = {
  title: "HOME",
  description: "add your work-to-do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  );
}

/**
 * metadata 업데이트를 위한 페이지 입니다.
 * 페이지 정보를 업데이트 합니다.
 * 기본 스타일을 모든 컴포넌트에 적용합니다.
 */
