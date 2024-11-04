import React from "react";


export const  SlideSix = () => {

    return (
        <div className="flex flex-col justify-center bg-gradient-to-r from-[#530037] to-[#9A2168] text-white p-6 mt-10"
        >
          {/* Centered Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl   font-medium text-center mb-4 mt-10"
          style={{
            fontFamily: "Tajawal, sans-serif",
            fontWeight: "800",
          }}>
          (FAQ)الأسئلة الشائعة
          </h1>
          
          {/* Right-Aligned Text Content */}
          <div className="text-right md:w-5/6 py-8 tracking-widest ">
            <p className="text-base mb-6 md:text-lg lg:text-xl"style={{
            fontFamily: "Tajawal, sans-serif",
            fontWeight: "600",
          }}>
            لماذا تعتبر الانتخابات الأمريكية مهمة للمتداولين؟ +
            </p>
            <p className="text-base mb-6  md:text-lg lg:text-xl" style={{
            fontFamily: "Tajawal, sans-serif",
            fontWeight: "600",
          }}>
             هل يمكنني تداول أصول مختلفة خلال الانتخابات الأمريكية؟ + 

            </p>
            <p className="text-base mb-6  md:text-lg lg:text-xl"style={{
            fontFamily: "Tajawal, sans-serif",
            fontWeight: "600",
          }}>
            كم من الوقت يستغرق لبدء التداول؟ - 
            </p>
            <p className="text-base md:text-lg lg:text-xl">
            <p className="text-xs  md:text-lg lg:text-xl text-[#FFFFFF]" 
             style={{
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "300",
              }}>
            بمجرد التسجيل، والتحقق من حسابك، وتمويله، يمكنك البدء في التداول خلال دقائق!
            </p>
            </p>
          </div>
        </div>
      );
  };

  