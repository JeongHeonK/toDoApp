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
