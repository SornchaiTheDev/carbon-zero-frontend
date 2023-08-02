import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import { api } from "~/utils";
import { useLocalStorage } from "usehooks-ts";
import { TUser } from "~/Types/Users";

interface Props {
  id: number;
  date: Date;
  amount: number;
}

function HistoryCard({ date, amount, id }: Props) {
  const [user, setUser] = useLocalStorage<TUser | null>("user", null);

  const fullName = user?.name + " " + user?.lastname;
  const formattedDate = dayjs(date).format("DD/MM/YYYY");

  const certLink = useMemo(() => {
    return `https://cbz-backend.peerawitp.me/cert?name=${fullName}&co2_amount=${amount}&date=${formattedDate}&cert_id=RCC${id
      .toString()
      .padStart(10, "0")}`;
  }, [amount, id, fullName, formattedDate]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg shadow-md bg-sand-2">
      <div>
        <h3 className="text-sm font-bold text-sand-11">{formattedDate}</h3>
        <h3 className="text-2xl text-sand-12">
          <b>{amount}</b> kgs of{" "}
          <b>
            CO<sub>2</sub>
          </b>
        </h3>
      </div>
      <Link
        target="_blank"
        href={certLink}
        className="px-4 py-2 border-2 rounded-full hover:bg-green-3 border-green-10 text-green-10"
      >
        Claim a Certificate
      </Link>
    </div>
  );
}

export default HistoryCard;
