import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import state1 from "../../public/assets/tree/state-1.png";
import state2 from "../../public/assets/tree/state-2.png";
import state3 from "../../public/assets/tree/state-3.png";
import state4 from "../../public/assets/tree/state-4.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  exp: number;
}
function Tree({ exp }: Props) {
  const currentLevel = 9500 / exp;
  const [total, setTotal] = useState(0);
  const currentExp = Math.max(Math.floor((exp / currentLevel) * 100), 0);

  const calculateXp = () => {
    if (currentExp < 25) {
      return 1;
    } else if (currentExp < 50) {
      return 2;
    } else if (currentExp < 75) {
      return 3;
    } else {
      return 4;
    }
  };

  useEffect(() => {
    setTotal(Math.round(currentLevel * 100));
  }, []);

  const state = () => {
    switch (calculateXp()) {
      case 1:
        return state1;
      case 2:
        return state2;
      case 3:
        return state3;
      case 4:
        return state4;
      default:
        return state1;
    }
  };
  return (
    <div className="flex flex-col max-w-[30rem] gap-4 mt-4">
      <div className="w-full">
        <h3>Level 1</h3>
        <div className="w-full rounded-full bg-sand-6">
          <motion.div
            animate={{ width: ["0%", `${currentExp}%`] }}
            className={twMerge(
              "h-4 rounded-full bg-green-10",
              currentExp === 0 && "opacity-0"
            )}
          ></motion.div>
        </div>
        <div className="flex justify-between">
          <h4>0xp</h4>
          <h4>{total}xp</h4>
        </div>
      </div>
      <div className="flex justify-center">
        <Image className="w-1/3" src={state()} alt="Tree state 1" />
      </div>
    </div>
  );
}

export default Tree;
