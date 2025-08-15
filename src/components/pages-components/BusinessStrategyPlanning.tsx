"use client";

import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import img from "@/assets/consulting-page/1.png";

const BusinessStrategyPlanning = () => {
  return (
    <section className="bg-white py-12 container">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-24">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#171B26] font-inter leading-[120%]">
              Business Strategy & Planning
            </h1>

            <p className="text-gray-600 max-w-md mt-3">
              Get clear, actionable guidance to drive your business forward with
              purpose and clarity.
            </p>
          </div>

          <div className="space-y-3 text-gray-700 text-base sm:text-lg">
            {[
              "Create a clear, realistic roadmap tailored to your goals",
              "Identify opportunities to grow, improve, or pivot",
              "Support with business plans, vision mapping, or funding prep",
            ].map((text, i) => (
              <p key={i} className="flex gap-3 items-center text-[#28543F]">
                <BsCheckCircleFill className="flex-shrink-0" size={20} />
                {text}
              </p>
            ))}
          </div>

          <button className="mt-6 hover:bg-white hover:text-green-800 bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800 transition">
            Start With a Discovery Call
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-[555px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <Image
            src={img}
            alt="Business Strategy Planning"
            className="w-full rounded-2xl"
            width={555}
            height={555}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategyPlanning;
