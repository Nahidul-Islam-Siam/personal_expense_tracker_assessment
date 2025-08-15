import Image from "next/image";
import heroImg from "@/assets/home/hero-bg-1.png";
import videoThumb from "@/assets/home/video-image.png";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white py-12 container">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="md:text-6xl text-4xl text-gray-900 leading-[120%] font-bold font-inter">
            Get Started on Your <br /> Tax Filing
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            Expert help with taxes, real estate, notary, and business solutions
          </p>
          <div>
            <button className="mt-6 hover:bg-white hover:text-green-800 bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800 transition">
              <Link href="/book-appointment">Book an Appointment</Link>
            </button>
          </div>

          {/* Video Box */}
          <div className="mt-10 bg-green-50 rounded-lg p-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="md:text-2xl text-xl font-semibold">
                What to Expect <br /> When You File
                <br /> with Us
              </h3>
              <p className="text-[#585C67] text-sm mt-4">
                Watch a quick overview of the filing process
              </p>
            </div>
            <div className="relative w-64 h-40 rounded-lg overflow-hidden">
              <Image
                src={videoThumb}
                alt="Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <FaPlay className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative w-full h-full">
          <div className="relative w-full h-full rounded-3xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105">
            <Image
              src={heroImg}
              alt="Hero Illustration"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>

          {/* <button className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 text-timber-green-900-main md:px-6 px-3 md:text-2xl md:py-3 py-2 font-medium transition rounded-full border hover:bg-timber-green-800 border-timber-green-800 bg-white font-inter text-[15px] leading-[120%] text-[#182F25] hover:bg-[#182F25] hover:text-white">
            File My Taxes
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 7L7 17M17 7H7m10 0v10"
                />
              </svg>
            </span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
