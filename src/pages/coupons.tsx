import { useState } from "react";
import Layout from "~/layout";
import hotel1 from "../../public/assets/coupons/hotel1.png";

import { Icon } from "@iconify/react";
import Coupon from "~/components/Coupon";

function Coupons() {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="container grid flex-wrap grid-cols-12 gap-6 p-10 mx-auto mt-10">
        <Coupon imgSrc="../assets/coupons/hotel1.png" type="hotel" />
        <Coupon imgSrc="../assets/coupons/hotel2.png" type="hotel" />
        <Coupon imgSrc="../assets/coupons/hotel3.png" type="hotel" />
        <Coupon imgSrc="../assets/coupons/event1.png" type="event" />
      </div>
    </Layout>
  );
}

export default Coupons;
