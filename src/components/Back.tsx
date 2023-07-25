import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  href: string;
  className?: string;
}

function Back({ href, className }: Props) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={twMerge(
        "flex items-center gap-2 text-lg text-sand-11 hover:text-sand-12",
        className
      )}
    >
      <Icon icon="solar:arrow-left-line-duotone" />
      Back
    </button>
  );
}

export default Back;
