"use client";
 
import appointmentImg1 from "@/assets/BookAppointmentPage/Frame 2147228862.png";
import appointmentImg2 from "@/assets/BookAppointmentPage/Frame 21472288624.png";
import appointmentImg3 from "@/assets/BookAppointmentPage/Frame 2147228863.png";
import { Card } from "antd";

 
import Image from "next/image";
 
export default function HowItWorksSection() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12   bg-stone-50  px-4 sm:px-6 lg:px-8">
        <h1 className="md:text-5xl text-4xl text-gray-900 leading-[120%] font-bold text-black-900 font-inter mb-10">
            How It Works
          </h1>
 
      <div className="w-full container flex  xl:flex-row flex-col gap-2 ">
        <div className="flex xl:flex-col flex-col-reverse gap-2">
          {" "}
          {/* Step 1: Text */}
          <div>
            <Card
              style={{
                backgroundColor: "#f2e8d0",
                border: "none",
                height: "100%",
              }}
              className="rounded-xl shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-3">
                Choose Your Service
              </h2>
              <p className="text-gray-600 flex-grow">
                Select the service that best fits your needs and get started
                today!
              </p>
              <div className="text-[#82A88C] text-8xl font-bold mt-6 text-right">
                01
              </div>
            </Card>
          </div>
          {/* Step 1: Image */}
          <div>
            <Card
              style={{
                border: "none",
                backgroundColor: "transparent",
                height: 290,
                padding: 0,
              }}
              className="rounded-xl"
            >
              <div className="w-full h-full">
                <Image
                  src={appointmentImg1}
                  alt="Step 1 Illustration"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </Card>
          </div>
        </div>
 
        <div className="flex  flex-col-reverse gap-2">
          {" "}
          {/* Step 2: Text */}
          <div>
            <Card
              style={{
                backgroundColor: "#f2e8d0",
                border: "none",
                height: "100%",
              }}
              className="rounded-xl shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-7">
                Select a Date & Time
              </h2>
              <p className="text-gray-600 flex-grow">
                Pick a convenient date and time that works perfectly for you.
              </p>
              <div className="text-[#82A88C] text-7xl font-bold mt-7 text-right">
                02
              </div>
            </Card>
          </div>
          {/* Step 2: Image */}
          <div>
            <Card
              style={{
                border: "none",
                backgroundColor: "transparent",
                height: 300,
                padding: 0,
              }}
              className="rounded-xl"
            >
              <div className=" w-full h-full">
                <Image
                  src={appointmentImg3}
                  alt="Step 2 Illustration"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </Card>
          </div>
        </div>
 
        <div className="flex  xl:flex-col flex-col-reverse gap-2">
          {/* Step 3: Text */}
          <div>
            <Card
              style={{
                backgroundColor: "#f2e8d0",
                border: "none",
                height: "100%",
              }}
              className="rounded-xl shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-7">
                Confirm Appointment
              </h2>
              <p className="text-gray-600 flex-grow">
                Please review your details and confirm your appointment.
              </p>
              <div className="text-[#82A88C] text-7xl font-bold mt-7 text-right">
                03
              </div>
            </Card>
          </div>
 
          {/* Step 3: Image */}
          <div>
            <Card
              style={{
                border: "none",
                backgroundColor: "transparent",
                height: 300,
                padding: 0,
              }}
              className="rounded-xl"
            >
              <div className=" w-full h-full">
                <Image
                  src={appointmentImg2}
                  alt="Step 3 Illustration"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
 