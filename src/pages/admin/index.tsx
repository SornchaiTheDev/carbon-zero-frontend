import Back from "~/components/Back";
import News from "~/components/News";
import Layout from "~/layout";
import { useEffect, useMemo, useState } from "react";
import { api } from "~/utils";
import { TUser } from "~/Types/Users";
import Table from "~/components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

function AdminIndex() {
  // const [news, setNews] = useState<TNews[]>([]);
  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const _news = await api.get("/news");
  //     setNews(_news.data as TNews[]);
  //   };
  //   fetchNews();
  // });
  const columnHelper = createColumnHelper<TUser>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "ID",
      }),
      columnHelper.accessor("name", {
        header: "Firstname",
      }),
      columnHelper.accessor("lastname", {
        header: "Lastname",
      }),
      columnHelper.accessor("user_carbon", { header: "Carbon" }),
      columnHelper.display({ id: "cert", header: "Certificate", size: 50 }),
    ],
    [columnHelper]
  );
  return (
    <Layout>
      <div
        className="w-full h-[25vh] px-6"
        style={{
          background: "url(assets/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container px-4 mx-auto">
        {/* <Back href="/" className="mt-4" /> */}
        <h2 className="my-6 text-4xl font-bold text-green-12">
          Admin Dashboard
        </h2>
        <div className="grid grid-cols-12 gap-6 mt-20">
          <Link
            href="#"
            className="relative col-span-12 h-[10rem] rounded-lg bg-sand-4 shadow-lg hover:bg-sand-5 md:col-span-4"
          >
            <div className="absolute flex flex-col items-center w-full gap-4 text-whites bottom-4">
              <Icon
                icon="solar:user-bold-duotone"
                className="text-5xl text-sand-10"
              />
              <div className="text-center">
                <h4 className="text-xl font-bold text-sand-12">Users</h4>
                <p className="text-gray-1s text-sand-11">
                  View all of the carbon that has been sold
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="relative col-span-12 h-[10rem] rounded-lg bg-sand-4 shadow-lg hover:bg-sand-5 md:col-span-4"
          >
            <div className="absolute flex flex-col items-center w-full gap-4 text-whites bottom-4">
              <Icon
                icon="solar:pen-new-square-bold-duotone"
                className="text-5xl text-sand-10"
              />
              <div className="text-center">
                <h4 className="text-xl font-bold text-sand-12">News</h4>
                <p className="text-gray-1s text-sand-11">
                  Add and edit news for the website
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* <div className="p-4 rounded-lg shadow bg-sand-1">
          <h2 className="text-2xl">
            Total{" "}
            <b>
              CO<sub>2</sub>
            </b>{" "}
            that has offset <b>200</b> kgs
          </h2>
        </div>
        <Table columns={columns} data={[]} /> */}
      </div>
    </Layout>
  );
}

export default AdminIndex;
