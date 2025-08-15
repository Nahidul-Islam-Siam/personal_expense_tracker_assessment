"use client";

import Image from "next/image";
import icon1 from "@/assets/tax-preparation/1.svg";
import icon2 from "@/assets/tax-preparation/2.svg";
import icon3 from "@/assets/tax-preparation/3.svg";

const CommitmentToExcellence = () => {
  const features = [
    {
      icon: icon1,
      label: "Over 5+ Years of Tax Experience",
    },
    {
      icon: icon2,
      label: "Authorized IRS e-file Providers",
    },
    {
      icon: icon3,
      label: "Fast, Accurate, and Secure Process",
    },
  ];

  return (
    <section className="bg-[#edf7f4] py-16 mt-20 mb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="md:text-5xl mb-16 text-4xl text-gray-900 leading-[120%] font-bold font-inter uppercase">
          OUR COMMITMENT TO EXCELLENCE
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white w-full h-[278px] mx-auto rounded-xl p-8 flex flex-col items-center justify-center text-center 
                shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <div
                className="bg-[#1f4e3d] p-4 rounded-full mb-6 transition-transform duration-300 group-hover:rotate-12"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-base sm:text-xl font-semibold text-[#1a1a1a]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentToExcellence;
