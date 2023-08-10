import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import { useLocalStorage } from "usehooks-ts";
import { api } from "~/utils";
import jwt_decode from "jwt-decode";
import { TUser } from "~/Types/Users";
import { useRouter } from "next/router";
import logo from "../../public/assets/logo.png";

type accessToken = {
  sub: string;
};

function Navbar() {
  const [accesstoken, setAccessToken] = useLocalStorage("accesstoken", null);
  const [user, setUser] = useLocalStorage<TUser | null>("user", null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const signOut = () => {
    setAccessToken(null);
    setUser(null);
    router.replace("/");
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!accesstoken) return;
      if (user) return;
      const _user: accessToken = jwt_decode(accesstoken);
      const res = await api.get(`/users/${_user.sub}`);
      setUser(res.data);
    };

    fetchUser();
  }, [accesstoken, user, setUser]);
  return (
    <div className="w-full">
      <div className="fixed z-50 block w-full md:hidden">
        <div className="flex items-center justify-between p-4 bg-white ">
          <Link href="/">
            <Image src={logo} alt="Logo" width={100} />
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

            {!!user && user.user_type_id === 0 && (
              <div>
                <Link
                  className="flex items-center gap-2 px-6 py-2 w-fit text-green-12 hover:text-green-11"
                  href="/admin"
                >
                  Admin
                  <Icon icon="solar:crown-minimalistic-line-duotone" />
                </Link>
              </div>
            )}

            {!!accesstoken ? (
              <>
                <Link href="/me" className="text-green-12 hover:text-green-11">
                  Profile
                </Link>
                <Link
                  href="/coupons"
                  className="text-green-12 hover:text-green-11"
                >
                  Promotions / Coupons
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 px-6 py-2 w-fit text-red-9 hover:text-red-11"
                >
                  Sign Out
                  <Icon icon="solar:login-2-line-duotone" />
                </button>
              </>
            ) : (
              <Link
                href="/signin"
                className="text-green-12 hover:text-green-11"
              >
                Sign in / SignUp
              </Link>
            )}
            <Link
              href="/donate"
              className="px-4 py-2 rounded-full bg-green-9 hover:bg-green-10 text-green-1"
            >
              Start Donate
            </Link>
          </div>
        )}
      </div>

      <div className="fixed z-30 justify-center hidden w-full md:flex">
        <div className="flex items-center justify-between w-full max-w-4xl px-4 py-2 m-4 mt-5 bg-white rounded-full shadow-md">
          <div className="flex flex-1 gap-4">
            <Link href="/news" className="text-green-12 hover:text-green-11">
              News
            </Link>
            <Link href="/boards" className="text-green-12 hover:text-green-11">
              Board
            </Link>
            {!!accesstoken && (
              <Link
                href="/coupons"
                className="text-green-12 hover:text-green-11"
              >
                Promotions / Coupons
              </Link>
            )}
          </div>
          <Link href="/" className="">
            <Image src={logo} alt="Logo" width={100} />
          </Link>
          <div className="flex items-center justify-end flex-1 gap-4">
            <Link href="/book" className="text-green-12 hover:text-green-11">
              Bookings
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2 rounded-full bg-green-9 hover:bg-green-10 text-green-1"
            >
              Start Donate
            </Link>

            {!!accesstoken ? (
              <Popover.Root>
                <Popover.Trigger asChild>
                  <button className="min-h-[40px] min-w-[40px] overflow-hidden rounded-full bg-sand-6">
                    <div className="relative w-10 h-10 rounded-full shadow bg-sand-5">
                      <Image
                        src="https://robohash.org/test.png"
                        alt="profile Image"
                        layout="fill"
                      />
                    </div>
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    className="flex min-w-[12rem] flex-col gap-2 rounded-lg bg-white pb-2 shadow-md"
                    sideOffset={20}
                    align="end"
                  >
                    <div className="px-6 pt-4">
                      <h4 className="text-lg font-medium leading-tight text-sand-12">
                        {!!user && user.name + " " + user.lastname}
                      </h4>
                      <h4 className="mt-2 text-sm leading-tight text-sand-11">
                        {!!user && user.email}
                      </h4>
                    </div>
                    <hr />
                    {!!user && user.user_type_id === 0 && (
                      <div>
                        <Link
                          className="flex items-center justify-between w-full px-6 py-2 text-sand-11 hover:bg-sand-4 hover:text-sand-12"
                          href="/admin"
                        >
                          Admin
                          <Icon icon="solar:crown-minimalistic-line-duotone" />
                        </Link>
                      </div>
                    )}
                    <div>
                      <Link
                        className="flex items-center justify-between w-full px-6 py-2 text-sand-11 hover:bg-sand-4 hover:text-sand-12"
                        href="/me"
                      >
                        Profile
                        <Icon icon="solar:user-rounded-line-duotone" />
                      </Link>
                    </div>

                    <div>
                      <button
                        onClick={() => signOut()}
                        className="flex items-center justify-between w-full px-6 py-2 text-sand-11 hover:bg-sand-4 hover:text-sand-12"
                      >
                        Sign Out
                        <Icon icon="solar:login-2-line-duotone" />
                      </button>
                    </div>

                    <Popover.Arrow className="fill-sand-3" />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            ) : (
              <Link
                href="/signin"
                className="text-green-12 hover:text-green-11"
              >
                Sign In / SignUp
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
