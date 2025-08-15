import React from "react";
import Image from "next/image";
import Img from "@/assets/Group.png";

export default function Component() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-semibold text-[#171B26] font-inter leading-[120%]">
              Our Mission
            </h1>

            <div className="space-y-4 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                To simplify the financial lives of our clients by delivering expert, 
                transparent, and supportive services tailored to their individual 
                and business needs.
              </p>

              <p>
                With a focus on tax preparation, notary services, business filings, 
                and small business consulting, we provide the tools, expertise, 
                and support you need to make confident financial and business 
                decisions — all in one place.
              </p>
            </div>

            <button
              aria-label="Get started with our services"
              className="mt-6 bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800 transition hover:bg-white hover:text-green-800 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Image with hover effect */}
          <div className="relative flex justify-center lg:justify-end items-center max-w-md mx-auto lg:mx-0">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl rounded-xl overflow-hidden">
              <Image
                src={Img}
                alt="Mission illustration showing a person with charts and business elements"
                className="w-full h-auto"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
