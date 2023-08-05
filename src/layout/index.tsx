import type { ReactNode } from "react";
import { Sarabun } from "next/font/google";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { NextSeo } from "next-seo";
import ChatBot from "~/components/ChatBot";

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
      <ChatBot />
      <NextSeo
        // title={`| CarbonZero`}
        defaultTitle="CarbonZero"
        description="Your goal is our goal"
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
