import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="absolute top-0 z-40 w-full">
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-full max-w-4xl px-4 py-2 m-4 mt-5 bg-white rounded-full shadow-md">
          <div className="flex flex-1 gap-4">
            <Link href="signin" className="text-green-12 hover:text-green-11">
              News
            </Link>
            <Link href="signin" className="text-green-12 hover:text-green-11">
              Board
            </Link>
          </div>
          <Link href="/" className="flex justify-center flex-1">
            <img
              className="w-24"
              src="https://www.co2neutralwebsite.com/images/logo_en.svg"
            />
          </Link>
          <div className="flex items-center justify-end flex-1 gap-4 text-green-12 hover:text-green-11">
            <Link href="signin">Sign in</Link>

            <button className="px-4 py-2 border-2 rounded-full hover:bg-green-3 border-green-10 text-green-10">
              Start Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
