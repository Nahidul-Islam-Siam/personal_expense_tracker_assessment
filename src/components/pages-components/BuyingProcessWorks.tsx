import Home from "@/assets/icon/Home";
import { StepsProcess } from "./Step-process";
import Handshake from "@/assets/icon/HandShake";
import Search from "@/assets/icon/Search";
import FileCheck2 from "@/assets/icon/FileCheck2";
import Key from "@/assets/icon/Key";

export default function Page() {
  // Example showing you can mix React SVG icons and string SVG URLs
  const steps = [
    {
      title: "Get Pre-Approved",
      description: "Secure financing that fits your goals and budget.",
      icon: <Home />,
    },
    {
      title: "Meet Your Realtor",
      description: "Work with a realtor who understands your needs and market",
      icon: <Handshake />,
    },
    {
      title: "Search Your Home",
      description: "Tour houses that fit your budget and lifestyle.",
      icon: <Search />,
    },
    {
      title: "Make an Offer & Due Diligence",
      description:
        "From offers to inspections and negotiations—we’ve got it covered.",
      icon: <FileCheck2 />,
    },
    {
      title: "Close & Get Keys",
      description: "Close the deal and get the keys to your home.",
      // Any external or local SVG works:
      icon: <Key />,
      iconAlt: "Key handoff icon",
    },
  ];

  return (
    <main className="p-4 sm:p-6 bg-[#F1F8F4]">
      <StepsProcess
        title="How the Home Buying Process Works"
        steps={steps}
        accent="emerald"
      />
    </main>
  );
}
