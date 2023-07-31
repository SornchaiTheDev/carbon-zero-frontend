import Back from "~/components/Back";
import News from "~/components/News";
import Layout from "~/layout";
import { useEffect, useState } from "react";
import { api } from "~/utils";

type News = {
  id: number;
  title: string;
  location: string;
  description: string;
  join_detail: string;
  owner_id: number;
  created_at: string;
};

function NewsPage() {
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      const _news = await api.get("/news");
      setNews(_news.data as News[]);
    };
    fetchNews();
  });
  return (
    <Layout>
      <div
        className="w-full h-[25vh] px-6"
        style={{
          background: "url(assets/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container px-4 mx-auto">
        <Back href="/" className="mt-4" />
        <h2 className="my-6 text-4xl font-bold text-green-12">News</h2>

        {news.length > 0 ? (
          <div className="grid grid-cols-12 gap-6 mt-10">
            {news.map((_, i) => (
              <News key={i} title="Test" href="/news/1" />
            ))}
          </div>
        ) : (
          <h4>News are empty.</h4>
        )}
      </div>
    </Layout>
  );
}

export default NewsPage;
