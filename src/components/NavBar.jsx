import { ShoppingCart } from "lucide-react";

const NavBar = ({ carts, onCartClick }) => {
  return (
    <nav className="bg-white h-[92px] border-b border-[#f2f2f2] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-violet-600">DigiTools</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-semibold text-base text-[#101727] opacity-90 hover:text-violet-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Cart + CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-violet-50 transition-colors cursor-pointer"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={22} className="text-[#101727]" />
            {carts.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                {carts.length}
              </span>
            )}
          </button>
          <button className="rounded-full px-5 py-3 bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
