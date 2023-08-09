import { Icon } from "@iconify/react";
import Layout from "~/layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "~/utils";
import { useRouter } from "next/router";
import { TNews } from "~/Types/News";

function InsideNewsPage() {
  const router = useRouter();
  const { newId } = router.query;
  const [news, setNews] = useState<TNews | null>(null);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await api.get(`news`);
        setNews(res.data.filter((news: TNews) => news.id === Number(newId))[0]);
      } catch (err) {}
    };
    fetchNews();
  }, [newId]);
  return (
    <Layout>
      {!!news && (
        <div
          className="w-full h-[50vh] px-6"
          style={{
            background: `url(${
              news?.images.length > 0
                ? "https://cbz-backend.peerawitp.me/imgs/" +
                  news?.images[0].image
                : "../assets/bg.png"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      )}
      <div className="container px-4 mx-auto -translate-y-48">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <Link
            href="/news"
            className="flex items-center gap-2 text-sand-12 hover:text-sand-12/70 w-fit top-6 left-6"
          >
            <Icon icon="solar:arrow-left-line-duotone" />
            <h4>Back</h4>
          </Link>

          <div className="mt-6 bg-white rounded-t-3xl">
            {/* <h4 className="text-green-10">19 JUNE 2023 • 08:30 AM</h4> */}
            <h4 className="w-2/3 mt-2 text-2xl font-bold leading-normal capitalize text-green-12">
              {news ? news.title : "Loading..."}
            </h4>
            <div className="flex items-center gap-2 mt-4">
              <div className="p-2 text-2xl rounded bg-green-4 text-green-10 w-fit">
                <Icon icon="carbon:location-filled" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-sand-12">Location</h4>
                <h4 className="text-sand-12">
                  {news ? news.location : "Loading..."}
                </h4>
              </div>
            </div>
            <h4 className="mt-10 font-bold text-sand-12">Description</h4>
            <p className="mt-2">{news ? news.description : "Loading..."}</p>
            <h4 className="mt-10 font-bold text-sand-12">Join</h4>
            <a
              href={news?.join_detail ? news.join_detail : "#"}
              target="_blank"
              className="block mt-2 text-blue-11"
            >
              {news ? news.join_detail : "Loading..."}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default InsideNewsPage;
