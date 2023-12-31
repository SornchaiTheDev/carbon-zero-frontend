import { Icon } from "@iconify/react";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { api } from "~/utils";
import { useLocalStorage } from "usehooks-ts";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const [_, setAccessToken] = useLocalStorage("accesstoken", null);

  const handleOnSubmit = async (e: FormEvent) => {
    setIsError(false);

    e.preventDefault();
    try {
      const res = await api.post("login", null, {
        params: { email, password },
      });

      setAccessToken(res.data.access_token);
      router.push("/");
    } catch (err) {
      setIsError(true);
    }
  };
  return (
    <div
      style={{ background: "url(assets/bg.png)", backgroundSize: "cover" }}
      className="flex flex-col justify-end h-screen md:flex-row"
    >
      <div className="p-10 bg-white h-fit md:h-full md:w-1/2 rounded-t-3xl md:rounded-l-3xl">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-lg text-sand-11 hover:text-sand-12"
        >
          <Icon icon="solar:arrow-left-line-duotone" />
          Back
        </button>
        <h2 className="mt-2 text-2xl font-bold">Sign In</h2>
        {isError && <h6 className="text-red-9">Invalid email or password</h6>}
        <div className="flex flex-col gap-4 mt-4">
          <form onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="email" className="text-sand-11">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
                placeholder="•••••••••••"
              />
            </div>
            <button className="w-full p-2 mt-4 border rounded-xl hover:text-white hover:bg-green-9 text-green-9 border-green-9">
              Sign In
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
            Don&apos;t have an account?{" "}
            <Link className="text-green-9" href="signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
