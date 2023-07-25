import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container flex flex-wrap justify-between max-w-6xl gap-10 p-10 mx-auto">
        <img
          className="w-36"
          src="https://www.co2neutralwebsite.com/images/logo_en.svg"
        />
        <div className="flex flex-wrap gap-10">
          <div>
            <h4 className="text-xl text-lime-11">Contact Us</h4>
            <p>
              <span className="font-medium">IngenCO2.dk</span> <br /> Inge
              Lehmanns Gade 10,
              <br /> 6. sal 8000 Aarhus C Denmark
              <br />
              <a
                className="underline text-lime-11"
                href="mailto:info@CO2neutralwebsite.com"
              >
                info@CO2neutralwebsite.com
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-xl text-lime-11">About CarbonZero</h4>
            <p>lorem lorem</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center p-4 px-6 text-sm md:justify-between md:flex-row bg-sand-3 text-sand-12">
        <h6>
          &copy; {new Date().getFullYear()} CarbonZero. All rights reserved.
        </h6>
        <div>
          <Link className="hover:text-lime-10" href="terms">
            Terms and conditions
          </Link>
          <Link className="ml-2 hover:text-lime-10" href="privacy">
            Privacy and cookie policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
