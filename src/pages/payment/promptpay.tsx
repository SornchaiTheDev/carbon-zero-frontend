import dynamic from "next/dynamic";

const PromptPayPage = dynamic(() => import("~/NoSSR/Promptpay"), {
  ssr: false,
});

function PromptPay() {
  return <PromptPayPage />;
}

export default PromptPay;
