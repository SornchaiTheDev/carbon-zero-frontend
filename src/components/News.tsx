import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "~/utils";

interface Props {
  id: number;
  title: string;
  href: string;
  description?: string;
  coverImg?: string;
}

const DEFAULT_COVER_IMG =
  "https://www.greenpeace.org/static/planet4-thailand-stateless/2020/09/d63e5e4f-gp0stua97-510x340.jpg";

function News({
  id,
  title,
  href,
  coverImg = DEFAULT_COVER_IMG,
  description,
}: Props) {
  return (
    <div
      className="relative col-span-12 overflow-hidden rounded-lg h-96 sm:col-span-6 lg:col-span-4"
      style={{
        background: `url(${coverImg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-0 w-full p-4 bg-sand-2">
        <h3 className="text-lg font-bold">{title}</h3>
        {!!description && (
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        )}

        <Link
          {...{ href }}
          className="flex items-center px-2 py-1 my-2 border rounded w-fit border-green-12 hover:bg-sand-4 group"
        >
          <h5>Read more</h5>
          <Icon
            icon="solar:alt-arrow-right-linear"
            className="hidden group-hover:block"
          />
        </Link>
      </div>
    </div>
  );
}

export default News;
