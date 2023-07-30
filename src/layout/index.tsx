import type { ReactNode } from "react";
import { Sarabun } from "next/font/google";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { NextSeo } from "next-seo";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

interface Props {
  children: ReactNode;
  className?: string;
  withOutNavbar?: boolean;
}
export default function Layout({ children, withOutNavbar, className }: Props) {
  return (
    <>
      <NextSeo
        // title={`| CarbonZero`}
        defaultTitle="CarbonZero"
        description="Programming Lab web application for Computer Science Kasetsart University"
      />
      <div
        className={sarabun.className.concat(!!className ? " " + className : "")}
      >
        {!withOutNavbar && <Navbar />}
        {children}
        <Footer />
      </div>
    </>
  );
}
