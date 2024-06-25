import Header from "./components/header";
import type { Metadata } from "next";
import "./globals.css";

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
