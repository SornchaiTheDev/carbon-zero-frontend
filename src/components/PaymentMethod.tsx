import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
  className?: string;
  type: string;
  selected?: boolean;
  onClick: (type: string) => void;
}

function PaymentMethod({ src, className, onClick, type, selected }: Props) {
  return (
    <button
      onClick={() => onClick(type)}
      className={twMerge(
        "flex items-center p-2 border-2 rounded-lg border-sand-6 w-fit",
        selected && "border-green-9"
      )}
    >
      <div className={twMerge("relative w-12 h-12 rounded-md overflow-hidden", className)}>
        <Image {...{ src }} layout="fill" alt="Promptpay" />
      </div>
    </button>
  );
}

export default PaymentMethod;
