"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import support1 from "@/assets/tax-preparation/support1.png";
import support2 from "@/assets/tax-preparation/support2.png";
import support3 from "@/assets/tax-preparation/support3.png";
import icon1 from "@/assets/tax-preparation/file 1.png";
import icon2 from "@/assets/tax-preparation/taxation 1.png";
import icon3 from "@/assets/tax-preparation/refund 1.png";

type Card =
  | {
      type: "image";
      image: StaticImageData;
      alt: string;
      bg: string;
    }
  | {
      type: "text";
      icon: StaticImageData;
      title: string;
      description: string;
      buttonText: string;
      bg: string;
      link?: string;
    };

const TaxPreparation = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAmend, setIsAmend] = useState<boolean | null>(null); // null = not selected yet
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    taxYear: "",
  });

  const toggleModal = () => {
    setShowModal(!showModal);
    setIsAmend(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      taxYear: "",
    });
  };

  const handleAmendClick = () => {
    setShowModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData, "Amendment?", isAmend);
    // Here, send data to backend (e.g., TaxAmend table)
    toggleModal();
  };

  const cards: Card[] = [
    {
      type: "image",
      image: support3,
      alt: "Support Image 1",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: icon1,
      title: "File a Tax Amendment",
      description: "Amend Past Returns Quickly and Correctly",
      buttonText: "Amend My Return",
      bg: "bg-[var(--third-color)]",
    },
    {
      type: "image",
      image: support2,
      alt: "Support Image 2",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: icon2,
      title: "Start Filing Today",
      description:
        "File Now or Finalize Late/Extension Returns — EFinancial Can Help!",
      buttonText: "Start Filing Now",
      bg: "bg-[var(--third-color)]", 
      link: "https://form.jotform.com/250037230428144",
    },
    {
      type: "image",
      image: support1,
      alt: "Support Image 3",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: icon3,
      title: "Track Your Tax Refund",
      description: "Want to know your refund status? Check your status here.",
      buttonText: "Track My Refund",
      bg: "bg-[var(--third-color)]",
      link: "https://sa.www4.irs.gov/wmr/",
    },
  ];

  return (
    <section className="mt-12 mx-auto container px-4">
      <h1 className="md:text-5xl mb-16 md:mb-14 text-center text-4xl text-gray-900 leading-[120%] font-bold font-inter uppercase">
        Year-Round Tax Support
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards?.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col ease-[cubic-bezier(0.4,0,0.2,1)] 
            hover:shadow-xl hover:scale-[1.015] hover:-translate-y-1 transform h-[280px] relative`}
          >
            {card.type === "image" ? (
              <div className="relative w-full h-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            ) : (
              <div className="p-6 flex flex-col justify-between flex-1 text-white">
                <div className="w-14 h-14 mb-4 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {card.title}
                  </h3>
                  <p className="text-sm mb-4 text-[#585C67]">
                    {card.description}
                  </p>
                </div>
                <button
                  className="mt-6 text-center w-full md:w-auto bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800 transition-all duration-300 ease-in-out hover:bg-white hover:text-green-800 hover:shadow-md hover:scale-[1.03]"
                  onClick={() => {
                    if (card.title === "File a Tax Amendment") {
                      handleAmendClick();
                    } else if (card.link) {
                      window.open(card.link, "_blank"); // open link in new tab
                    }
                  }}
                >
                  {card.buttonText}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            {isAmend === null ? (
              <>
                <h2 className="text-lg font-semibold mb-4 text-center">
                  Is this an amendment to a return we filed for you?
                </h2>
                <div className="flex gap-2 justify-center items-center">
                  <button
                    className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
                    onClick={() => setIsAmend(true)}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-green-700 text-black px-4 py-2 rounded hover:text-white"
                    onClick={() => setIsAmend(false)}
                  >
                    No
                  </button>
                </div>
              </>
            ) : isAmend ? (
              <>
                <h2 className="text-lg font-semibold mb-4">
                  Amendment Details
                </h2>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="taxYear"
                  placeholder="Tax Year"
                  value={formData.taxYear}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border rounded"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </>
            ) : (
              <>
                <p className="mb-4">
                  We don’t amend third-party returns. However, we can review
                  your situation and recommend next steps.
                </p>
                <h2 className="text-lg font-semibold mb-4">
                  Schedule a Consultation
                </h2>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="taxYear"
                  placeholder="Tax Year"
                  value={formData.taxYear}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border rounded"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </>
            )}
            <button
              onClick={toggleModal}
              className="mt-4 w-full bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TaxPreparation;
