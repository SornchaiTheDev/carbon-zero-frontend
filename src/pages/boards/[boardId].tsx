import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import Discuss from "~/components/Discuss";
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
        <Link
          href="/boards"
          className="flex items-center gap-2 my-4 text-sand-12 hover:text-sand-12/70 w-fit top-6 left-6"
        >
          <Icon icon="solar:arrow-left-line-duotone" />
          <h4>Back</h4>
        </Link>
        <h2 className="text-3xl font-bold">ปลูกป่าช่วยชาติ</h2>
        <div className="flex items-end gap-4 mt-4">
          <div className="p-1 border-2 rounded-full border-sand-6">
            <img
              className="w-8 h-8 rounded-full"
              src="https://robohash.org/nongnut1.png?set=set4"
              alt=""
            />
          </div>
          <div>
            <h4 className="mt-2 text-sm">Created by</h4>
            <h4 className="text-sm font-medium">Sornchai Somsakul</h4>
          </div>
        </div>

        <h2 className="mt-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus maiores voluptatum repellendus doloribus doloremque
          odio, vel ullam optio quae consequatur sit facilis mollitia.
          Reprehenderit eos temporibus, magni alias doloribus atque.
        </h2>

        <hr className="my-4" />

        <h3 className="text-2xl font-medium">Discussions (3)</h3>
        <div className="flex flex-col gap-4">
          <Discuss />
          <Discuss />
          <Discuss />
        </div>
      </div>
    </Layout>
  );
}

export default InsideBoard;
