import React from "react";
import Layer from "../images/layer1.png";
import Layer1 from "../images/layer2.png";
import Layer2 from "../images/layer3.png";
import Layer3 from "../images/layer4.png";
import Layer4 from "../images/layer5.png";

export const SlideThree = () => {
    return (
        <div className="lg:pt-28 lg:pb-20 2xl:pl-20 2xl:pr-20 ">
            <div className="pt-24 pb-8">
                <p className="text-center text-2xl md:text-3xl lg:text-5xl font-bold text-[#1E3767]"
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}><span className="text-[#9A2168] font-extrabold" >؟AccuIndex</span> لماذا تختار</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:space-x-4 space-y-4 md:space-y-7 lg:space-y-0 pt-2 pb-10 lg:pt-10">
                <div className="flex flex-col items-center">
                    <img
                        className="w-14 h-14 p-2  bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] xl:px-8  "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                        إدارة المخاطر بذكاء
                    </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-14" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    مع Accuindex ، يمكنك تقليل مخاطر التصفية القسرية للحساب عند تقلب السوق الشديد.
                    </p>
                </div>

                <div className="flex flex-col items-center pb-3 md:pb-7">
                    <img
                        className="w-14 h-14 p-2 bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer1}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] lg:text-nowrap "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                        تنفيذ فوري للصفقات
                    </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-14" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    استمتع بتنفيذ فوري للصفقات دون التأثير على الأسعار، حتى في أوقات التحركات السريعة                  
                     </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        className="w-14 h-14 p-2 bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer2}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                        تداول بلا تكاليف إضافية                   
                        </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-14" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    تقدم Accuindex حسابات إسلامية بدون رسوم تبييت على الصفقات، لتناسب جميع المتداولين
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        className="w-14 h-14 p-2 bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer3}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                    حماية الرصيد السلبي                    
                    </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-14" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    لن تقلق من خسارة أكثر من رأس المال المودع. نقدم حماية من الرصيد السلبي لتتمكن من التداول بثقة
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        className="w-14 h-14 p-2 bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer4}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                    حماية فائقة لرأس المال                    
                    </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-14" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    نضمن لك الحماية من التقلبات المفاجئة في الأسعار، مما يضمن عدم تأثر تداولك بفجوات السوق الكبيرة
                    </p>
                </div>
            </div>
        </div>
    );
};
