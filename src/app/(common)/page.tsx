import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <Services />

      <Testimonials />
    </div>
  );
}
