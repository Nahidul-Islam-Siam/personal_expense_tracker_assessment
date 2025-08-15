import { BsCheckCircleFill } from "react-icons/bs";
import img from "@/assets/consulting-page/3.png";
import Image from "next/image";

const OperationsSystemsSetup = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F1F8F4]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-row-dense">
          {/* Right Image on Desktop, left on mobile due to row-dense */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={img}
              alt="Operations and Systems Setup"
              className="w-full h-auto rounded-2xl"
              width={555}
              height={610}
              priority
            />
          </div>

          {/* Left Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-semibold text-[#171B26] font-inter leading-[120%]">
          Operations & Systems Setup
            </h1>

            <div className="space-y-5 text-gray-700 text-base sm:text-lg">
              {[
                "Streamline your day-to-day with better tools and workflows",
                "Recommend software and automations that save time",
                "Help build efficient systems for booking, sales, and client management",
              ].map((text, i) => (
                <p key={i} className="flex gap-3 items-center text-[#28543F]">
                  <BsCheckCircleFill className="flex-shrink-0" size={20} />
                  {text}
                </p>
              ))}
            </div>

            <button className="mt-6 hover:bg-white hover:text-green-800 bg-green-800 text-white px-6 py-3 rounded-full font-medium  border-2 border-green-800 transition">
         Identify Your Workflow Gaps
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSystemsSetup;
