import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

function Footer() {
  return (
    <footer>
      <div className="container flex flex-wrap justify-between max-w-6xl gap-10 p-10 mx-auto">
        <Image src={logo} alt="Logo" width={180} />

        <div className="flex flex-wrap gap-10">
          <div>
            <h4 className="text-xl text-green-11">Contact Us</h4>
            <p>
              <span className="font-medium">Cabonzero.co </span> <br />
              Kasetsart University,
              <br /> 50 Chatuchak Bangkok
              <br />
              <a
                className="underline text-green-11"
                href="mailto:info@cabonzero.co.th"
              >
                info@cabonzero.co.th
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-xl text-green-11">About CarbonZero</h4>
            <p>lorem lorem</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center p-4 px-6 text-sm md:justify-between md:flex-row bg-sand-3 text-sand-12">
        <h6>
          &copy; {new Date().getFullYear()} CarbonZero. All rights reserved.
        </h6>
        <div>
          <Link className="hover:text-green-10" href="terms">
            Terms and conditions
          </Link>
          <Link className="ml-2 hover:text-green-10" href="privacy">
            Privacy and cookie policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
