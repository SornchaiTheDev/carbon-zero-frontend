import type { ReactNode } from "react";
import { Sarabun } from "next/font/google";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return <div className={sarabun.className}>{children}</div>;
}
