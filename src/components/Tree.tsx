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
  const levels = {
    1: 300,
    2: 600,
    3: 1000,
    4: 1500,
  };

  const calculateLevel = (): number => {
    const thresholds: number[] = [300, 600, 1000, 1500];

    for (let level = 1; level <= thresholds.length; level++) {
      if (exp - thresholds[level - 1] < 0) {
        return level;
      }
    }

    return 4; // Default level if no threshold is met
  };

  const state = () => {
    switch (calculateLevel()) {
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
        <h3>Level {calculateLevel()}</h3>
        <div className="w-full rounded-full bg-sand-6">
          <motion.div
            animate={{
              width: [
                "0%",
                `${
                  exp / levels[calculateLevel()] < 1
                    ? Math.min(
                        ((exp % levels[calculateLevel()]) * 100) /
                          levels[calculateLevel()],
                        100
                      )
                    : 100
                }%`,
              ],
            }}
            className={twMerge(
              "h-4 rounded-full bg-green-10",
              exp === 0 && "opacity-0"
            )}
          ></motion.div>
        </div>
        <div className="flex justify-between">
          <h4>0xp</h4>
          <h4>{levels[calculateLevel()]}xp</h4>
        </div>
      </div>
      <div className="flex justify-center">
        <Image className="w-1/3" src={state()} alt="Tree state 1" />
      </div>
    </div>
  );
}

export default Tree;
