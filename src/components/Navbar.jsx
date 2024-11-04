import React from "react";
import TopLogo from "../images/top-logo.png";

export const Navbar = () => {
  return (
    <div>
      <nav style={{ backgroundColor: "" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-28">
          <div className="flex justify-end h-16 md:h-[74px] lg:h-[84px] 2xl:h-[84px] items-center">
            <img
              src={TopLogo}
              alt="Logo"
              className="h-12 md:h-16 lg:h-18 2xl:h-18 ml-4 lg:ml-6 pl-5"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};


