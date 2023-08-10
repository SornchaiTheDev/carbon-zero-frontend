import { Icon } from "@iconify/react";
import Layout from "~/layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api, formatNumberWithCommas } from "~/utils";
import { useRouter } from "next/router";
import { TNews } from "~/Types/News";
import dayjs from "dayjs";
import { useCheckoutStore } from "~/store";
import { THotel, TFacilities } from "~/Types/Hotel";

const Highlight = ({ highlights }: { highlights: TFacilities[] }) => {
  const FACILITYS = {
    "Swimming Pool": "solar:swimming-bold-duotone",
    Gym: "mdi:dumbbell",
    Restaurant: "mdi:food-fork-drink",
    Spa: "mdi:spa",
    "Free Wi-Fi": "mdi:wifi",
    Parking: "mdi:parking",
  };
  return (
    <div className="w-full p-2 mt-4 border rounded-lg">
      <h4 className="text-xl font-bold">Highlights</h4>
      <div className="grid justify-center grid-cols-12 mt-4 ">
        {highlights.map(({ name, facility_id }) => (
          <div
            key={name}
            className="flex flex-col items-center col-span-12 gap-2 p-2 md:col-span-6 lg:col-span-3"
          >
            <Icon icon={FACILITYS[name]} className="text-4xl" />
            <h6 className="text-sm font-medium">{name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

const NumberButton = ({
  amount,
  onDecrease,
  onIncrease,
}: {
  amount: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => amount > 0 && onDecrease()}
        className="flex items-center justify-center text-white rounded-lg w-7 h-7 hover:bg-green-10 bg-green-9"
      >
        <Icon icon="ic:baseline-minus" />
      </button>
      <h5>{amount}</h5>
      <button
        onClick={() => onIncrease()}
        className="flex items-center justify-center text-white rounded-lg w-7 h-7 hover:bg-green-10 bg-green-9"
      >
        <Icon icon="material-symbols:add-rounded" />
      </button>
    </div>
  );
};

function InsideBooking() {
  const router = useRouter();
  const { id } = router.query;
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [price, setPrice] = useState(0);
  const [fromDate, setFromDate] = useState(new Date(Date.now()));
  const [toDate, setToDate] = useState(new Date(Date.now() + 86400000));
  const PRICE = 2260;
  useEffect(() => {
    const diff = dayjs(toDate).diff(dayjs(fromDate), "day");
    const price = diff * PRICE * (adults + kids);
    setPrice(price);
  }, [adults, kids, fromDate, toDate]);

  const [hotel, setHotel] = useState<THotel | null>(null);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await api.get("hotels");

        setHotel(
          res.data.filter(
            (hotel: THotel) => hotel.hotel_id === parseInt(id as string)
          )[0]
        );
      } catch (err) {}
    };
    fetchHotels();
  }, [id]);

  const [carbonAmount, setAmountInBaht, setCarbonAmount] = useCheckoutStore(
    (state) => [state.carbonAmount, state.setMoney, state.setCarbonAmount]
  );

  const handleOnBook = () => {
    if (price === 0) return;
    let compensated = price * 0.05;
    setCarbonAmount(compensated);
    setAmountInBaht(price);

    router.push("/payment");
  };

  return (
    <Layout>
      {/* {!!news && ( */}
      <div
        className="w-full h-[50vh] px-6"
        style={{
          background: `url(${
            // news?.images.length > 0
            //   ? "https://cbz-backend.peerawitp.me/imgs/" + news?.images[0].image
            //   :
            "https://pix8.agoda.net/hotelImages/14654101/-1/a7c3c9a7db41d9ec49737d3506e854d3.jpg?ce=0&s=1024x768&isSkia=true"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* )} */}
      <div className="container px-4 mx-auto -translate-y-48">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <Link
            href="/news"
            className="flex items-center gap-2 text-sand-12 hover:text-sand-12/70 w-fit top-6 left-6"
          >
            <Icon icon="solar:arrow-left-line-duotone" />
            <h4>Back</h4>
          </Link>

          <div className="mt-6 bg-white rounded-t-3xl">
            {/* <h4 className="text-green-10">19 JUNE 2023 • 08:30 AM</h4> */}
            <div className="flex flex-col gap-1">
              <h4 className="w-2/3 mt-2 text-2xl font-bold leading-normal capitalize text-green-12">
                {hotel ? hotel.name : "Loading..."}
              </h4>
              <div className="flex items-center gap-1">
                <h6 className="text-sm">
                  {hotel ? hotel.rating : "Loading..."}
                </h6>
                <Icon icon="solar:star-bold" className="text-yellow-9" />
              </div>
              <div className="flex items-center gap-1">
                <Icon
                  icon="carbon:location-filled"
                  className="text-green-10 "
                />
                <h6 className="text-sm">
                  {hotel
                    ? [hotel.address, hotel.city, hotel.country].join(" ")
                    : "Loading..."}{" "}
                </h6>
              </div>
            </div>

            <h4 className="mt-10 font-bold text-sand-12">Detail</h4>
            <p className="mt-2">{hotel ? hotel.description : "Loading..."}</p>
            {!!hotel && <Highlight highlights={hotel?.facilities} />}
            <div className="mt-6">
              <h2 className="text-xl font-bold">Booking</h2>
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 my-2">
                    <div>
                      <h6>From</h6>
                      <input
                        value={fromDate.toISOString().split("T")[0]}
                        onChange={(e) => {
                          setFromDate(new Date(e.target.value));
                        }}
                        type="date"
                        className="px-2 py-1 border rounded-lg"
                      />
                    </div>

                    <div>
                      <h6>To</h6>
                      <input
                        value={toDate.toISOString().split("T")[0]}
                        onChange={(e) => {
                          setToDate(new Date(e.target.value));
                        }}
                        type="date"
                        className="px-2 py-1 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="my-2">
                    <div className="mb-2">
                      <h4 className="font-bold">Adults</h4>
                      <p className="text-sm text-sand-11">Ages 18 or above</p>
                    </div>

                    <NumberButton
                      amount={adults}
                      onDecrease={() => setAdults(adults - 1)}
                      onIncrease={() => setAdults(adults + 1)}
                    />
                  </div>
                  <div className="my-2">
                    <div className="mb-2">
                      <h4 className="font-bold">Kids</h4>
                      <p className="text-sm text-sand-11">Ages 0-17</p>
                    </div>
                    <NumberButton
                      amount={kids}
                      onDecrease={() => setKids(kids - 1)}
                      onIncrease={() => setKids(kids + 1)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end mt-4">
                <h4 className="text-3xl font-bold text-green-11">
                  {formatNumberWithCommas(price.toString())} ฿
                </h4>
                <button
                  onClick={handleOnBook}
                  className="px-10 py-2 mt-2 border-2 rounded-lg text-green-11 hover:bg-green-9 hover:text-white border-green-10"
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default InsideBooking;
