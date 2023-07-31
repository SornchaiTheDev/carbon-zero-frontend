import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  href: string;
  description?: string;
  coverImg?: string;
}

const DEFAULT_COVER_IMG =
  "https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80";

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
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-0 w-full p-4 bg-sand-2">
        <h3 className="text-lg font-bold">{title}</h3>
        {!!description && <p>{description.slice(0, 50)}</p>}

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
