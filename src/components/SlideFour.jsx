import React from "react";
import Mobile from "../images/mobile.png";

export const SlideFour = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className=" relative flex flex-col md:flex-row-reverse items-center  bg-[#EAEAEA] mx-auto pt-7 lg:p-0 h-[850px] md:h-[350px] lg:w-[650px] md:w-[550px] xl:w-[800px] rounded-3xl md:rounded-3xl mb-20 md:mb-20 lg:mb-24">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center md:items-end lg:items-end   lg:w-[600px] md:w-[400px] lg:pt-2 md:mr-8">
          <div className="">
            <h1
              className=" lg:text-3xl  text-[#1E3767] text-[21px] lg:text-end  pt-10 md:text-end mdmr-8 "
              style={{
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "800",
              }}
            >
              عرض خاص لتداول
            </h1>
            <h1
              className=" lg:text-4xl text-[#9A2168]  text-[19px] lg:text-end pl-5 md:text-end tracking-wider"
              style={{
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "800",
              }}
            >

              !لمؤشرات الأمريكية
            </h1>
          </div>
          <p
            className="lg:mt-2 text-[#14192E] text-sm lg:text-end  my-1 mx-6 md:mx-0 md:pl-2 lg:mx-0 lg:pl-24 tracking-wide opacity-[] md:text-end mr-8"
            style={{
              fontFamily: "Tajawal, sans-serif",
              fontWeight: "400",
            }}
          >
ستفد من تقلبات الأسواق الأمريكية مع عرضنا الحصري. مع Accuindex، نمنحك الفرصة لاستكشاف الأسواق العالمية وتوسيع محفظتك في مؤشرات داو جونز وناسداك وS&P 500.

سواء كنت متداولًا متمرسًا أو جديدًا في السوق، يتيح لك هذا العرض المميز اكتشاف إمكانياتك وتعزيز خبراتك في تداول المؤشرات الأكثر تأثيرًا.
          </p>
          <p
            className="pt-2 md:text-xl text-[#9A2168]"
            style={{
              fontFamily: "Tajawal, sans-serif",
              fontWeight: "800",
            }}
          >
          جاهز للانطلاق في عالم التداول؟ ابدأ الآن
          </p>
          <button className="mt-4 md:mb-10 lg:mt-2 bg-[#9A2168] text-white  py-2 px-8  rounded" style={{ fontFamily: 'Tajawal, system-ui', fontWeight: '500' }}
            onClick={scrollToTop}
          >
            <p className="">افتح حسابك اليوم</p>
          </button>
        </div>

        {/* Image Section */}
        <div className="mr-10 lg:mt-0 lg:flex">
          <img
            src={Mobile}
            alt="Mobile"
            className="w-[400px] md:w-[250px] md:absolute md:top-0 md:-left-[120px] "
          />
        </div>
      </div>
    </div>
  );
};


