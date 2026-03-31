const CTABanner = ({ onExplore }) => {
  return (
    <section className="bg-gradient-to-br from-violet-700 to-violet-500 py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-8">
        <h2 className="text-[40px] font-extrabold text-white text-center max-w-[640px]">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-base text-white opacity-90 text-center max-w-[520px]">
          Join thousands of professionals who use DigiTools every day to create, automate, and grow their businesses.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onExplore}
            className="w-[163px] h-[52px] rounded-full bg-white text-violet-700 font-semibold hover:bg-violet-50 transition-colors cursor-pointer"
          >
            Explore Products
          </button>
          <button className="w-[163px] h-[52px] rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors cursor-pointer">
            View Pricing
          </button>
        </div>

        {/* Fine Print */}
        <p className="text-base text-white opacity-80 text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTABanner;
