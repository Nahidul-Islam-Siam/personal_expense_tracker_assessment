"use client";

import Image from "next/image";
import img1 from "@/assets/real-estate/1.png";
import img2 from "@/assets/real-estate/2.png";
import { BsCheckCircleFill } from "react-icons/bs";

const HomeownershipHero = () => {
  return (
    <section className="container mx-auto px-4 mt-10 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col ">
          <div className="overflow-hidden rounded-3xl shadow-md transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={img1}
              alt="Homeownership Hero Image 1"
              className="w-full h-[400px] object-fit"
              width={500}
              height={300}
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#171B26] mt-10 leading-snug">
            Your Path to Homeownership Starts Here
          </h1>

          <p className="text-[17px] md:text-[18px] text-[#585C67] mt-6 mb-6 leading-relaxed">
            Whether you need a trusted realtor or expert guidance as a loan
            officer, we’re here to help you find — and finance — your dream
            home.
          </p>

          <button className="w-fit mt-9 hover:bg-white hover:text-green-800 bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800 transition-all duration-300 ease-in-out">
            Talk to a Realtor
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center">
          <div className="overflow-hidden rounded-3xl shadow-md transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={img2}
              alt="Homeownership Hero Image 2"
              className="w-full h-[400px] object-fit"
              width={500}
              height={300}
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#171B26] mt-10 leading-snug">
            Ready to Start the Pre-Approval Process
          </h1>

          <div className="mt-6 space-y-3 text-[#333] text-base">
            {[
              "Guides borrowers through the loan process",
              "Evaluates applications and financial documents",
              "Recommends the right loan options and explains terms",
              "Helps get loans approved and closed smoothly",
            ].map((text, idx) => (
              <p className="flex items-start gap-2" key={idx}>
                <BsCheckCircleFill className="text-[#28543F] mt-1 shrink-0" />
                {text}
              </p>
            ))}
          </div>
          {/* 
          <p className="text-[17px] md:text-[18px] text-[#585C67] mt-6 mb-6 border-l-4 border-[#28543F] pl-4 leading-relaxed">
            We make financing feel simple — whether you&apos;re buying your
            first home or expanding your investments.
          </p> */}

          <button className="w-fit mt-4 hover:bg-white hover:text-green-800 bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800 transition-all duration-300 ease-in-out">
            Talk to a Loan Officer
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeownershipHero;
