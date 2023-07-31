import { useState } from "react";
import Layout from "~/layout";
import PaymentMethod from "~/components/PaymentMethod";
import Back from "~/components/Back";
import { useRouter } from "next/router";
import { useCheckoutStore } from "~/store";

function Payment() {
  const [carbonAmount, money] = useCheckoutStore((state) => [
    state.carbonAmount,
    state.money,
  ]);
  const [selected, setSelected] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleCheckoutButtonClick = () => {
    if (selected === "promptpay") {
      router.push("payment/promptpay");
    } else {
      setIsError(true);
    }
  };

  return (
    <Layout className="flex flex-col h-screen">
      <div className="container flex flex-wrap flex-1 max-w-6xl px-10 mx-auto mt-24 md:mt-40 text-green-12">
        <div className="w-full lg:w-2/3">
          <Back className="my-2" />
          <h2 className="text-3xl font-bold">Payment Methods</h2>
          <h6 className="text-lg">
            Choose payment method to buy carbon credit
          </h6>
          {isError && (
            <h6 className="mt-2 text-red-9">
              *Please Choose payment method first
            </h6>
          )}
          <div className="mt-4">
            <h4 className="text-xl">Bank Transfer</h4>
            <div className="flex flex-wrap gap-2 mt-4">
              <PaymentMethod
                type="promptpay"
                selected={selected === "promptpay"}
                onClick={setSelected}
                src="/assets/promptpay.png"
              />
              <PaymentMethod
                type="scb"
                selected={selected === "scb"}
                onClick={setSelected}
                src="/assets/scb.svg"
              />
              <PaymentMethod
                type="citi"
                selected={selected === "citi"}
                onClick={setSelected}
                src="/assets/citi.svg"
              />
              <PaymentMethod
                type="kbank"
                selected={selected === "kbank"}
                onClick={setSelected}
                src="/assets/kbank.svg"
              />
              <PaymentMethod
                type="ktb"
                selected={selected === "ktb"}
                onClick={setSelected}
                src="/assets/ktb.svg"
              />
              <PaymentMethod
                type="tisco"
                selected={selected === "tisco"}
                onClick={setSelected}
                src="/assets/tisco.svg"
              />
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-xl">Credit Card or Debit Card</h4>
            <div className="flex gap-2 mt-4">
              <PaymentMethod
                type="mc"
                selected={selected === "mc"}
                onClick={setSelected}
                src="/assets/mc_symbol.svg"
              />
              <PaymentMethod
                type="visa"
                selected={selected === "visa"}
                onClick={setSelected}
                src="/assets/visa.png"
                className="w-12 h-4"
              />
            </div>
          </div>
        </div>
        <div className="w-full my-16 lg:mt-0 lg:w-1/3">
          <div className="p-4 bg-white border rounded-lg border-sand-6 h-fit">
            <div className="flex gap-4">
              <h4 className="flex-1">Offset :</h4>
              <h4 className="text-lg font-bold">
                {carbonAmount} kgs of CO<sub>2</sub>
              </h4>
            </div>
            <div className="flex gap-4">
              <h4 className="flex-1">Subtotal:</h4>
              <h4 className="text-lg font-bold">{money} ฿</h4>
            </div>
            <div className="flex gap-4">
              <h4 className="flex-1">Fee:</h4>
              <h4 className="text-lg font-bold">0 ฿</h4>
            </div>
            <hr className="my-2" />
            <div className="flex gap-4">
              <h4 className="flex-1">Total:</h4>
              <h4 className="text-lg font-bold">{money} ฿</h4>
            </div>
          </div>
          <button
            onClick={handleCheckoutButtonClick}
            className="w-full p-2 mt-4 border rounded-xl hover:text-white hover:bg-green-9 text-green-9 border-green-9"
          >
            Checkout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
