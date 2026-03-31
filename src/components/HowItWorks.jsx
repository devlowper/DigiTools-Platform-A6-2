const steps = [
  {
    number: "01",
    icon: "👤",
    title: "Create Account",
    text: "Sign up in seconds with just your email. No credit card required to get started.",
  },
  {
    number: "02",
    icon: "🛒",
    title: "Choose Products",
    text: "Browse our curated marketplace and select the tools that fit your workflow.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Start Creating",
    text: "Instantly access your purchased tools and supercharge your productivity right away.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-[120px] bg-[#f9fafc]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[48px] font-extrabold text-[#101727] text-center">
          How It Works
        </h2>
        <p className="text-base text-[#627382] text-center mt-4 max-w-[480px] mx-auto">
          Getting started with DigiTools is simple. Follow these three easy steps to transform your workflow.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-[30px] mt-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[16px] p-8 flex flex-col items-center gap-5 border-2 border-[#f1f1f1] bg-white hover:shadow-lg transition-shadow"
            >
              {/* Step number badge */}
              <div className="w-10 h-10 rounded-full bg-violet-600 text-white font-bold text-sm flex items-center justify-center self-start">
                {step.number}
              </div>

              {/* Icon circle */}
              <div className="relative w-[100px] h-[100px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-violet-600 opacity-10" />
                <span className="text-4xl relative z-10">{step.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#101727] text-center">{step.title}</h3>

              {/* Description */}
              <p className="text-base text-[#627382] text-center">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
