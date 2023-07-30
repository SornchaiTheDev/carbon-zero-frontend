import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Back from "~/components/Back";
import Layout from "~/layout";
import { useCheckoutStore } from "~/store";

function Congrats() {
  const router = useRouter();
  const [carbonAmount, money, setCarbonAmount, setMoney] = useCheckoutStore(
    (state) => [
      state.carbonAmount,
      state.money,
      state.setCarbonAmount,
      state.setMoney,
    ]
  );

  useEffect(() => {
    if (carbonAmount === 0 || money === 0) {
      router.push("/");
    }
  }, [carbonAmount, money, router]);

  const handleOnClaim = () => {
    setCarbonAmount(0);
    setMoney(0);
    router.push(
      "https://cdn.discordapp.com/attachments/1114593806994645145/1133021992031887390/image.png"
    );
  };

  return (
    <Layout className="flex flex-col h-screen">
      <div className="container flex flex-col flex-1 max-w-6xl px-10 mx-auto mt-24 md:mt-40 lg:flex-row text-green-12">
        <div className="w-full lg:w-2/3">
          <Back title="Back to Home" href="/" className="my-2" />
          <h2 className="text-4xl font-bold">Congratulation!</h2>
          <h6 className="mt-2 text-lg">
            Thank you for your donation. Your donation will be used to plant
            trees in Thailand and develop technology that reduce carbon
            emittion.
          </h6>
          <button
            onClick={handleOnClaim}
            className="block px-4 py-2 mt-4 border-2 rounded-full w-fit hover:bg-green-3 border-green-10 text-green-10"
          >
            Claim a Certificate
          </button>
        </div>
        <div className="w-full mt-10 lg:mt-0 lg:w-1/3">
          <img src="https://cdn.discordapp.com/attachments/1114593806994645145/1133021992031887390/image.png" />
        </div>
      </div>
    </Layout>
  );
}

export default Congrats;
