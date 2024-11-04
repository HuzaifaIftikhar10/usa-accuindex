import React from "react";
import nam from "../images/name.png"

export const SlideEight = () => {
  return (
    <>
      <div
        className="pb-8 px-8 items-center justify-center lg:mx-12 xl:mx-32 2xl:mx-64"
        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
      >
        <div className=" items-center justify-center md:text-end text-center md:flex md:flex-row-reverse">
          <p dir="rtl" className="text-center inline-block">
            <img
              src={nam}
              alt=""
              className=" pb-4 md:w-56 md:pb-1 md:pl-2 inline-block"
            />
            تحذير المخاطر: قبل البدء في التداول؛ ينبغي عليك إدراك المخاطر
            المترتبة على ذلك، والأخذ بعين الاعتبار مستوى خبرتك في هذا المجال.
            وعلاوة على ذلك؛ فإن التداول والاستثمار في الأسواق العالمية والبورصات
            الأجنبية ينطويان على درجة عالية من المخاطر وقد يتسببان في خسائر
            كبيرة، لذلك فإنهما قد لا يكونان خيارين مناسبين لجميع الأفراد
          </p>
        </div>
      </div>
      <div className="text-center "
        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
      >
        <hr className="border-t border-gray-400 w-full " />
        <p className="text-[#14192E] opacity-[0.75] p-4 ">
          ©️ 2024 Accuindex. كل الحقوق محفوظة
        </p>
      </div>
    </>
  );
};


