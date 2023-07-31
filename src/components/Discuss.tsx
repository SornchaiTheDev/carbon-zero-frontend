import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { api } from "~/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.extend(relativeTime);

type TDiscuss = {
  id: number;
  body: string;
  owner_id: number;
  board_id: number;
  details: string[];
  created_at: string;
};

function Discuss({ body, owner_id, created_at }: TDiscuss) {
  const [owner, setOwner] = useState<string | null>(null);
  const post_at = dayjs().from(created_at);
  const fetchAuthor = async (userId: number) => {
    const res = await api.get(`users/${userId}`);
    setOwner(res.data.name + " " + res.data.lastname);
  };

  useEffect(() => {
    fetchAuthor(owner_id);
  }, [owner_id]);
  return (
    <div className="">
      <div className="flex items-center gap-2 mt-4">
        <div className="relative w-10 h-10 rounded-full shadow bg-sand-5">
          <Image
            src="https://robohash.org/test.png"
            alt="profile Image"
            layout="fill"
          />
        </div>
        <div>
          <h4 className="font-medium">{owner}</h4>
          <h5 className="text-sm">{post_at}</h5>
        </div>
      </div>
      <h2 className="mt-4 text-lg">{body}</h2>

      {/* <div className="flex items-center gap-2 mt-4">
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
      </div> */}
      <hr className="mt-6" />
    </div>
  );
}

export default Discuss;
