"use client";

import Image from "next/image";
import individualImage from "@/assets/tax-preparation/individual-docs.png";
import businessImage from "@/assets/tax-preparation/business-docs.png";
import { FaCheckCircle } from "react-icons/fa";

const WhatDocuments = () => {
  return (
    <section className="bg-[#f1f9f6] py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="md:text-5xl mb-16 md:mb-14 text-center text-4xl text-gray-900 leading-[120%] font-bold font-inter uppercase">
          What Documents Do I Need?
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Individual Card */}
          <div
            className="bg-white rounded-2xl p-4 shadow-md flex flex-col
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            hover:shadow-xl hover:scale-[1.015] hover:-translate-y-1 transform"
            style={{ width: "350px", height: "300px" }}
          >
            <div className="flex justify-center mb-2">
              <Image
                src={individualImage}
                alt="Individual Document Illustration"
                width={150}
                height={150}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-left">Individual</h3>
            <ul className="text-left text-sm space-y-1">
              <li className="flex items-start gap-1">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                ID and Social Security
              </li>
              <li className="flex items-start gap-1">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                Income Documents
                
              </li>
              <ul className="ml-8 list-disc text-gray-700 text-xs mt-1">
                  <li>W2</li>
                  <li>1099s</li>
                  <li>Others</li>
                </ul>
              <li className="flex items-start gap-1">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                Deduction & Credit Documents
              </li>
            </ul>
          </div>

          {/* Business Card */}
          <div
            className="bg-white rounded-2xl p-4 shadow-md flex flex-col
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            hover:shadow-xl hover:scale-[1.015] hover:-translate-y-1 transform"
            style={{ width: "350px", height: "300px" }}
          >
            <div className="flex justify-center mb-2">
              <Image
                src={businessImage}
                alt="Business Document Illustration"
                width={150}
                height={150}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-left">Business</h3>
            <ul className="text-left text-sm space-y-1">
              <li className="flex items-start gap-1">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                Profit & Loss Statements
              </li>
              <li className="flex items-start gap-1">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                Payroll Records
              </li>
              <li className="flex items-start gap-1">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                Business License or EIN
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDocuments;
