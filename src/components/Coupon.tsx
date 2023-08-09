import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Modal from "./Modal";
import QRCode from "react-qr-code";

interface Props {
  imgSrc: string;
  type: "hotel" | "event";
}

const Hotel = () => {
  return (
    <>
      <li>In-room Breakfast at 09:00 hrs.</li>
      <li>Complimentary Minibar</li>
      <li>Pops & Soft Drinks</li>
      <li>24-hours stay/In & Out same Time</li>
      <li>
        Flexible time check in (3 option periods 10:00 am, 2:00 pm, 5:00 pm)
      </li>
      <li>Recommended restaurant delivery service</li>
      <li>Butler Convenient store butler service</li>
      <li>20% Discount of room service food</li>
      <li>Every day check in available</li>
    </>
  );
};

const Event = () => {
  return (
    <>
      <li>
        Discount coupon with conditions for 1 year from the date of redemption.
      </li>
      <li>previously or can be exchanged for cash</li>
      <li>
        In the case of showing postponement or cancellation, if the customer
        returns the card, it is marked that it can be used to return the
        accumulated points to send the membership card from which the
        accumulated points have been redeemed.
      </li>
    </>
  );
};
function Coupon({ imgSrc, type }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal
        {...{ isOpen, onClose: () => setIsOpen(false), title: "Claim Coupon" }}
        className="max-w-[40rem]"
        description="Use this QR code to claim your coupon."
      >
        <div className="flex justify-center my-10">
        <QRCode value="lorem ipsum" />
        </div>
      </Modal>
      <div className="relative col-span-12 overflow-hidden rounded-lg sm:col-span-6 lg:col-span-3">
        <img src={imgSrc} />
        <div className="w-full p-4 bg-sand-2">
          {/* <h3 className="text-lg font-bold">{title}</h3> */}
          <ul className="prose list-disc list-inside">
            {type === "hotel" ? <Hotel /> : <Event />}
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center px-2 py-1 my-2 border rounded w-fit border-green-12 hover:bg-sand-4 group"
          >
            <h5>Claim Coupon</h5>
            <Icon
              icon="solar:alt-arrow-right-linear"
              className="hidden group-hover:block"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Coupon;
