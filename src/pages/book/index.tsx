import { ReactNode, useEffect, useState } from "react";
import Back from "~/components/Back";
import Layout from "~/layout";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { THotel, TCheapestRoom } from "~/Types/Hotel";
import { api } from "~/utils";

const Button = ({
  children,
  active = false,
  onClick,
}: {
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      {...{ onClick }}
      className={twMerge(
        "py-1 text-lg  border-b-2 border-transparent hover:border-sand-6",
        active && "font-bold"
      )}
    >
      {children}
    </button>
  );
};
function Booking() {
  const [active, setActive] = useState<"HOTEL" | "EVENT" | "PACKAGE">("HOTEL");

  const [hotels, setHotels] = useState<(THotel & { price: number })[]>([]);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await api.get("hotels");
        const cheapest_rooms: TCheapestRoom[] = res.data.cheapest_rooms;
        const hotels = res.data.hotels.map((hotel: THotel) => ({
          ...hotel,
          price: cheapest_rooms.find(
            (room) => room.Hotel.hotel_id === hotel.hotel_id
          )?.Room.price_per_night,
        }));
        setHotels(hotels);
      } catch (err) {}
    };
    fetchHotels();
  }, []);
  return (
    <Layout>
      <div
        className="w-full h-[25vh] px-6"
        style={{
          background: "url(assets/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container px-4 mx-auto">
        <Back href="/" className="mt-4" />
        <h2 className="my-6 text-4xl font-bold text-green-12">Booking</h2>
        <div className="flex gap-4">
          <Button
            active={active === "HOTEL"}
            onClick={() => setActive("HOTEL")}
          >
            Hotels
          </Button>
          <Button
            active={active === "EVENT"}
            onClick={() => setActive("EVENT")}
          >
            Events
          </Button>
          <Button
            active={active === "PACKAGE"}
            onClick={() => setActive("PACKAGE")}
          >
            Packages
          </Button>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-10">
          {hotels.length > 0
            ? hotels.map(
                ({ hotel_id, name, stars, address, city, country, price }) => (
                  <Link
                    key={hotel_id}
                    href={`/book/${hotel_id}`}
                    className="relative col-span-12 overflow-hidden rounded-lg h-96 sm:col-span-6 lg:col-span-4"
                    style={{
                      background: `url(https://pix8.agoda.net/hotelImages/14654101/-1/a7c3c9a7db41d9ec49737d3506e854d3.jpg?ce=0&s=1024x768&isSkia=true)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="absolute bottom-0 flex flex-col w-full p-4 bg-sand-2">
                      <div className="flex justify-between">
                        <h3 className="text-xl font-bold">{name}</h3>
                        <div className="flex items-center gap-1">
                          <h6 className="text-sm">{stars}</h6>
                          <Icon
                            icon="solar:star-bold"
                            className="text-yellow-9"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon
                          icon="carbon:location-filled"
                          className="text-green-12"
                        />
                        <h6 className="text-sm">
                          {[address, city, country].join(" ")}
                        </h6>
                      </div>

                      <h4 className="self-end text-2xl font-bold text-sand-11">
                        ฿ {price}
                      </h4>
                    </div>
                  </Link>
                )
              )
            : null}
        </div>
        {/* {news.length > 0 ? (
          <div className="grid grid-cols-12 gap-6 mt-10">
            {news.map(({ title, id, description, images }, i) => (
              <News
                key={i}
                id={id}
                title={title}
                description={description}
                coverImg={
                  images.length > 0
                    ? "https://cbz-backend.peerawitp.me/imgs/" + images[0].image
                    : undefined
                }
                href={`/news/${id}`}
              />
            ))}
          </div>
        ) : (
          <h4>News are empty.</h4>
        )} */}
      </div>
    </Layout>
  );
}

export default Booking;
