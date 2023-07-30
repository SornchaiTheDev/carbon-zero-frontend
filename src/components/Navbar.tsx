import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="fixed z-50 block w-full md:hidden">
        <div className="flex items-center justify-between p-4 bg-white ">
          <Link href="/">
            <img
              className="w-24"
              src="https://www.co2neutralwebsite.com/images/logo_en.svg"
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Icon
              className="text-2xl"
              icon={isOpen ? "mdi:close" : "solar:hamburger-menu-line-duotone"}
            />
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center w-full gap-6 p-4 text-lg bg-white md:hidden">
            <Link href="/news" className="text-green-12 hover:text-green-11">
              News
            </Link>
            <Link href="/boards" className="text-green-12 hover:text-green-11">
              Board
            </Link>
            <Link href="" className="text-green-12 hover:text-green-11">
              SornchaiTheDev
            </Link>
            <Link href="/signin" className="text-green-12 hover:text-green-11">
              Sign in
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2 border-2 rounded-full hover:bg-green-3 border-green-10 text-green-10"
            >
              Start Donate
            </Link>
          </div>
        )}
      </div>

      <div className="fixed z-50 justify-center hidden w-full md:flex">
        <div className="flex items-center justify-between w-full max-w-4xl px-4 py-2 m-4 mt-5 bg-white rounded-full shadow-md">
          <div className="flex flex-1 gap-4">
            <Link href="/news" className="text-green-12 hover:text-green-11">
              News
            </Link>
            <Link href="/boards" className="text-green-12 hover:text-green-11">
              Board
            </Link>
          </div>
          <Link href="/" className="flex justify-center flex-1">
            <img
              className="w-24"
              src="https://www.co2neutralwebsite.com/images/logo_en.svg"
            />
          </Link>
          <div className="flex items-center justify-end flex-1 gap-4">
            {/* <Link href="/signin" className="text-green-12 hover:text-green-11">
              Sign in
            </Link> */}
            <Link
              href="/donate"
              className="px-4 py-2 border-2 rounded-full hover:bg-green-3 border-green-10 text-green-10"
            >
              Start Donate
            </Link>
            <Link
              href="/me"
              className="font-medium text-green-12 hover:text-green-11"
            >
              <div className="relative w-10 h-10 rounded-full shadow bg-sand-5">
                <Image
                  src="https://robohash.org/test.png"
                  alt="profile Image"
                  layout="fill"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
