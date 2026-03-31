import { useState } from "react"
import { ToastContainer } from "react-toastify"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Stats from "./components/Stats"
import Products from "./components/Products"
import Cart from "./components/Cart"
import HowItWorks from "./components/HowItWorks"
import Pricing from "./components/Pricing"
import CTABanner from "./components/CTABanner"
import Footer from "./components/Footer"

const getProducts = async () => {
  const res = await fetch("./products.json")
  return res.json()
}
const productPromise = getProducts()

function App() {
  const [activeTab, setActiveTab] = useState("products")
  const [carts, setCarts] = useState([])

  const scrollToProducts = () => {
    setActiveTab("products")
    document.getElementById("tab-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <NavBar carts={carts} onCartClick={() => {
        setActiveTab("cart")
        document.getElementById("tab-section")?.scrollIntoView({ behavior: "smooth" })
      }} />
      <Banner onExplore={scrollToProducts} />
      <Stats />

      {/* Tab Toggle */}
      <div id="tab-section" className="flex justify-center my-10">
        <div className="flex bg-white border border-[#f6f6f6] rounded-full p-1 gap-1 shadow-sm">
          <button
            onClick={() => setActiveTab("products")}
            className={`rounded-full py-[14px] px-[16px] text-base font-semibold transition-all cursor-pointer ${
              activeTab === "products"
                ? "bg-violet-600 text-white shadow-[0_3px_8px_rgba(97,7,236,0.30)]"
                : "text-[#25065d] font-medium"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`rounded-full py-[14px] px-[16px] text-base font-semibold transition-all cursor-pointer ${
              activeTab === "cart"
                ? "bg-violet-600 text-white shadow-[0_3px_8px_rgba(97,7,236,0.30)]"
                : "text-[#25065d] font-medium"
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {/* Products or Cart Tab Content */}
      {activeTab === "products" ? (
        <Products
          productPromise={productPromise}
          carts={carts}
          setCarts={setCarts}
        />
      ) : (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <HowItWorks />
      <Pricing />
      <CTABanner onExplore={scrollToProducts} />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}

export default App
