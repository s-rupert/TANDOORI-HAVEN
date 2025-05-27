import { useState } from "react";
import { UserRound, ShoppingCart, Star, StarHalf, ChevronRight, Facebook, Twitter, Instagram } from "lucide-react";
import data from "./JSON/MonthPick.json"

function App() {

  return (
    <div className="bg-amber-50 h-screen w-screen relative">
      <img className="absolute -top-30 opacity-50 left-120 w-80 xl:w-60 z-1" src="/1.png" alt="" />
      <img className="absolute opacity-50 top-0 right-20 w-70 z-1" src="/2.png" alt="" />
      <img className="absolute opacity-50 top-60 left-10 w-40 z-1" src="/3.png" alt="" />
      <img className="absolute opacity-50 top-160 left-150 w-70 z-1" src="/4.png" alt="" />
      <img className="absolute opacity-50 top-170 -left-20 w-50 z-1" src="/5.png" alt="" />
      {/* Header */}
      <div className="flex justify-between h-35 p-1 h-auto relative z-2">
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
      <div className="flex justify-between w-screen items-center relative z-2">
        <div className="flex flex-col w-[50%] h-auto pl-20">
          <p className="text-6xl font-bold text-yellow-600 h-20 xl:text-5xl lg:text-4xl">Tandoori Crafted With</p>
          <p className="text-8xl font-bold text-yellow-800 h-20 xl:text-7xl lg:text-6xl">Fire and Flavor</p>
          <p className="text-xl font-semibold text-justify">
            From the heart of the tandoor to your plate, every dish is a fiery
            celebration of bold spices and smoky perfection. Dive into a menu
            where ancient cooking meets unforgettable flavor.
          </p>
        </div>
        <img className="w-[40%] h-auto pr-10" src="/ModelImg.png" alt="Model" />
      </div>
      {/* Hot Choice Menu */}
      <div className="flex justify-between w-screen items-center overflow-hidden">
        <img className="w-[35%] rotate-[2deg]" src="/Lleft.png" alt="Line Left" />
        <p className="text-4xl text-yellow-700 font-semibold h-15">This Month's <span className="text-red-700 font-bold">HOT</span> Choice</p>
        <img className="w-[35%] -mt-5 rotate-[2deg]" src="/Lright.png" alt="Line Right" />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-screen flex flex-wrap items-center gap-10 mx-10 my-5">
          {data.map((item) => (
            <div className="relative w-80">
              <img className="w-80 h-55 rounded-sm" src={item.image} alt={item.name} />
              <img className="w-25 absolute -mt-55" src="/Tpicks.png" alt="Top Picks" />
              <p className="text-center text-xl font-bold">{item.name}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p><span className="font-bold">Price: </span>${item.price}</p>
                  <p>
                    <span className="font-bold">Rating:</span>({item.rating}){'  '}
                    <span className="inline-flex items-center">
                      {Array.from({ length: Math.floor(item.rating) }).map((_, index) => (
                        <span key={index}><Star className="text-yellow-700" size={16} /></span>
                      ))}
                      {item.rating % 1 !== 0 && <span><StarHalf className="text-yellow-700" size={16} /></span>}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-bold">Add to cart: <span className="inline-flex items-center"><ShoppingCart className="text-yellow-700" size={20} /></span></p>
                  <p><span className="font-bold">Qty: </span>1</p>
                </div>
              </div>
              <p className="text-justify">{item.ingredients}</p>
            </div>
          ))}
        </div>
        <div className="px-1 py-3 hover:bg-gray-300 rounded-sm"><ChevronRight size={40} /></div>
      </div>
      {/* Reservation */}
      <div className="flex justify-between w-screen items-center">
        <img className="w-[35%] rotate-[2deg]" src="/Lleft.png" alt="Line Left" />
        <p className="text-4xl text-yellow-700 font-semibold h-15">Online Reservation Options</p>
        <img className="w-[35%] -mt-5 rotate-[2deg]" src="/Lright.png" alt="Line Right" />
      </div>
      <div className="flex w-screen justify-center gap-20 overflow-hidden my-5">
        <div className="w-100 flex flex-col items-center justify-center">
          <img className="w-80 h-55 rounded-lg" src="/rand.jpg" alt="Reservation" />
          <p className="text-center text-xl font-bold">Book Your Table</p>
          <p className="text-justify">All of our locations provide online booking of tables for multiple gatherings like family or friends. Click below to book a table at your nearest Tandoori Haven restaurant.</p>
          <button className="px-5 py-2 bg-yellow-700 text-white rounded-lg mt-5 hover:bg-yellow-500">Book Now</button>
        </div>
        <div className="w-100 flex flex-col items-center justify-center">
          <img className="w-80 h-55 rounded-lg" src="/rand.jpg" alt="Reservation" />
          <p className="text-center text-xl font-bold">Catering</p>
          <p className="text-justify">We also offer catering for workplaces for special occasions as well as family gatherings and festive celebrations. Contact us now and book a date.</p>
          <button className="px-5 py-2 bg-yellow-700 text-white rounded-lg mt-5 hover:bg-yellow-500">Book Now</button>
        </div>
        <div className="w-100 flex flex-col items-center justify-center">
          <img className="w-80 h-55 rounded-lg" src="/rand.jpg" alt="Reservation" />
          <p className="text-center text-xl font-bold">Daily Lunch</p>
          <p className="text-justify">We offer daily launches for the place as well as your home. We deliver the food on a daily basis to your liking. Click below to select food type and pricing.</p>
          <button className="px-5 py-2 bg-yellow-700 text-white rounded-lg mt-5 hover:bg-yellow-500">Book Now</button>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-yellow-700 text-white flex justify-between items-center py-5 px-15 mt-20">
        <div className="flex flex-col">
          <p className="font-bold text-xl text-center">Locations</p>
          <div className="w-1/2">
            <p className="underline">Brampton</p>
            <p>000 Bovaird Dr W Unit 19-20,
              Brampton, ON L6X 0T9</p>
          </div>
          <div className="w-1/2 ml-65 text-right">
            <p className="underline">Brampton</p>
            <p>00 Airport Rd,
              Brampton, ON L6S 0B8</p>
          </div>
          <div className="w-1/2">
            <p className="underline">North York</p>
            <p> 0000 Finch Ave W,
              North York, ON M9M 2E7</p>
          </div>
          <div className="w-1/2 ml-65 text-right">
            <p className="underline">Toronto</p>
            <p>00 Margueretta St,
              Toronto, ON M6H 1C2</p>
          </div>
        </div>
        <div className="w-1 h-60 bg-white"></div>
        <div className="flex flex-col text-center gap-2">
          <p className="font-bold text-xl">Overview</p>
          <p>Contact</p>
          <p>About Us</p>
          <p>Menu</p>
          <p>Online Reservation</p>
          <p>Locations</p>
          <p>Testimonials</p>
          <p>FAQs</p>
        </div>
        <div className="w-1 h-60 bg-white"></div>
        <div className="flex flex-col text-center gap-2">
          <p className="font-bold text-xl">Contact</p>
          <p className="underline">Restaurant Desk</p>
          <p>+1 (123) 345 6789</p>
          <br />
          <p className="font-bold">tandoorihaven@thmail.com</p>
          <br />
          <p>Subscibe us for future updates and events </p>
          <button className="w-30 px-3 py-2 rounded-lg bg-red-700 text-white ml-20 hover:bg-red-500">Subscribe</button>
        </div>
        <div className="w-1 h-60 bg-white"></div>
        <div className="flex flex-col gap-2 text-center">
          <p className="font-bold text-xl text-center">Social Media</p>
          <div className="flex gap-3 mt-2 justify-center">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
          <p className="font-bold text-xl text-center">Delivery Partner</p>
          <div className="flex gap-3 mt-2 justify-center">
            <img className="h-7 w-7 rounded-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWwQVdqf7QweOQKg2eCxFqeOh9EMBebySgg&s" alt="" />
            <img className="h-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SkipTheDishes_logo.svg/2560px-SkipTheDishes_logo.svg.png" alt="" />
          </div>
          <br />
          <p className="font-bold text-sm text-center">We accept Debit Card, Credit Card and Cash.</p>
        </div>
      </div>
      <p className="text-center p-2">© 2023 Tandoori Haven. All rights reserved.</p>
    </div>
  );
}

export default App;
