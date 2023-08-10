import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { TUser } from "~/Types/Users";
import Back from "~/components/Back";
import Layout from "~/layout";
import { api } from "~/utils";
import { useRouter } from "next/router";
import { THotel } from "~/Types/Hotel";

type THotelAndIncome = THotel & { income: number };

function Hotels() {
  const [user, setUser] = useLocalStorage<TUser | null>("user", null);
  const router = useRouter();

  const [hotels, setHotels] = useState<THotelAndIncome[]>([]);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await api.get("hotels");
        const hotels: THotelAndIncome[] = [];
        for (const hotel of res.data.hotels) {
          const res = await api.get(`summaryHotel/${hotel.hotel_id}`);

          hotels.push({
            ...hotel,
            income: res.data.summary_income ?? 0,
          });
        }
        setHotels(hotels);
      } catch (err) {}
    };
    fetchHotels();
  }, []);

  return (
    <>
      <Layout className="flex flex-col h-screen">
        <div
          className="w-full h-[25vh] px-6"
          style={{
            background: "url(assets/bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container flex-1 px-4 mx-auto mt-36">
          <Back href="/admin" className="mt-4" />

          <h2 className="my-6 text-4xl font-bold text-green-12">Hotels</h2>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-12 gap-6 mt-10">
              {hotels.map(({ name, stars, address, city, country, income }) => (
                <div
                  className="col-span-12 overflow-hidden rounded-lg sm:col-span-6 lg:col-span-4"
                  key={name}
                >
                  <div className="flex flex-col w-full p-4 bg-sand-2">
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
                        className="text-green-10"
                      />
                      <h6 className="text-sm">
                        {[address, city, country].join(" ")}
                      </h6>
                    </div>
                    <div className="mt-2">
                      <h5 className="text-sand-11">Total Income</h5>
                      <h4 className="text-2xl font-bold text-sand-11">
                        ฿ {income}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h4>News are empty.</h4>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Hotels;
