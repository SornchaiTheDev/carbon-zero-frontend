import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Back from "~/components/Back";
import Navbar from "~/components/Navbar";
import VehecleType from "~/components/VehecleType";
import Layout from "~/layout";
import { useCheckoutStore } from "~/store";
import { formatNumberWithCommas } from "~/utils";

type CarType = "car" | "luxury" | "4x4" | "van" | "motorcycle" | "hybrid";

const CARBON_EMISSION_BY_DISTANCE = {
  car: 0.2,
  luxury: 0.3,
  "4x4": 0.4,
  van: 0.5,
  motorcycle: 0.1,
  hybrid: 0.15,
};

const CARBON_EMISSION_BY_HOURS = {
  car: 0.25,
  luxury: 0.35,
  "4x4": 0.45,
  van: 0.55,
  motorcycle: 0.15,
  hybrid: 0.25,
};

function Discover() {
  const [setCarbonAmount, setMoney] = useCheckoutStore((state) => [
    state.setCarbonAmount,
    state.setMoney,
  ]);
  const router = useRouter();
  const [carType, setCarType] = useState<CarType>("car");
  const [amount, setAmount] = useState("");
  const [emitted, setEmitted] = useState(0);
  const [calculateBy, setCalculateBy] = useState<"DISTANCE" | "HOURS">(
    "DISTANCE"
  );

  const isEmpty = amount.length === 0;

  useEffect(() => {
    const MAX_AMOUNT = 10_000_000;
    const numberInput = amount.replaceAll(new RegExp(/[^0-9.\s]/g), "");
    if (parseFloat(numberInput) > MAX_AMOUNT) {
      return;
    }
    let emitted;
    if (calculateBy === "DISTANCE") {
      emitted = Number(
        (
          parseFloat(numberInput) * CARBON_EMISSION_BY_DISTANCE[carType]
        ).toFixed(2)
      );
    } else {
      emitted = Number(
        (parseFloat(numberInput) * CARBON_EMISSION_BY_HOURS[carType]).toFixed(2)
      );
    }

    if (Number.isNaN(emitted)) {
      emitted = 0;
    }
    setEmitted(emitted);
    setCarbonAmount(emitted);
    setMoney(emitted * 10);
  }, [carType, amount, calculateBy, setCarbonAmount, setMoney]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const MAX_AMOUNT = 10_000_000;
    const value = e.target.value as string;
    const numberInput = value.replaceAll(new RegExp(/[^0-9.\s]/g), "");
    if (parseFloat(numberInput) > MAX_AMOUNT) {
      return;
    }

    setAmount(formatNumberWithCommas(numberInput));
  };

  const handleOnChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as string;
    if (value === "distance") {
      setCalculateBy("DISTANCE");
    } else {
      setCalculateBy("HOURS");
    }
    setAmount("");
  };

  const handleOnChangeCarType = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as CarType;
    setCarType(value);
  };

  const handleOnOffset = () => {
    if (isEmpty) {
      return;
    }
    router.push("/payment");
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

        <div className="container flex flex-wrap flex-1 max-w-6xl px-10 mx-auto my-24 md:my-0 md:mt-32 text-green-12">
          <div className="flex flex-col w-full gap-4 my-4 lg:w-2/3">
            <Back className="my-2 text-sand-12 hover:text-sand-11" />
            <h2 className="text-5xl font-bold">
              Let&apos;s discover your carbon footprint
            </h2>
            <div className="flex items-center w-full gap-4">
              <h2 className="text-3xl">I travel using </h2>

              <select
                value={carType.toLowerCase()}
                onChange={handleOnChangeCarType}
                className="flex-1 max-w-[12rem] p-2 rounded-lg text-sand-12 bg-sand-2"
              >
                <option value="car">Car</option>
                <option value="luxury">Luxury</option>
                <option value="4x4">4x4</option>
                <option value="van">Van</option>
                <option value="motorcycle">Motorcyble</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div className="flex items-center w-full gap-4">
              <h2 className="text-3xl">Calculate by</h2>
              <select
                value={calculateBy.toLowerCase()}
                onChange={handleOnChangeType}
                className="flex-1 max-w-[12rem] p-2 rounded-lg text-sand-12 bg-sand-2"
              >
                <option value="distance" selected>
                  Distance
                </option>
                <option value="hours">Hours</option>
              </select>
            </div>
            <div className="flex flex-wrap items-center w-full gap-4">
              <h2 className="text-3xl">
                {calculateBy === "DISTANCE" ? "Distance" : "Hours Driven"}
              </h2>
              <div className="flex gap-2 ">
                <input
                  value={amount}
                  onChange={handleOnChange}
                  className="w-2/3 text-3xl font-bold bg-transparent border-b-2 outline-none border-green-12"
                />
                <h2 className="w-1/3 text-3xl">
                  {calculateBy === "DISTANCE" ? "kms" : "hours"}
                </h2>
              </div>
            </div>

            <h2 className="text-3xl">
              I have emitted <b className="text-4xl">{emitted}</b> kgs of{" "}
              <b className="text-4xl">
                CO<sub>2</sub>
              </b>
            </h2>

            <button
              onClick={handleOnOffset}
              className={twMerge(
                "w-1/2 p-2 mt-4 text-white rounded-xl bg-green-9",
                isEmpty
                  ? "bg-sand-6 text-sand-9 cursor-not-allowed"
                  : "hover:bg-green-10"
              )}
            >
              Offset Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Discover;
