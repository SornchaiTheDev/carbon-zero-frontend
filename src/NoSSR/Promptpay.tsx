import { useEffect, useMemo, useState } from "react";
import Layout from "~/layout";
import Image from "next/image";
import QRCode from "react-qr-code";
import Back from "~/components/Back";
import generatePayload from "promptpay-qr";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useCheckoutStore } from "~/store";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

dayjs.extend(relativeTime);

function Promptpay() {
  const { data: session } = useSession();
  const router = useRouter();
  const money = useCheckoutStore((state) => state.money);
  const targetDateTime = useMemo(() => dayjs().add(10, "seconds"), []);

  const [remainingTime, setRemainingTime] = useState(
    targetDateTime.diff(dayjs(), "seconds")
  );

  useEffect(() => {
    if (money === 0 || !session) {
      router.push("/");
    }
  }, [money, router, session]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const newRemainingTime = targetDateTime.diff(now, "seconds");
      setRemainingTime(newRemainingTime);

      if (newRemainingTime <= 0) {
        clearInterval(interval);
        router.push("/congrats");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDateTime,router]);

  function formatTime(timeInSeconds: number) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return (
    <Layout className="flex flex-col h-screen">
      <div className="container flex flex-col flex-1 max-w-6xl px-10 mx-auto mt-24 md:mt-40 md:flex-row text-green-12">
        <div className="w-full lg:w-2/3">
          <Back className="my-2" />
          <h2 className="text-3xl font-bold">Pay With Promptpay</h2>
          <h6 className="text-lg">
            Scan QR Code or Capture this screen and using Mobile Banking to pay
          </h6>
        </div>

        <div className="flex flex-col items-center self-center gap-4 p-4 mt-10 bg-white rounded-lg shadow-lg md:self-auto md:mt-0 w-fit h-fit">
          <Image
            src="/assets/qr_payment.png"
            alt="Pay using promptpay"
            width={300}
            height={300}
          />
          <QRCode value={generatePayload("0966353408", { amount: money })} />
          <div className="flex justify-between w-full gap-4">
            <h4 className="text-green-12">Total</h4>
            <h4 className="font-bold">{money} ฿</h4>
          </div>
          <div className="flex justify-between w-full gap-4">
            <h4 className="text-green-12">Please pay within</h4>
            <h4 className="font-bold text-red-9">
              {formatTime(remainingTime)}
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Promptpay;
