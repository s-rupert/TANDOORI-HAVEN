import React from "react";
import {
  ShoppingCart,
  Trash,
  BaggageClaim,
  EllipsisVertical,
} from "lucide-react";

const Checkout = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-5 overflow-hidden md:flex-row">
      <div className="w-full">
        <div className="m-5 flex flex-col w-full">
          <div className="flex gap-2">
            <ShoppingCart size={30} />
            <p className="font-bold text-xl">Your Orders</p>
          </div>
          <p className="hidden">Selected Items</p>
          <div className="mt-5 w-[90%] flex justify-between border-2 rounded-xl hover:border-3 hover:shadow-lg">
            <div className="flex gap-2">
              <img
                className="w-[30vw] h-[17vw] rounded-lg sm:h-[13vw] sm:w-[25vw] md:h-[10vw] md:w-[16vw] lg:h-[8vw] lg:w-[15vw] xl:w-[12vw] xl:h-[6vw]"
                src="/mealimg/paneer_tikka.jpg"
                alt=""
              />
              <div className="flex flex-col justify-center">
                <p className="text-md font-bold lg:text-lg xl:text-xl">
                  Tandoori Paneer Tikka
                </p>
                <p className="text-sm">$15.99</p>
                <div className="text-sm flex gap-2 md:text-xs lg:text-sm lg:mt-1 xl:mt-2">
                  <p className="px-2 opacity-50 bg-green-500 rounded-xl">
                    Normal
                  </p>
                  <p className="px-2 opacity-50 bg-yellow-600 rounded-xl">
                    Mild
                  </p>
                  <p className="px-2 opacity-50 bg-red-700 rounded-xl">Spicy</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between m-2 items-end">
              <button>
                <EllipsisVertical size={15} />
              </button>
              <p>
                <span className="font-bold text-sm">QTY: </span>1
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5 justify-center items-center md:ml-2">
          <input
            className="w-100 border-2 rounded-xl text-xl px-3 py-2 text-center xl:py-1"
            type="text"
          />
          <button className="px-4 py-2 text-xl font-bold bg-green-600 text-white rounded-lg hover:bg-green-400 xl:py-1">
            Apply
          </button>
        </div>
      </div>
      <div className="bg-gray-300 p-5 w-full mt-10 md:mt-0">
        <div className="flex gap-3">
          <BaggageClaim size={30} />
          <p className="text-xl font-bold">Checkout</p>
        </div>
        <div className="flex justify-between mt-15">
          <div className="flex flex-col gap-2 font-semibold">
            <p>Items</p>
            <p>Shipping</p>
            <p>Duty and Taxes</p>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <p>$0.00</p>
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-black"></div>
        <div className="flex justify-between">
          <p className="text-xl font-bold">Grand Total</p>
          <p className="text-xl font-bold">$0.00</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <button className="px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-500">
            Order Now
          </button>
          <p>
            You’ll be securely redirected to the payment option after clicking
            order now.
          </p>
          <p>
            By placing your order you agree to{" "}
            <span className="font-bold underline">Our Terms</span> and{" "}
            <span className="font-bold underline">Policy</span>.
          </p>
          <p className="hover:font-bold">Need Help →</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
