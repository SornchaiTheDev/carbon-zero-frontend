import dynamic from "next/dynamic";

const PaymentPage = dynamic(() => import("~/NoSSR/Payment"), { ssr: false });

function Payment() {
  return <PaymentPage />;
}

export default Payment;
