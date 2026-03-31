import { use, Suspense } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);

  return (
    <div className="grid grid-cols-3 gap-[30px] mt-10">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          carts={carts}
          setCarts={setCarts}
        />
      ))}
    </div>
  );
};

const Products = ({ productPromise, carts, setCarts }) => {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[48px] font-extrabold text-[#101727] text-center">
          Our Premium Products
        </h2>
        <p className="text-base text-[#627382] text-center mt-4 max-w-[560px] mx-auto">
          Discover our curated collection of digital tools designed to elevate every aspect of your creative and professional workflow.
        </p>

        <Suspense
          fallback={
            <div className="flex justify-center items-center mt-20">
              <span className="loading loading-spinner loading-lg text-violet-600"></span>
            </div>
          }
        >
          <ProductList
            productPromise={productPromise}
            carts={carts}
            setCarts={setCarts}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default Products;
