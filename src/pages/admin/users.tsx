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
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/router";

type THistory = {
  user_id: number;
  id: number;
  donate_amount: number;
  created_at: string;
  carbon_offset: number;
  fee: number;
};
function AdminIndex() {
  const [carbonOffset, setCarbonOffset] = useState<number>(0);
  const [history, setHistory] = useState<THistory[]>([]);
  const [user] = useLocalStorage<TUser | null>("user", null);
  const router = useRouter();

  useEffect(() => {
    if (user?.user_type_id !== 0) {
      router.replace("/");
    }
  }, [user, router]);

  useEffect(() => {
    const fetchCarbonOffset = async () => {
      const res = await api.get("/carbon/all");
      setCarbonOffset(res.data.all_carbon_offset);
      setHistory(res.data.all_carbon);
    };
    fetchCarbonOffset();
  }, []);
  const columnHelper = createColumnHelper<THistory>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "ID",
      }),
      columnHelper.accessor("carbon_offset", {
        header: "Carbon",
        cell: (props) => <h6>{props.cell.getValue()} kgs</h6>,
      }),
      columnHelper.display({
        id: "cert",
        header: "Certificate",
        size: 50,
        cell: (props) => {
          return (
            <div className="flex justify-center">
              <Link
                target="_blank"
                href={`https://cbz-backend.peerawitp.me/cert/${props.row.original.id}`}
                className="text-2xl"
              >
                <Icon icon="carbon:certificate" />
              </Link>
            </div>
          );
        },
      }),
    ],
    [columnHelper]
  );
  return (
    <Layout className="flex flex-col h-screen">
      <div
        className="w-full flex-1 h-[25vh] px-6"
        style={{
          background: "url(assets/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container px-4 mx-auto">
        <Back href="/admin" className="mt-4" />
        <h2 className="my-6 text-4xl font-bold text-green-12">Users</h2>

        <div className="p-4 rounded-lg shadow bg-sand-1">
          <h2 className="text-2xl">
            Total{" "}
            <b>
              CO<sub>2</sub>
            </b>{" "}
            that has offset <b>{carbonOffset.toFixed(4)}</b> kgs
          </h2>
        </div>
        <Table columns={columns} data={history} />
      </div>
    </Layout>
  );
}

export default AdminIndex;
