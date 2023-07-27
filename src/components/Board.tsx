import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function Board() {
  return (
    <Link
      href="/board/1"
      className="flex flex-col col-span-12 gap-2 p-4 bg-white rounded-lg shadow sm:col-span-6 lg:col-span-4"
    >
      <div>
        <h2 className="text-xl font-bold">ปลูกป่าช่วยชาติ</h2>
        <div className="flex items-center gap-1 text-sm">
          <h4>Sornchai Somsakul</h4>
          <h4>•</h4>
          <Icon icon="solar:clock-circle-line-duotone" />
          <h4>5 mins</h4>
        </div>
      </div>
      <div className="flex -space-x-4">
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="https://robohash.org/nongnut1.png?set=set4"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="https://robohash.org/nongnut2.png?set=set4"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="https://robohash.org/nongnut3.png?set=set4"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="https://robohash.org/nongnut4.png?set=set4"
          alt=""
        />
      </div>
    </Link>
  );
}

export default Board;
