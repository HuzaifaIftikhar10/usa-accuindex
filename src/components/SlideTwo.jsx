import React from "react";
import frame from "../images/Frame.png";
import photo from "../images/Mask.png";

export const SlideTwo = () => {
  return (
    <div className="bg-gradient-to-r from-[#530037] to-[#9A2168] xs:h-[563px] xss:h-[511px] xsss:h-[511px] 2xs:h-[511px] 3xs:h-[531px] 4xs:h-[511px] 5xs:h-[491px] 6xs:h-[472px] 7xs:h-[440px] md:h-[300px] lg:h-[396px] relative flex flex-col-reverse md:flex-row-reverse md:mb-20 lg:mb-12 mb-9">
      <div className="relative flex-1 flex items-center justify-center lg:pl-10">
        <div className="absolute top-[24px] md:top-[68px]">
          {/* Background Image (Frame) */}
          <img
            src={frame}
            alt="Frame"
            className="w-[250px] md:w-[340px] lg:w-[480px] h-auto object-cover "
          />
          {/* Overlay Image (Photo) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={photo}
              alt=""
              className="w-[230px] md:w-[320px] lg:w-[450px] h-auto object-contain "
            />
          </div>
        </div>
      </div>

      <div
        className="flex-1 flex items-center justify-center md:justify-end p-4"
        dir="rtl"
        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
      >
        <div className=" lg:p-16 xl:p-32 pt-10">
          <p className="text-white text-center md:text-start pl-2 pr- text-2xl md:text-2xl lg:text-2xl xl:text-3xl md:pr-4">
            تداول المؤشرات الأمريكية في
            ظل التقلبات الاقتصادية
          </p>
          <p
            className="pt-5 text-[#EAEAEA] text-sm text-center md:text-start p-5 lg:pl-22 xl:w-3/4"
            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
          >
            تُعد المؤشرات الأمريكية مثل داو جونز وناسداك وS&P 500 مرآةً لأداء القطاعات الاقتصادية الكبرى، حيث تقدم فرصًا استثنائية للتداول وسط التغيرات المستمرة.


          </p>
          <p
            className="pt-5 text-[#EAEAEA] text-sm text-center md:text-start p-5 lg:pl-22 xl:w-3/4"
            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
          >


            مع <span className="font-bold text-[17px]">Accuindex،</span> استفد من تقلبات السوق لتحقيق أقصى استفادة من حركات الأسعار.


          </p>
        </div>
      </div>
    </div>
  );

};

