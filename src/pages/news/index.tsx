import Back from "~/components/Back";
import News from "~/components/News";
import Layout from "~/layout";
import { useEffect, useState } from "react";
import { api } from "~/utils";
import { TNews } from "~/Types/News";



function NewsPage() {
  const [news, setNews] = useState<TNews[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      const _news = await api.get("/news");
      setNews(_news.data as TNews[]);
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
            {news.map(({ title, id, description }, i) => (
              <News
                key={i}
                id={id}
                title={title}
                description={description}
                href={`/news/${id}`}
              />
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
