import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import HistoryCard from "~/components/HistoryCard";
import Layout from "~/layout";
import { useRouter } from "next/router";
import Tree from "~/components/Tree";
import { useLocalStorage } from "usehooks-ts";
import { TUser } from "~/Types/Users";
import { api } from "~/utils";

function Me() {
  const [user, setUser] = useLocalStorage<TUser | null>("user", null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await api.get(`users/${user?.id}`);
      setUser(res.data);
    };
    fetchUser();
  }, []);
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!!user) {
  //       router.push("/signin");
  //     }
  //   }, 3000);
  // }, [router, user]);
  return (
    <Layout className="">
      <div
        className="w-full h-[25vh] px-6"
        style={{
          background: "url(assets/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container flex flex-wrap gap-10 p-10 mx-auto">
        <div className="">
          <h3 className="text-lg">Hi.</h3>
          <h2 className="text-2xl font-bold">
            {!!user && user.name + " " + user.lastname}
          </h2>

          {/* <h3 className="mt-2 text-2xl">
            You have compensate <b>10</b> kgs of{" "}
            <b>
              CO<sub>2</sub>
            </b>
          </h3> */}
          <Tree exp={user?.xp || 0} />
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">History</h3>
          <div className="flex flex-col gap-4 mt-2">
            {false ? (
              <div className="flex flex-col items-center gap-4 mt-10">
                <Icon icon="streamline:mail-inbox-email-outbox-drawer-empty-open-inbox" />
                <h3>The history is empty.</h3>
              </div>
            ) : (
              user?.user_carbon.map(
                ({ carbon_offset, created_at, donate_amount, id }) => (
                  <HistoryCard
                    id={id}
                    key={id}
                    date={new Date(created_at)}
                    amount={carbon_offset}
                  />
                )
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Me;
