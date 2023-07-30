"use client";
import { Icon } from "@iconify/react";
import { type FormEvent, useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { api } from "~/utils";

function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastname || !mobilePhone) return;
    try {
      setIsLoading(true);
      const res = await api.post("users", {
        email,
        password,
        name: firstName,
        lastname,
        mobile_phone: mobilePhone,
      });
      console.log(res);
    } catch (err) {}
    setIsLoading(false);
  };

  const handleOnPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const mobilePhone = e.target.value;

    const phone = mobilePhone.replace(/[^0-9]/g, "");
    if (phone.length > 10) return;
    setMobilePhone(phone);
  };

  return (
    <div
      style={{ background: "url(assets/bg.jpg)", backgroundSize: "cover" }}
      className="flex flex-col justify-end h-screen md:flex-row"
    >
      <div className="w-full p-10 bg-white h-fit md:h-full md:w-1/2 md:rounded-l-3xl">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-lg text-sand-11 hover:text-sand-12"
        >
          <Icon icon="solar:arrow-left-line-duotone" />
          Back
        </button>
        <h2 className="mt-2 text-2xl font-bold">Sign Up</h2>
        <div className="flex flex-col gap-4 mt-4">
          <form className="flex flex-col gap-2" onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="email" className="text-sand-11">
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sand-11">
                Password
              </label>
              <input
                id="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
                placeholder="•••••••••••"
              />
            </div>
            <div>
              <label htmlFor="firstName" className="text-sand-11">
                First Name
              </label>
              <input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sand-11">
                Last Name
              </label>
              <input
                id="lastName"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
              />
            </div>
            <div>
              <label htmlFor="mobilePhone" className="text-sand-11">
                Mobile Phone
              </label>
              <input
                id="mobilePhone"
                value={mobilePhone}
                onChange={handleOnPhoneChange}
                className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
              />
            </div>
            <button
              disabled={isLoading}
              className="w-full p-2 mt-4 border rounded-xl hover:text-white hover:bg-green-9 text-green-9 border-green-9"
            >
              Sign Up
            </button>
          </form>
          {/* <div>
            <div className="flex justify-center">
              <div className="flex items-center w-1/2 gap-2">
                <div className="flex-1 border-t border-sand-6"></div>
                <p className="text-sand-11">or</p>
                <div className="flex-1 border-t border-sand-6"></div>
              </div>
            </div>

            <div className="flex justify-center gap-4 my-4">
              <button className="p-3 border hover:bg-sand-2 rounded-xl">
                <Icon icon="logos:google-icon" />
              </button>
              <button className="p-3 border hover:bg-sand-2 rounded-xl">
                <Icon icon="logos:facebook" />
              </button>
              <button className="p-3 border hover:bg-sand-2 rounded-xl">
                <Icon icon="logos:twitter" />
              </button>
            </div>
          </div> */}
          <p className="mt-4 text-center text-sand-11">
            Already have an account?{" "}
            <Link className="text-green-9" href="signin">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
