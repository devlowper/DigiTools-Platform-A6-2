const Banner = ({ onExplore }) => {
  return (
    <section className="bg-white min-h-[760px] flex items-center">
      <div className="max-w-[1200px] mx-auto w-full flex items-center gap-[60px] px-6 py-[60px]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Badge */}
          <span className="inline-flex self-start rounded-full bg-[#e1e7ff] text-violet-700 text-sm font-medium px-4 py-2">
            ✨ New: AI-Powered Tools Available
          </span>

          {/* Headline */}
          <h1 className="text-[72px] font-extrabold leading-[84px] text-[#101727]">
            Supercharge Your Digital Workflow
          </h1>

          {/* Sub-text */}
          <p className="text-lg text-[#627382] max-w-[520px]">
            Access the most powerful suite of digital tools designed to boost your productivity, creativity, and efficiency — all in one place.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={onExplore}
              className="rounded-full h-[52px] px-6 bg-violet-600 text-white font-bold hover:bg-violet-700 transition-colors cursor-pointer"
            >
              Explore Products
            </button>
            <button className="rounded-full h-[52px] px-6 border-2 border-[#e2e2e2] font-bold flex gap-2 items-center text-[#101727] hover:border-violet-300 transition-colors cursor-pointer">
              <img src="./assets/Play.png" alt="play" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block flex-shrink-0">
          <img
            src="./assets/banner.png"
            alt="DigiTools Dashboard"
            className="w-[500px] h-[590px] rounded-[8px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
