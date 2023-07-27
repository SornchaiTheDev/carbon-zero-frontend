import { Icon } from "@iconify/react";
import React from "react";
import Layout from "~/layout";

function InsideBoard() {
  return (
    <Layout>
      <div
        className="w-full h-[50vh] px-6"
        style={{
          background: "url(../assets/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container px-4 mx-auto mt-10">
        <div>
          <h2 className="text-xl font-bold">ปลูกป่าช่วยชาติ</h2>
          <div className="flex items-center gap-1 text-sm">
            <h4>Sornchai Somsakul</h4>
            <h4>•</h4>
            <Icon icon="solar:clock-circle-line-duotone" />
            <h4>5 mins</h4>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-10"></div>
      </div>
    </Layout>
  );
}

export default InsideBoard;
