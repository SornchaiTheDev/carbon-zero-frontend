import { useState } from "react";
import Layout from "~/layout";
import Image from "next/image";
import coupon1 from "../../public/assets/coupons/1.png";
import coupon1_click from "../../public/assets/coupons/1_click.png";
import coupon2 from "../../public/assets/coupons/2.png";
import coupon3 from "../../public/assets/coupons/3.png";
import coupon4 from "../../public/assets/coupons/4.png";

function Coupons() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <div
        className="w-full h-[25vh] px-6"
        style={{
          background: "url(assets/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container flex flex-wrap gap-10 p-10 mx-auto">
        <div className="w-full">
          <h3 className="text-4xl font-bold">Coupons</h3>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col flex-wrap gap-4 mt-10">
              <Image
                className="cursor-pointer"
                src={coupon2}
                width={300}
                onClick={() => setIsOpen(!isOpen)}
                height={200}
                alt="Coupon"
              />
              <Image src={coupon1} width={300} height={200} alt="Coupon" />
              <Image src={coupon3} width={300} height={200} alt="Coupon" />
              <Image src={coupon4} width={300} height={200} alt="Coupon" />
            </div>
            {isOpen && (
              <Image
                src={coupon1_click}
                width={300}
                height={200}
                alt="Coupon"
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Coupons;
