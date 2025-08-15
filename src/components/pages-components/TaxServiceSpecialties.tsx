"use client";

import Image from "next/image";
import illustration from "@/assets/tax-preparation/tax-service-illustration.png";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const TaxServiceSpecialties = () => {
  return (
    <section className="py-20 bg-white container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left: Illustration */}
        <div
          className="flex justify-center transition-all duration-300 
          ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:-translate-y-1"
        >
          <Image
            src={illustration}
            alt="Tax service illustration"
            width={555}
            height={455}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h1 className="md:text-5xl mb-10 md:mb-14 text-4xl text-gray-900 leading-[120%] font-bold font-inter uppercase text-center md:text-left">
            TAX SERVICE SPECIALTIES
          </h1>

          <ul className="space-y-4 text-[#333] text-base">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              Individuals (all return types)
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              Self-Employed Professionals & Independent Contractors
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              Small-Business Owners
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              Tax Planning and Optimization to Minimize Liability
            </li>
          </ul>

          {/* ✅ Inline styled button with modern UX */}
          <button
            className="mt-6 w-full md:w-auto bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            hover:bg-white hover:text-green-800 hover:shadow-lg hover:scale-[1.05]"
          >
            <Link href="/book-appointment">Book an Appointment</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaxServiceSpecialties;
