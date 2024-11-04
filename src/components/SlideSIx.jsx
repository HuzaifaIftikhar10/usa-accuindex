import React, { useState } from "react";

export const SlideSix = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    { question: "لماذا تعتبر الانتخابات الأمريكية مهمة للمتداولين؟", answer: ".تؤثر الانتخابات الأمريكية على الأسواق العالمية وتخلق تقلبات، مما يوفر فرصًا للتداول" },
    { question: "هل يمكنني تداول أصول مختلفة خلال الانتخابات الأمريكية؟", answer: ".نعم، يمكنك تداول فئات أصول متعددة بما في ذلك الأسهم والفوركس والسلع خلال الانتخابات الأمريكية" },
    { question: "كم من الوقت يستغرق لبدء التداول؟", answer: ".بمجرد التسجيل، والتحقق من حسابك، وتمويله، يمكنك البدء في التداول خلال دقائق!" },
  ];

  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-[#530037] to-[#9A2168] text-white p-6 mt-10">
      {/* Centered Heading */}
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-4 mt-10"
        style={{
          fontFamily: "Tajawal, sans-serif",
          fontWeight: "800",
        }}
      >
        (FAQ) الأسئلة الشائعة
      </h1>

      {/* FAQ Items */}
      <div className="text-right md:w-5/6 py-8 tracking-widest">
        {questions.map((item, index) => (
          <div key={index} className="mb-6">
            <div
              className="items-center  cursor-pointer text-base md:text-lg lg:text-xl font-semibold"
              onClick={() => toggleQuestion(index)}
              style={{
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "600",
              }}
            >
              <span>{item.question}</span>
              <span className="text-2xl ml-2">
                {openQuestion === index ? "-" : "+"}
              </span>
            </div>

            {openQuestion === index && (
              <p
                className="text-xs md:text-lg lg:text-xl text-[#FFFFFF] mt-2"
                style={{
                  fontFamily: "Tajawal, sans-serif",
                  fontWeight: "300",
                }}
              >
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
