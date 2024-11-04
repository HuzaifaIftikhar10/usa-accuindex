import React from "react";
import man from "../images/Man.png";
import map from "../images/Map.png"; 
import { FaCheck } from "react-icons/fa";

import "react-phone-input-2/lib/style.css";


import "react-toastify/dist/ReactToastify.css";


export const SlideOne = () => {

  return (
    <div className="relative flex flex-col xl:flex-row-reverse w-full pt-14">
    {/* Background Map Image */}
    <div className="absolute pt-10 p-3 md:pt-12 lg:pt-4 xl:pt-0 2xl:pl-8">
      <img src={map} alt="Map" className="w-full h-full " />
    </div>

    {/* Left Section: Texts and Form */}
    <div className="relative flex-1 w-full pl-6 pr-6  md:pr-10  xl:pl-24 xl:pt-24 ">
      {/* Text Section */}
      <div className="mb-4 text-white">
        <h1
          className="text-2xl lg:text-3xl font-bold text-[#1E3767] pb-2 text-center lg:text-start"
          style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
          dir="rtl"
        >
          تداول في أكبر المؤشرات الأمريكية مع
          <span
            className="text-[#9A2168]"
            style={{ fontFamily: "Poppins, system-ui", fontWeight: "800" }}
          >
            AccuIndex
          </span>
        </h1>
        <p
          className="text-2xl px-10 lg:px-0 lg:text-start text-[#1E3767] text-center"
          dir="rtl"
          style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
        >
          واحصل على
          <span className="text-[#9A2168] font-bold text-[25px]">30% </span>{" "}
          بونص على إيداعك الأول!
        </p>
      </div>

      {/* Input Fields */}
      <form >
        <div className="flex flex-col-reverse sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 md:mb-0">
          <div className="w-full sm:w-1/2">
            <label
              className="block text-right mb-1 text-black"
              style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
            >
              اسم العائلة
            </label>
            <input
            
              type="text"
              dir="rtl"
              className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF];
]"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label
              className="block text-right mb-1 text-black"
              style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
            >
              الاسم الأول
            </label>
            <input
             
              type="text"
              dir="rtl"
              className="w-full p-2 border border-gray-300 rounded mb-4 bg-[#FFFFFF]"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-right mb-1 text-black"
            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
          >
            البريد الإلكتروني
          </label>
          <input
         
            type="text"
            dir="rtl"
            className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]"
          />
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:mb-5">
          <div className="w-full flex flex-col">
            <p
              className="leading-7 text-[18px]  text-right "
              style={{
                fontFamily: "Tajawal, system-ui",
                fontWeight: "500",
              }}
            >
              رقم الهاتف
            </p>
            <input
            
              type="text"
              dir="rtl"
              className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF];
]"
            />
           
          </div>

          <div className="w-full flex flex-col items-end md:ml-2 pb-2 md:pb-0">
            <label
              htmlFor="state"
              className="leading-7 text-[18px]  text-right"
              style={{
                fontFamily: "Tajawal, system-ui",
                fontWeight: "500",
              }}
            >
              الدولة
            </label>
            <div className="relative w-full">
             
              
               <input
              
              type="text"
              dir="rtl"
              className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF];
]"
            />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row space-y-4 sm:space-y-0 md:space-x-4">
          <div className="w-full sm:w-1/2">
            <label
              className="block text-right mb-1 text-black"
              style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
            >
              تأكيد كلمة المرور
            </label>
            <input
             
              type="password"
              dir="rtl"
              className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label
              className="block text-right mb-1 text-black"
              style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
            >
              كلمة المرور
            </label>
            <input
             
              type="password"
              dir="rtl"
              className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF] mb-4"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-end text-end mt-4 ">
            <p
              dir="rtl"
              className="text-right text-[#51515199]"
              style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
            >
              بالنقر هنا، أوافق على أن تقوم شركة
              <span
                className="text-[#9A2168] font-bold"
                style={{
                  fontFamily: "Tajawal, system-ui",
                  fontWeight: "700",
                }}
              >
                {" "}
                Accuindex &nbsp;
              </span>
              بالاتصال بي لأغراض التسويق. يمكنك إلغاء الاشتراك في أي وقت.
              لمزيد من التفاصيل يرجى الاطلاع على
              <span
                className="text-[#9A2168]"
                style={{
                  fontFamily: "Tajawal, system-ui",
                  fontWeight: "700",
                }}
              >
                &nbsp;بيان سياسة التسويق والاتصالات&nbsp;
              </span>
              الخاص بنا&nbsp;
            </p>
            <label className="relative cursor-pointer ml-2">
              <input
               
                type="checkbox"
                className="sr-only peer"
              />
              <div className="w-5 h-5 border-2 border-[#9A2168] rounded-md peer-checked:bg-[#9A2168] peer-checked:border-bg-[#9A2168] flex justify-center items-center">
                <FaCheck size={14} color="#FFFFFF" />
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-[#9A2168] border-0 py-2 px-14 focus:outline-none hover:bg-[#811e58] rounded text-lg mt-4 md:mb-10"
            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
          >
            سجل الآن
          </button>
        </div>
      </form>
    </div>

    {/* Right Section: Image */}
    <div className="relative w-full flex flex-1 items-end xl:pr-36">
      <img src={man} alt="Man" className="xl:h-[700px] xl:w-[850px]" />
    </div>
  </div>
);
};