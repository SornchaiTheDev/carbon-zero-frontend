import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import Back from "~/components/Back";
import Navbar from "~/components/Navbar";
import Layout from "~/layout";
import { formatNumberWithCommas } from "~/utils";

function Donate() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [compensated, setCompensated] = useState(0);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const MAX_AMOUNT = 10_000_000;
    const value = e.target.value as string;
    const numberInput = value.replaceAll(new RegExp(/,|[a-zA-Z]/g), "");
    if (parseInt(numberInput) > MAX_AMOUNT) {
      return;
    }

    setAmount(formatNumberWithCommas(numberInput));
    let compensated = parseInt(numberInput) / 1000;

    if (Number.isNaN(compensated)) {
      compensated = 0;
    }
    setCompensated(compensated);
  };

  return (
    <Layout withOutNavbar className="flex flex-col h-screen">
      <div
        className="relative w-full h-[100vh]"
        style={{
          background: "url(assets/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />

        <div className="container flex flex-wrap flex-1 max-w-6xl px-10 mx-auto my-24 md:my-0 md:mt-32 text-green-1">
          <div className="flex flex-col w-full gap-4 lg:w-2/3">
            <Back href="/" className="my-2 text-sand-1 hover:text-sand-4" />
            <h2 className="text-5xl font-bold">
              How much do you want to donate?
            </h2>
            <div className="flex flex-col flex-wrap gap-4 mt-4 md:items-end md:flex-row">
              <h2 className="text-3xl">I want to donate</h2>
              <div className="flex flex-wrap gap-4 md:gap-2">
                <input
                  value={amount}
                  onChange={handleOnChange}
                  className="text-3xl font-bold bg-transparent border-b-2 outline-none border-sand-1"
                />
                <h2 className="text-3xl">
                  Baht{" "}
                  <span className="text-3xl md:hidden">
                    to compensated <b className="text-4xl">{compensated}</b> kgs
                    of{" "}
                    <b className="text-4xl">
                      CO<sub>2</sub>
                    </b>
                  </span>
                </h2>
              </div>
              <h2 className="hidden text-3xl md:block">
                to compensated <b className="text-4xl">{compensated}</b> kgs of{" "}
                <b className="text-4xl">
                  CO<sub>2</sub>
                </b>
              </h2>
            </div>
            <button
              onClick={() => router.push("/payment")}
              className="w-1/2 p-2 mt-4 text-white rounded-xl bg-green-9 hover:bg-green-10"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Donate;
