import React from "react";
import logo from "../images/top-logo.png";
import logo1 from "../images/Tick.png";
import backgroundImage from "../images/Map.png"; // Replace with the actual path to your background image

export const Success = () => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="bg-[#EAEAEA] h-20 flex justify-center items-center">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      {/* Success Message Section */}
      <div
        className="flex flex-col items-center justify-center flex-grow p-4"
        style={{
          fontFamily: "Tajawal, system-ui",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '1500px 700px', // Adjust width and height here
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Foreground Image */}
        <img src={logo1} alt="" className="mb-4 w-[352.38px] h-[230.9px]" />
        <p className="text-[#1E3767] text-5xl lg:text-6xl font-bold">!شكرًا لك</p>
        <p className="text-[#9A2168] text-2xl lg:text-3xl font-bold pt-4 pb-4">
          لقد قمت بالتسجيل بنجاح
        </p>
        <p className="text-[#1E3767]">!سيقوم فريقنا بالتواصل معك قريباً</p>
      </div>
    </div>
  );
};
