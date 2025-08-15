import { BsCheckCircleFill } from "react-icons/bs";
import img from "@/assets/consulting-page/2.png";
import Image from "next/image";

const SalesProfitGrowthStrategy = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-semibold text-[#171B26] font-inter leading-[120%]">
              Sales & Profit Growth Strategy
            </h1>

            <div className="space-y-5 text-gray-700 text-base sm:text-lg">
              {[
                "Review your pricing, offers, and revenue streams",
                "Create a step-by-step sales process to attract and convert clients",
                "Align Your Marketing Efforts With Sales and Client Retention",
              ].map((text, i) => (
                <p key={i} className="flex gap-3 items-center text-[#28543F]">
                  <BsCheckCircleFill className="flex-shrink-0" size={20} />
                  {text}
                </p>
              ))}
            </div>

            <button
              className="mt-6 bg-green-800 hover:bg-white hover:text-green-800 text-white px-8 py-3 rounded-full font-semibold border-2 border-green-800 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-800"
              type="button"
            >
              Discuss Your Sales Challenges
            </button>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={img}
              alt="Sales & Profit Growth Strategy"
              className="w-full h-auto rounded-2xl"
              width={555}
              height={610}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesProfitGrowthStrategy;
