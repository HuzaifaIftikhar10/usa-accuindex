import React from "react";
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Four from "../images/4.png";

export const SlideFive = () => {
    return (
        <div className="pt-24 lg:mt-28 lg:pb-20 2xl:pl-20 2xl:pr-20">
            {/* Title Section */}
            <div className="text-center mx-auto mb-10 lg:mb-16">
                <div className=" text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E3767] max-w-2xl mx-auto bg"
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "700", display: 'inline-flex' }}>

                    قم بالإيداع الآن واحصل على بونص ايداع يصل إلى
                </div>
                <div className=" text-2xl md:text-3xl lg:text-4xl font-bold text-[#9A2168] lg:mr-56 lg:-mt-[36px]"
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "700",

                    }}>
                    30%

                </div>
            </div>

            {/* Steps Section */}
            <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:space-x-32 space-y-6 lg:space-y-0 lg:pt-1">
                {/* Step 4 */}
                <div className="flex flex-col items-center text-center mt-10 md:mt-0">
                    <img
                        className="w-16 h-16 lg:w-24 lg:h-24 pb-6"
                        src={Four}
                        alt="Step 4"
                    />
                    <h2 className="text-lg lg:text-2xl font-semibold pt-3 text-[#1E3767]" style={{ fontFamily: "Tajawal, system-ui" }}>
                        ابدأ التداول
                    </h2>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        className="w-16 h-16 lg:w-24 lg:h-24 pb-6"
                        src={Three}
                        alt="Step 3"
                    />
                    <h2 className="text-lg lg:text-2xl font-semibold pt-3 text-[#1E3767]" style={{ fontFamily: "Tajawal, system-ui" }}>
                        احصل على البونص
                    </h2>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        className="w-16 h-16 lg:w-24 lg:h-24 pb-6"
                        src={Two}
                        alt="Step 2"
                    />
                    <h2 className="text-lg lg:text-2xl font-semibold pt-3 text-[#1E3767]" style={{ fontFamily: "Tajawal, system-ui" }}>
                        أودع في حسابك
                    </h2>
                </div>

                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        className="w-16 h-16 lg:w-24 lg:h-24 pb-6"
                        src={One}
                        alt="Step 1"
                    />
                    <h2 className="text-lg lg:text-2xl font-semibold pt-3 text-[#1E3767]" style={{ fontFamily: "Tajawal, system-ui" }}>
                        سجل الآن
                    </h2>
                </div>
            </div>
        </div>
    );
};
