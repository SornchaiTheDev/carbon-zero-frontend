import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  href?: string;
  className?: string;
}

function Back({ href, className }: Props) {
  const router = useRouter();
  const isCustomHref = href !== undefined;

  const onClick = isCustomHref ? () => router.push(href) : () => router.back();
  return (
    <button
      {...{ onClick }}
      className={twMerge(
        "flex items-center w-fit gap-2 text-lg text-sand-11 hover:text-sand-12",
        className
      )}
    >
      <Icon icon="solar:arrow-left-line-duotone" />
      Back
    </button>
  );
}

export default Back;
