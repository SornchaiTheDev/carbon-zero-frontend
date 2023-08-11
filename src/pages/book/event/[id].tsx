import { Icon } from "@iconify/react";
import Layout from "~/layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api, formatNumberWithCommas } from "~/utils";
import { useRouter } from "next/router";
import { TNews } from "~/Types/News";
import dayjs from "dayjs";
import { useCheckoutStore } from "~/store";
import { THotel, TFacilitieName, TRoom } from "~/Types/Hotel";
import { randomFacilities } from "~/utils/randomFacilities";
import { useLocalStorage } from "usehooks-ts";
import { TUser } from "~/Types/Users";
import { TEvent } from "~/Types/Event";
import { twMerge } from "tailwind-merge";

const NumberButton = ({
  amount,
  onDecrease,
  onIncrease,
  limit,
}: {
  amount: number;
  onDecrease: () => void;
  onIncrease: () => void;
  limit: number;
}) => {
  const isFull = amount >= limit;
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => (amount > 0 ? onDecrease() : undefined)}
        className={twMerge(
          "flex items-center justify-center text-white rounded-lg w-7 h-7",
          !isFull || amount > 0 ? "hover:bg-green-10 bg-green-9" : "bg-green-6"
        )}
      >
        <Icon icon="ic:baseline-minus" />
      </button>
      <h5>{amount}</h5>
      <button
        onClick={() => (!isFull ? onIncrease() : undefined)}
        className={twMerge(
          "flex items-center justify-center text-white rounded-lg w-7 h-7",
          !isFull ? "hover:bg-green-10 bg-green-9" : "bg-green-6"
        )}
      >
        <Icon icon="material-symbols:add-rounded" />
      </button>
    </div>
  );
};

const Room = ({
  type,
  roomPrice,
  roomId,
}: {
  type: string;
  roomPrice: number;
  roomId: number;
}) => {
  const router = useRouter();
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [price, setPrice] = useState(0);
  const [fromDate, setFromDate] = useState(new Date(Date.now()));
  const [toDate, setToDate] = useState(new Date(Date.now() + 86400000));
  const [user] = useLocalStorage<TUser | null>("user", null);

  const PRICE = roomPrice;
  useEffect(() => {
    const diff = dayjs(toDate).diff(dayjs(fromDate), "day");
    const price = diff * PRICE * (adults + kids);
    setPrice(price);
  }, [adults, kids, fromDate, toDate]);

  return <></>;
};
function InsideBooking() {
  const router = useRouter();
  const { id } = router.query;
  const [amount, setAmount] = useState(0);

  const [avialiableRooms, setAvialiableRooms] = useState<TRoom[]>([]);

  const [event, setEvent] = useState<TEvent | null>(null);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await api.get("events");

        setEvent(
          res.data.filter(
            (event: TEvent) => event.event_id === parseInt(id as string)
          )[0]
        );
      } catch (err) {}
    };
    const fetchAvailableRoom = async () => {
      try {
        const res = await api.get(`availableRooms/${id}`);

        setAvialiableRooms(res.data);
      } catch (err) {}
    };
    fetchHotels();
  }, [id]);

  const [user] = useLocalStorage<TUser | null>("user", null);

  const [carbonAmount, setAmountInBaht, setCarbonAmount, setFee] =
    useCheckoutStore((state) => [
      state.carbonAmount,
      state.setMoney,
      state.setCarbonAmount,
      state.setFee,
    ]);

  const handleOnBuyTicket = async () => {
    if (!event) return;
    const price = amount * event?.price;
    if (price === 0) return;
    let compensated = price * 0.05;
    setCarbonAmount(compensated);
    setAmountInBaht(price);
    let fee = 20;

    if (event.price > 500) {
      fee = price * 0.05;
    } else if (event.price > 1000) {
      fee = price * 0.03;
    }

    setFee(fee);

    try {
      if (!user) throw new Error("User not found");
      await api.post("bookEvent", {
        event_id: id,
        user_id: user?.id,
        guest_name: user?.name + " " + user?.lastname,
        guest_email: user?.email,
        amount,
      });
      router.push("/payment");
    } catch (err) {}
  };

  return (
    <Layout>
      <div
        className="w-full h-[50vh] px-6"
        style={{
          background: event
            ? `url(
            https://cbz-backend.peerawitp.me/imgs/${event.image}
          )`
            : undefined,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container px-4 mx-auto -translate-y-48">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <Link
            href="/book"
            className="flex items-center gap-2 text-sand-12 hover:text-sand-12/70 w-fit top-6 left-6"
          >
            <Icon icon="solar:arrow-left-line-duotone" />
            <h4>Back</h4>
          </Link>

          <div className="mt-6 bg-white rounded-t-3xl">
            {/* <h4 className="text-green-10">19 JUNE 2023 • 08:30 AM</h4> */}
            <div className="flex flex-col gap-1">
              <div className="px-1 rounded-lg text-green-1 w-fit bg-green-8">
                {event ? event.event_type : "Loading..."}
              </div>
              <h4 className="w-2/3 mt-2 text-2xl font-bold leading-normal capitalize text-green-12">
                {event ? event.name : "Loading..."}
              </h4>

              <div className="flex items-center gap-1">
                <Icon icon="carbon:location-filled" className="text-green-10" />
                <h6 className="text-sm">
                  {event ? event.location : "Loading..."}
                </h6>
              </div>

              <div className="flex items-center gap-1">
                <Icon
                  icon="material-symbols:calendar-month"
                  className="text-green-10"
                />
                {!!event && (
                  <h6 className="text-sm">
                    {/* show event date from start to end date using dayjs */}
                    {dayjs(event.start_date).format("DD/MM/YYYY")} -{" "}
                    {dayjs(event.end_date).format("DD/MM/YYYY")}
                  </h6>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="ic:twotone-event-seat" className="text-green-10" />
                {event ? (
                  <h6 className="text-sm">
                    {event.capacity - event.availability}/{event.capacity}
                  </h6>
                ) : (
                  "Loading..."
                )}
              </div>
            </div>

            <h4 className="mt-10 font-bold text-sand-12">Description</h4>
            <p className="mt-2">{event ? event.description : "Loading..."}</p>
            {!!event && (
              <div className="mt-6">
                <h2 className="text-xl font-bold">Tickets</h2>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center justify-between flex-1 p-4 mt-4 bg-white border rounded text-sand-12 h-fit">
                    <h4 className="text-xl">Standard</h4>
                    <NumberButton
                      limit={event.availability}
                      amount={amount}
                      onDecrease={() => setAmount(amount - 1)}
                      onIncrease={() => setAmount(amount + 1)}
                    />
                  </div>
                  <div className="p-4 mt-4 bg-white border rounded text-sand-12 max-w-full w-[24rem]">
                    <h4 className="text-lg">Total ({amount} items)</h4>
                    <h4 className="text-xl font-bold">
                      ฿{amount * event?.price}
                    </h4>
                    <h5 className="text-lg text-sand-10">
                      *Some fees may be applied
                    </h5>
                    <button
                      onClick={handleOnBuyTicket}
                      className={twMerge(
                        "w-full py-2 text-center rounded mt-2",
                        amount > 0
                          ? "bg-green-9 text-green-1 hover:bg-green-10"
                          : "bg-sand-6 text-sand-9"
                      )}
                    >
                      Buy Tickets
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default InsideBooking;
