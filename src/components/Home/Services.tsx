import Image from "next/image";
import taxImg from "@/assets/home/tax-preparation.png";
import notaryImg from "@/assets/home/notary-service.png";
import businessImg from "@/assets/home/business-filing.png";
import consultingImg from "@/assets/home/business-consult.png";

const services = [
  {
    title: <>Individual & Business Filling</>,
    description: <>Accurate filing to maximize your refund and savings</>,
    image: taxImg,
    active: false,
  },
  {
    title: <>Real <br /> Estate</>,
    description: <>Guiding you through every step of buying or selling</>,
    image: businessImg,
    active: false,
  },
   {
    title: "Strategy & IT Consulting",
    description: (
      <>
        Get strategic advice to take <br /> your business forward.
      </>
    ),
    image: consultingImg,
    active: false,
  },
  {
    title: (
      <>
        Notary <br /> Services
      </>
    ),
    description: <>Certified notary services with flexible options</>,
    image: notaryImg,
    active: true,
  },
  
 
];

const Services = () => {
  return (
    <section className="bg-[var(--softColor)] py-12 container hover:text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
          Services Overview
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
    group p-6 shadow-sm border-[#EBEBEB] bg-[#F2F8F3] 
    transition-all duration-300 ease-in-out 
    hover:bg-[var(--primary-color)] hover:scale-[1.03] transform-gpu
    rounded-[25px] border flex flex-col
  "
            >
              <h3 className="font-semibold text-xl sm:text-2xl text-center sm:text-left text-[#171B26] transition-colors duration-300 ease-in-out group-hover:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-center sm:text-left text-[#585C67] transition-colors duration-300 ease-in-out group-hover:text-white">
                {service.description}
              </p>

              <div className="mt-4 flex justify-center items-center bg-white rounded-lg w-full h-40 sm:h-44">
                <Image
                  src={service.image}
                  alt="Service Image"
                  width={218}
                  height={180}
                  className="object-contain"
                />
              </div>

              <button
                className="
                mt-3
 border px-4 py-2 rounded-full text-sm font-medium 
      transition-colors duration-300 ease-in-out
      border-[#28543F] bg-white text-[var(--primary-color)] 
      group-hover:border-white group-hover:bg-transparent group-hover:text-white
    "
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
