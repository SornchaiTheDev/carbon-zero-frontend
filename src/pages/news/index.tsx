import Back from "~/components/Back";
import News from "~/components/News";
import Layout from "~/layout";

function NewsPage() {
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

        <div className="grid grid-cols-12 gap-6 mt-10">
          <News title="Test" href="/news/1" />
          <News title="Test" href="/news/1" />
          <News title="Test" href="/news/1" />
          <News title="Test" href="/news/1" />
          <News title="Test" href="/news/1" />
          <News title="Test" href="/news/1" />
          <News title="Test" href="/news/1" />
          <News title="Test" href="/news/1" />
          <News title="Test" href="/news/1" />
        </div>
      </div>
    </Layout>
  );
}

export default NewsPage;
