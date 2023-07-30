import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect } from "react";
import HistoryCard from "~/components/HistoryCard";
import Layout from "~/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Me() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session, router]);
  return (
    <Layout className="">
      <div
        className="w-full h-[25vh] px-6"
        style={{
          background: "url(assets/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container flex flex-wrap gap-10 p-10 mx-auto">
        <div className="">
          <h3 className="text-lg">Hi.</h3>
          <h2 className="text-2xl font-bold">Pariphat Maleekaew</h2>

          <h3 className="mt-2 text-2xl">
            You have compensate <b>10</b> kgs of{" "}
            <b>
              CO<sub>2</sub>
            </b>
          </h3>
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
              <>
                <HistoryCard
                  date={new Date("2022-10-25")}
                  amount={2}
                  certLink="https://cdn.discordapp.com/attachments/1114593806994645145/1133021992031887390/image.png"
                />
                <HistoryCard
                  date={new Date("2022-10-12")}
                  amount={1}
                  certLink="https://cdn.discordapp.com/attachments/1114593806994645145/1133021992031887390/image.png"
                />
                <HistoryCard
                  date={new Date("2022-10-21")}
                  amount={3}
                  certLink="https://cdn.discordapp.com/attachments/1114593806994645145/1133021992031887390/image.png"
                />
                <HistoryCard
                  date={new Date("2022-10-02")}
                  amount={10}
                  certLink="https://cdn.discordapp.com/attachments/1114593806994645145/1133021992031887390/image.png"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Me;