import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail",
  description: "edit your work-to-do",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

/**
 * metadata 업데이트를 위한 페이지 입니다.
 * 페이지 정보를 업데이트 합니다.
 */
