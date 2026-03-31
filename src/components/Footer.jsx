const Footer = () => {
  const productLinks = ["AI Writing Pro", "Design Templates", "Stock Assets", "Automation Toolkit", "Resume Builder", "Social Media Kit"];
  const companyLinks = ["About Us", "Careers", "Blog", "Press", "Partners"];
  const resourceLinks = ["Documentation", "API Reference", "Community", "Support Center", "Status Page"];

  return (
    <footer className="bg-[#101727] pt-[120px] pb-[30px]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-extrabold text-white">DigiTools</span>
            <p className="text-base text-white opacity-80 leading-6">
              The premier marketplace for digital tools and resources. Trusted by 50,000+ professionals worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { label: "Twitter / X", icon: "𝕏" },
                { label: "LinkedIn", icon: "in" },
                { label: "GitHub", icon: "⌨" },
                { label: "Instagram", icon: "◎" },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#101727] text-sm font-bold hover:bg-violet-100 transition-colors cursor-pointer"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium text-white">Products</h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-base text-white opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium text-white">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-base text-white opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium text-white">Resources</h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-base text-white opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white opacity-20 my-8" />

        {/* Bottom Row */}
        <div className="flex items-center justify-between">
          <p className="text-base text-white opacity-50">
            © {new Date().getFullYear()} DigiTools, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-base text-white opacity-50 hover:opacity-80 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-base text-white opacity-50 hover:opacity-80 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
