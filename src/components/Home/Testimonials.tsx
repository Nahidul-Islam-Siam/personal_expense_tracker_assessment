import Image from "next/image";
import { FaStar } from "react-icons/fa";
import user1 from "@/assets/home/user1.png";
import user2 from "@/assets/home/user2.png";
import user3 from "@/assets/home/user3.png";
import user4 from "@/assets/home/user4.png";
// import user5 from "@/assets/home/user5.png";
import user6 from "@/assets/home/user6.png";
import ReviewText from "./ReviewText";

const testimonials = [
  {
    name: "Courtney Henry",
    location: "Orlando, FL",
    reviewText:
      "Outstanding Service EFinancial Firm has consistently delivered exceptional service. Their team is thorough, efficient, and takes the time to explain complex tax matters in a way that's easy to understand. I feel confident that my finances are in good hands. Highly recommend!",
    review: (
      <>
        Outstanding Service EFinancial Firm has consistently delivered
        exceptional service. Their team is thorough, efficient, and takes the
        time to explain complex tax matters in a way that&apos;s easy to
        understand. I feel confident that my finances are in good hands. Highly
        recommend!
      </>
    ),
    image: user6,
    rating: 5.0,
  },
  {
    name: "Eleanor Pena",
    location: "Orlando, FL",
    reviewText:
      "From the moment I walked into EFinancial Firm, I was impressed by their professionalism and attention to detail. The team is approachable, and their expertise in tax preparation and accounting is unmatched. A top-notch firm!",
    review: (
      <>
        From the moment I walked into EFinancial Firm, I was impressed by their
        professionalism and attention to detail. The team is approachable, and
        their expertise in tax preparation and accounting is unmatched. A
        top-notch firm!
      </>
    ),
    image: user1,
    rating: 5.0,
  },
  {
    name: "Emily Parker",
    location: "Chicago, IL",
    reviewText:
      "Eslandie at Efinancial did an amazing job with my tax return. She went above and beyond to get me the max on my refund and I am truly grateful to have her as my tax preparer. She never disappoints me. I have been filing with her for years now and I will always go back.",
    review: (
      <>
        Eslandie at Efinancial did an amazing job with my tax return. She went
        above and beyond to get me the max on my refund and I am truly grateful
        to have her as my tax preparer. She never disappoints me. I have been
        filing with her for years now and I will always go back.
      </>
    ),
    image: user2,
    rating: 5.0,
  },
  {
    name: "Dianne Russell",
    location: "Orlando, FL",
    reviewText:
      "EFinancial did my taxes and gave me exceptional service. Eslandie is amazing at maximizing returns",
    review: (
      <>
        {" "}
        EFinancial did my taxes and gave me exceptional service . Eslandie is
        amazing at maximizing returns
      </>
    ),
    image: user4,
    rating: 5.0,
  },
  {
    name: "Sophia Martinez",
    location: "Atlanta, GA",
    reviewText:
      "Eslandie at EFinancial is amazing ! She’s very patient and very helpful. She has a plethora of resources to assist you. I definitely recommend her for all your taxes or realtor needs. She is also Haitian and very fluent in creole",
    review: (
      <>
        Eslandie at EFinancial is amazing ! She’s very patient and very helpful.
        She has a plethora of resources to assist you. I definitely recommend
        her for all your taxes or realtor needs. She is also Haitian and very
        fluent in creole
      </>
    ),
    image: user3,
    rating: 5.0,
  },
  {
    name: "Wade Warren",
    location: "Orlando, FL",
    reviewText:
      "I've been filing my taxes with EFinancial for years, and the experience is always outstanding. The team is knowledgeable, professional, and truly takes the time to explain everything in a way I can understand. They ensure every detail is handled accurately and go above and beyond to maximize my refund and minimize my stress. I appreciate their honesty, efficiency, and commitment to keeping me informed throughout the process. Highly recommend them to anyone looking for a reliable and trustworthy tax service.",
    review: (
      <>
        I&apos;ve been filing my taxes with EFinancial for years, and the
        experience is always outstanding. The team is knowledgeable,
        professional, and truly takes the time to explain everything in a way I
        can understand. They ensure every detail is handled accurately and go
        above and beyond to maximize my refund and minimize my stress. I
        appreciate their honesty, efficiency, and commitment to keeping me
        informed throughout the process. Highly recommend them to anyone looking
        for a reliable and trustworthy tax service.
      </>
    ),
    image: user6,
    rating: 5.0,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0D1F1D] py-16">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
          What our clients  say about us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((t, index) => (
            <div
              key={index}
              className="bg-[#122623] text-white rounded-xl p-12 flex flex-col justify-between shadow-lg
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl"
            >
              {/* <p className="text-sm mb-4">{t?.review}</p> */}
              <ReviewText  text={t.reviewText} />
              <div className="flex items-center mt-auto">
                <Image
                  src={t?.image}
                  alt={t?.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <h4 className="font-semibold">{t?.name}</h4>
                  <p className="text-gray-400 text-xs">{t?.location}</p>
                </div>
                <div className="ml-auto flex items-center text-yellow-400">
                  <FaStar className="mr-1" />
                  <span className="text-white">{t?.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
