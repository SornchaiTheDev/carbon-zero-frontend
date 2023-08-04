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
        <Back href="/" className="mt-4" />
        <h2 className="my-6 text-4xl font-bold text-green-12">Users</h2>

        <div className="p-4 rounded-lg shadow bg-sand-1">
          <h2 className="text-2xl">
            Total{" "}
            <b>
              CO<sub>2</sub>
            </b>{" "}
            that has offset <b>200</b> kgs
          </h2>
        </div>
        <Table columns={columns} data={[]} />
      </div>
    </Layout>
  );
}

export default AdminIndex;
