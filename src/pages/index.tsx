import { Icon } from "@iconify/react";
import Navbar from "~/components/Navbar";
import Layout from "~/layout";
function Home() {
  return (
    <Layout withOutNavbar>
      <div
        className="relative w-full h-[100vh]"
        style={{
          background: "url(assets/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="absolute flex flex-col items-center w-full gap-4 px-2 -translate-x-1/2 -translate-y-1/2 md:w-fit top-1/2 left-1/2">
          <h5 className="px-2 py-1 font-bold border rounded-full text-green-10 border-green-10">
            Discover the Impact
          </h5>
          <h4 className="text-4xl text-center text-green-12">
            <b className="text-green-10">1,234,567</b> kgs of{" "}
            <b className="text-green-10">
              CO<sub>2</sub>
            </b>{" "}
          </h4>
          <h5 className="text-3xl text-green-12">have emitted to atmosphere</h5>
          <button className="px-4 py-2 mt-6 text-center bg-white border-2 rounded-full hover:bg-green-3 border-green-10 text-green-10">
            Discover Your Carbon Footprint Now
          </button>
        </div>
      </div>
      <main>
        <section className="container flex flex-col max-w-5xl gap-10 p-4 m-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="sm:w-1/2">
              <h4 className="text-xl font-bold">
                Our Planet&apos;s Call to Action
              </h4>
              <p className="mt-4">
                Our planet is calling for action. Climate change, driven by
                carbon emissions, poses an unprecedented threat to our
                ecosystems, wildlife, and the very fabric of life. But together,
                we can turn the tide and create a sustainable future. Welcome to
                CarbonZero , where every step counts towards healing our Earth.
              </p>
            </div>
            <img className="sm:w-1/3" src="./assets/draw1.svg" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 mt-10 sm:flex-row-reverse">
            <div className="sm:w-1/2">
              <h4 className="text-xl font-bold">A Promise to Offset</h4>
              <p className="mt-4">
                We make a promise to you and to our planet. For every ounce of
                carbon you emit, we offer you the chance to offset your impact.
                Invest in certified carbon credits that support renewable energy
                projects, reforestation efforts, and sustainable initiatives
                worldwide. Together, we&apos;ll create a climate-positive
                future.
              </p>
            </div>
            <img className="sm:w-1/3" src="./assets/draw1.svg" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="sm:w-1/2">
              <h4 className="text-xl font-bold">Understanding Your Impact</h4>
              <p className="mt-4">
                Discover the true extent of your impact with our carbon
                footprint calculator. Knowledge is power, and understanding your
                carbon footprint is the first step towards positive change.
                Measure your daily activities, energy usage, and lifestyle
                choices, and gain invaluable insights into your personal
                contribution to carbon emissions.
              </p>
            </div>
            <img className="sm:w-1/3" src="./assets/draw1.svg" />
          </div>
        </section>

        <section className="container p-4 m-4 mx-auto mt-10">
          <h5 className="text-lg text-sand-9">How it work</h5>
          <h2 className="text-3xl font-bold md:w-1/3">
            Fundraising on GoFundMe takes just a few minutes
          </h2>
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
          <div className="grid grid-cols-12 gap-6 mt-10">
            <div
              className="relative col-span-12 overflow-hidden rounded-lg h-96 sm:col-span-6 lg:col-span-4"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute bottom-0 w-full p-4 bg-sand-2">
                <h3 className="text-lg font-bold">Atmosphere lorem</h3>
                <p>Lorem ipsum dolor sit amet...</p>

                <button className="flex items-center px-2 py-1 my-2 border rounded border-green-12 hover:bg-sand-4 group">
                  <h5>Read more</h5>
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    className="hidden group-hover:block"
                  />
                </button>
              </div>
            </div>
            <div
              className="relative col-span-12 overflow-hidden rounded-lg h-96 sm:col-span-6 lg:col-span-4"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute bottom-0 w-full p-4 bg-sand-2">
                <h3 className="text-lg font-bold">Atmosphere lorem</h3>
                <p>Lorem ipsum dolor sit amet...</p>
                <button className="flex items-center px-2 py-1 my-2 border rounded border-green-12 hover:bg-sand-4 group">
                  <h5>Read more</h5>
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    className="hidden group-hover:block"
                  />
                </button>
              </div>
            </div>
            <div
              className="relative col-span-12 overflow-hidden rounded-lg h-96 sm:col-span-6 lg:col-span-4"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute bottom-0 w-full p-4 bg-sand-2">
                <h3 className="text-lg font-bold">Atmosphere lorem</h3>
                <p>Lorem ipsum dolor sit amet...</p>

                <button className="flex items-center px-2 py-1 my-2 border rounded border-green-12 hover:bg-sand-4 group">
                  <h5>Read more</h5>
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    className="hidden group-hover:block"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
