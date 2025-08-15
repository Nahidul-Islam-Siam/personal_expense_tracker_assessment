import { ArrowUpRight } from "lucide-react";
import bgImage from "@/assets/bg.png"; // your actual image path

export default function CtaSection() {
  return (
    <div className="flex items-center justify-center p-6 mb-20 mt-20">
      <div className="w-full max-w-4xl">
        <div className="relative rounded-3xl px-12 py-16 overflow-hidden shadow-2xl bg-[var(--primary-color)] group">

          {/* Background image with zoom on hover */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out transform group-hover:scale-105"
            style={{ backgroundImage: `url(${bgImage.src})` }}
          />
          
          {/* Overlay for better text contrast, subtle change on hover */}
         

          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-12 tracking-tight drop-shadow-lg">
              Let&apos;s Build What&apos;s Next
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary Button */}
              <button className="bg-white cursor-pointer hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-500 text-[var(--primary-color)] px-6 py-3 rounded-full font-medium text-base flex items-center gap-3 shadow-md hover:shadow-lg hover:scale-105 transform-gpu">
                Schedule a Free Consultation
                <span className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </button>

              {/* Secondary Button */}
              <button className="bg-white cursor-pointer hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200 text-[var(--primary-color)] px-6 py-3 rounded-full font-medium text-base flex items-center gap-3 shadow-md hover:shadow-lg hover:scale-105 transform-gpu">
                Contact Us for Custom Support
                <span className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
