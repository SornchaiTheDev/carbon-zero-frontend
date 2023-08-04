import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TNews } from "~/Types/News";
import Navbar from "~/components/Navbar";
import News from "~/components/News";
import Layout from "~/layout";
import { api, formatNumberWithCommas } from "~/utils";
function Home() {
  const router = useRouter();
  const [news, setNews] = useState<TNews[]>([]);
  const [carbonOffset, setCarbonOffset] = useState<number>(0);

  useEffect(() => {
    const fetchNews = async () => {
      const _news = await api.get("/news");
      setNews(_news.data as TNews[]);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchCarbonOffset = async () => {
      const res = await api.get("/carbon/all");
      setCarbonOffset(res.data.all_carbon_offset);
    };
    fetchCarbonOffset();
  }, []);
  return (
    <Layout withOutNavbar>
      <div
        className="relative w-full h-[100vh]"
        style={{
          background: "url(assets/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="absolute flex flex-col items-center w-full gap-4 px-2 -translate-x-1/2 -translate-y-1/2 md:w-fit top-1/2 left-1/2">
          <h5 className="px-2 py-1 font-bold border rounded-full text-[#FCDC75] border-[#FCDC75]">
            Discover the Impact
          </h5>
          <h4 className="text-4xl text-center text-white">
            <b>{formatNumberWithCommas(carbonOffset.toFixed(4).toString())}</b>{" "}
            kgs of{" "}
            <b>
              CO<sub>2</sub>
            </b>{" "}
          </h4>
          <h5 className="text-3xl text-center text-white">
            have emitted to atmosphere
          </h5>
          <button
            onClick={() => router.push("/discover")}
            className="px-4 py-2 mt-6 text-center bg-white border-2 rounded-full hover:bg-green-3 border-green-10 text-green-10"
          >
            Discover Your Carbon Footprint Now
          </button>
        </div>
      </div>
      <main>
        <section className="container flex flex-col max-w-5xl gap-10 p-4 m-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="sm:w-1/2">
              <h4 className="text-xl font-bold">CARBON DIOXIDE</h4>
              <p className="mt-4">
                It is a gas that contributes to global warming and is produced
                by human activities such as driving cars and energy production.
                Reducing the amount of carbon dioxide is crucial for taking care
                of the environment.
              </p>
            </div>
            <img className="sm:w-1/3" src="./assets/hero1.png" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 mt-10 sm:flex-row-reverse">
            <div className="sm:w-1/2">
              <h4 className="text-xl font-bold">CARBON OFFSET</h4>
              <p className="mt-4">
                When we engage in activities that emit a large amount of carbon
                dioxide, like driving cars, it can be harmful to the
                environment. However, if we cannot avoid these activities, we
                can practice &ldquo;carbon offset&rdquo; by supporting projects
                that help reduce the carbon dioxide emissions generated from our
                activities. For example, planting trees that absorb carbon
                dioxide from the air.
              </p>
            </div>
            <img className="sm:w-1/3" src="./assets/hero2.png" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="sm:w-1/2">
              <h4 className="text-xl font-bold">CARBON CREDIT</h4>
              <p className="mt-4">
                Discover the true extent of your impact with our carbon
                footprint calculator. Knowledge is power, and understanding your
                carbon footprint is the first step towards positive change.
                Measure your daily activities, energy usage, and lifestyle
                choices, and gain invaluable insights into your personal
                contribution to carbon emissions.
              </p>
            </div>
            <img className="sm:w-1/3" src="./assets/hero3.png" />
          </div>
        </section>

        <section className="container p-4 m-4 mx-auto mt-10">
          <h5 className="text-lg text-sand-9">How it work</h5>
          {/* <h2 className="text-3xl font-bold md:w-1/3">
            Fundraising on GoFundMe takes just a few minutes
          </h2> */}
          <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="flex flex-col items-center justify-center col-span-12 gap-2 p-4 rounded-md sm:col-span-6 lg:col-span-4 bg-sand-4">
              <div className="flex items-center justify-center w-12 h-12 font-bold bg-white rounded-full">
                1
              </div>
              <h4 className="text-lg font-bold">Offset Your Carbon</h4>
              <p className="text-center">
                Take action against climate change. Offset your carbon footprint
                with certified credits and make a positive impact on the planet.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center col-span-12 gap-2 p-4 rounded-md sm:col-span-6 lg:col-span-4 bg-sand-4">
              <div className="flex items-center justify-center w-12 h-12 font-bold bg-white rounded-full">
                2
              </div>
              <h4 className="text-lg font-bold">Plant Trees, Reduce Carbon</h4>
              <p className="text-center">
                Be a part of the solution. Plant trees and support projects that
                reduce carbon emissions, fostering a healthier environment for
                all.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center col-span-12 gap-2 p-4 rounded-md sm:col-span-6 lg:col-span-4 bg-sand-4">
              <div className="flex items-center justify-center w-12 h-12 font-bold bg-white rounded-full">
                3
              </div>
              <h4 className="text-lg font-bold">Create a Better World</h4>
              <p className="text-center">
                Join the movement for a better world. Together, we can build a
                sustainable future for generations to come.
              </p>
            </div>
          </div>
        </section>
        <section className="container p-4 m-4 mx-auto">
          <h5 className="text-lg text-sand-9">News</h5>
          <h2 className="text-3xl font-bold md:w-1/3">Carbon</h2>
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
            <h4>Loading...</h4>
          )}
        </section>
      </main>
    </Layout>
  );
}

export default Home;
