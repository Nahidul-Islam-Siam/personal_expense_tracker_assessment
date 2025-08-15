
import bgImage from "@/assets/bg.png"; // your actual image path

export default function JoinTeamSection() {
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
Join Our Team
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary Button */}
              <button className="bg-white cursor-pointer hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-500 text-[var(--primary-color)] px-6 py-3 rounded-full font-medium text-base flex items-center gap-3 shadow-md hover:shadow-lg hover:scale-105 transform-gpu">
          Apply Here
          
              </button>

              {/* Secondary Button */}
              <button className="bg-white cursor-pointer hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200 text-[var(--primary-color)] px-6 py-3 rounded-full font-medium text-base flex items-center gap-3 shadow-md hover:shadow-lg hover:scale-105 transform-gpu">
          View Openings
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
