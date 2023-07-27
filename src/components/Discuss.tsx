import { Icon } from "@iconify/react";
import React from "react";

function Discuss() {
  return (
    <div className="">
      <div className="flex items-center gap-2 mt-4">
        <div className="p-1 border-2 rounded-full border-sand-6">
          <img
            className="w-8 h-8 rounded-full"
            src="https://robohash.org/nongnut1.png?set=set4"
            alt=""
          />
        </div>
        <div>
          <h4 className="font-medium">Sornchai Somsakul</h4>
          <h5 className="text-sm">2 minutes ago</h5>
        </div>
      </div>
      <h2 className="mt-4 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        maiores voluptatum repellendus doloribus doloremque odio, vel ullam
        optio quae consequatur sit facilis mollitia. Reprehenderit eos
        temporibus, magni alias doloribus atque.
      </h2>

      <div className="flex items-center gap-2 mt-4">
        <button className="flex items-center gap-2 p-2 px-4 rounded-lg bg-sand-3 text-sand-12 hover:text-sand-10">
          <Icon icon="solar:like-bold-duotone" />
          Like
          <span>(2)</span>
        </button>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 p-2 px-4 rounded-lg bg-sand-3 text-sand-12 hover:text-sand-10">
            <Icon icon="solar:dislike-bold-duotone" />
            Dislike
            <span>(0)</span>
          </button>
        </div>
      </div>
      <hr className="mt-6"/>
    </div>
  );
}

export default Discuss;
