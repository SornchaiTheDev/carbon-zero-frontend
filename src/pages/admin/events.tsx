import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { TUser } from "~/Types/Users";
import Back from "~/components/Back";
import Layout from "~/layout";
import { api } from "~/utils";
import { useRouter } from "next/router";
import { THotel } from "~/Types/Hotel";
import { TEvent } from "~/Types/Event";
import dayjs from "dayjs";

type TEventAndIncome = TEvent & { income: number };

function Hotels() {
  const [user, setUser] = useLocalStorage<TUser | null>("user", null);
  const router = useRouter();

  const [events, setEvents] = useState<TEventAndIncome[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get("events");
        const events: TEventAndIncome[] = [];
        for (const event of res.data) {
          const res = await api.get(`summaryEvent/${event.event_id}`);

          events.push({
            ...event,
            income: res.data.summary_income ?? 0,
          });
        }

        setEvents(events);
      } catch (err) {}
    };
    fetchEvents();
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

          <h2 className="my-6 text-4xl font-bold text-green-12">Events</h2>

          {events.length > 0 ? (
            <div className="grid grid-cols-12 gap-6 mt-10">
              {events.map(
                ({
                  name,
                  image,
                  location,
                  availability,
                  event_type,
                  start_date,
                  end_date,
                  capacity,
                  income,
                }) => (
                  <div
                    className="col-span-12 overflow-hidden rounded-lg sm:col-span-6 lg:col-span-4"
                    key={name}
                  >
                    <div className="flex flex-col w-full gap-1 p-4 bg-sand-2">
                      <div className="px-1 rounded-lg text-green-1 w-fit bg-green-8">
                        {event_type}
                      </div>

                      <div className="flex justify-between">
                        <h3 className="text-xl font-bold">{name}</h3>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon
                          icon="carbon:location-filled"
                          className="text-green-10"
                        />
                        <h6 className="text-sm">{location}</h6>
                      </div>

                      <div className="flex items-center gap-1">
                        <Icon
                          icon="material-symbols:calendar-month"
                          className="text-green-10"
                        />
                        <h6 className="text-sm">
                          {/* show event date from start to end date using dayjs */}
                          {dayjs(start_date).format("DD/MM/YYYY")} -{" "}
                          {dayjs(end_date).format("DD/MM/YYYY")}
                        </h6>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon
                          icon="ic:twotone-event-seat"
                          className="text-green-10"
                        />
                        <h6 className="text-sm">
                          {availability}/{capacity}
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
                )
              )}
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