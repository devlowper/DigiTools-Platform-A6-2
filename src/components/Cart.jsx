import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const total = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    setCarts(carts.filter((item) => item.id !== id));
    toast.success("Removed!");
  };

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };

  return (
    <section className="py-[60px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="rounded-[16px] p-[40px] border-2 border-[#f2f2f2] bg-white flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-[#101727]">Your Cart</h2>

          {carts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <span className="text-6xl">🛒</span>
              <p className="text-lg font-semibold text-[#627382]">Your cart is empty</p>
              <p className="text-base text-[#627382]">Add some products to get started!</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex flex-col gap-4">
                {carts.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-[16px] p-5 bg-[#f9fafc] gap-4"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-[60px] h-[60px] rounded-full border border-[#f2f2f2] bg-white flex items-center justify-center text-2xl flex-shrink-0">
                        {item.icon}
                      </div>
                      {/* Info */}
                      <div>
                        <p className="font-semibold text-xl text-[#101727]">{item.name}</p>
                        <p className="text-base text-[#627382]">${item.price}/{item.period}</p>
                      </div>
                    </div>
                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="font-bold text-base text-[#ff3980] hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Total Row */}
              <div className="flex items-center justify-between border-t-2 border-[#f2f2f2] pt-6">
                <span className="text-2xl font-bold text-[#101727]">Total:</span>
                <span className="text-2xl font-bold text-[#101727]">${total}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="rounded-full h-[52px] w-full bg-violet-600 text-white font-bold hover:bg-violet-700 transition-colors cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
