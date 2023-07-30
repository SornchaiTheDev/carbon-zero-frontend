import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

interface Props {
  date: Date;
  amount: number;
  certLink: string;
}

function HistoryCard({ date, amount, certLink }: Props) {
  const formattedDate = dayjs(date).format("DD/MM/YYYY");
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
