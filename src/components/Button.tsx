import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  children?: ReactNode;
  isLoading?: boolean;
}
function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      {...{ onClick }}
      className="w-full p-2 mt-4 border rounded-xl hover:text-white hover:bg-green-9 text-green-9 border-green-9"
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="text-2xl animate-spin">
            <Icon icon="ri:loader-4-line" />
          </div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
