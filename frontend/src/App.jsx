import { useState } from "react";
import { UserRound, ShoppingCart } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-amber-50 h-screen w-screen">
      {/* Header */}
      <div className="flex justify-between h-35 p-1 h-auto">
        <img className="w-35 h-35 ml-5" src="/Logo.png" alt="logo" />
        <div className="flex gap-5 mt-5 mr-5">
          <div className="text-white px-3 bg-yellow-700 rounded-md flex items-center h-8">
            Menu
          </div>
          <div className="text-white px-3 bg-yellow-700 rounded-md flex items-center h-8">
            Location
          </div>
          <div className="text-white px-3 bg-yellow-700 rounded-md flex items-center h-8">
            Online Reservation
          </div>
          <div className="text-white px-3 bg-yellow-700 rounded-md flex items-center h-8">
            About Us
          </div>
          <div className="text-white px-3 bg-yellow-700 rounded-md flex items-center h-8">
            Contact
          </div>
          <div className="text-yellow-700 rounded-full flex items-center h-8">
            <UserRound />
          </div>
          <div className="text-yellow-700  rounded-full flex items-center h-8">
            <ShoppingCart />
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex justify-between w-screen">
        <div className="flex flex-col w-[50%] h-auto pl-20 mt-20">
          <p className="text-6xl h-20 font-bold text-yellow-600">Tandoori Crafted With</p>
          <p className="text-8xl font-bold text-yellow-800 h-30">Fire and Flavor</p>
          <p className="text-xl font-semibold text-justify">
            From the heart of the tandoor to your plate, every dish is a fiery
            celebration of bold spices and smoky perfection. Dive into a menu
            where ancient cooking meets unforgettable flavor.
          </p>
        </div>
        <img className="w-[40%] h-auto pr-10" src="/ModelImg.png" alt="Model" />
      </div>
      {/* Hot Choice Menu */}
      <div>
        <div className="flex justify-between w-screen mt-10 h-35 items-center">
          <img className="w-[35%]" src="/Lleft.png" alt="Line Left" />
          <p className="text-4xl text-yellow-700 font-semibold h-15">This Month's <span className="text-red-700 font-bold">HOT</span> Choice</p>
          <img className="w-[35%] -mt-10" src="/Lright.png" alt="Line Right" />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
