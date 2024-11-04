import React from "react";
import n from "../images/Neteller.png";
import acc from "../images/Accupaycard.png";
import amer from "../images/Americanexpress.png";
import crypto from "../images/Crypto.png";
import Master from "../images/mastercard.png";
import Myf from "../images/myfatoorah.png";
import wt from "../images/Wiretransfer.png";
import Vou from "../images/voucherry.png";
import Skrill from "../images/skrill.png";
import Visa from "../images/visa.png";

export const SlideSeven = () => {
    return (
        <div className="lg:pt-28 lg:pb-20 2xl:pl-20 2xl:pr-20 bg-white">
            {/* Header */}
            <div className="pt-24 pb-8">
                <p className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E3767]"
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}>
                    عمليات إيداع وسحب <br />فورية
                </p>
            </div>
            
            {/* Icon Grid */}
            <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:flex lg:flex-row lg:justify-center lg:space-x-4 pt-2 pb-10 lg:pt-10">
                {[n, acc, amer, crypto, Master, Myf, wt, Vou, Skrill, Visa].map((src, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img className="w-[77.03px]  " src={src} alt={`icon-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};
