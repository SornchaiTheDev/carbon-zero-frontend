import dynamic from "next/dynamic";
import Layout from "~/layout";

const PaymentPage = dynamic(() => import("~/NoSSR/Payment"), { ssr: false });

function Payment() {
  return <PaymentPage />;
}

export default Payment;
