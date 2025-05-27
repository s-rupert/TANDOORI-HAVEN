import react, { useEffect, useState, useContext } from "react";
import {
  UserRound,
  ShoppingCart,
  Star,
  StarHalf,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import data from "./JSON/MonthPick.json";
import Menupage from "./pages/Menupage";
import Locationpage from "./pages/Locationpage";
import { PageContext } from "./components/PageContext";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    menubtn, setMenubtn,
    location, setLocation,
    reservation, setReservation,
    about, setAbout,
    contact, setContact, homePage, setHomePage, menuHandler
  } = useContext(PageContext);

  

  return (
    <div className="bg-amber-50 h-screen w-screen relative overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-between h-35 p-2 h-auto md:relative md:z-10">
        <img
          className="w-[25vw] h-[25vw] ml-5 md:w-[15vw] md:h-[15vw] xl:w-[10vw] xl:h-[10vw]"
          src="/Logo.png"
          alt="logo"
        />
        <div
          className=" text-yellow-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={30} />
        </div>
        <div
          className={`md:flex md:gap-[1vw] md:mt-[3vw] xl:mt-[2vw] ${
            menuOpen
              ? "fixed flex w-[50%] flex-col bg-yellow-700 h-[100vh] right-0 top-0 gap-3 z-10 items-center pt-10"
              : "hidden"
          }`}
        >
          <div
            className="absolute top-2 left-2"
            onClick={() => setMenuOpen(false)}
          >
            <X size={30} />
          </div>
          <div
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              menubtn ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
            onClick={() => menuHandler(0)}
          >
            Menu
          </div>
          <div
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              location ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
            onClick={() => menuHandler(1)}
          >
            Location
          </div>
          <div
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              reservation ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
            onClick={() => menuHandler(2)}
          >
            Online Reservation
          </div>
          <div
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              about ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
            onClick={() => menuHandler(3)}
          >
            About Us
          </div>
          <div
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              contact ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
            onClick={() => menuHandler(4)}
          >
            Contact
          </div>
          <div
            className="text-white rounded-full flex items-center h-[7vw] text-lg md:text-xs md:text-yellow-700 md:h-[3vw] lg:text-sm xl:h-[2vw]"
            onClick={() => {}}
          >
            <UserRound />
          </div>
          <div
            className="text-white  rounded-full flex items-center h-[7vw] text-lg md:text-xs md:text-yellow-700 md:h-[3vw] lg:text-sm xl:h-[2vw]"
            onClick={() => {}}
          >
            <ShoppingCart />
          </div>
        </div>
      </div>
      <div className={`${homePage ? "block" : "hidden"}`}>
        <img
          className="absolute -top-10 opacity-50 left-20 w-[22vw] md:left-[20vw]  z-1 xl:w-[15vw]"
          src="/1.png"
          alt=""
        />
        <img
          className="absolute opacity-50 top-0 right-20 w-[20vw] z-1 xl:w-[10vw]"
          src="/2.png"
          alt=""
        />
        <img
          className="absolute opacity-50 top-[70vw] left-[15vw] w-[15vw] z-1 md:top-[45vw] xl:w-[10vw] xl:left-[10vw] xl:top-[35vw]"
          src="/3.png"
          alt=""
        />
        <img
          className="absolute opacity-50 top-[25vw] -left-[5vw] w-[22vw] z-1 xl:w-[15vw] xl:top-[20vw]"
          src="/4.png"
          alt=""
        />
        <img
          className="absolute opacity-50 top-[80vw] left-[70vw] w-[32vw] z-1 md:top-[45vw] md:w-[20vw] xl:w-[10vw] xl:left-[90vw]"
          src="/5.png"
          alt=""
        />
        {/* Hero Section */}
        <div className="flex flex-col-reverse justify-between w-screen relative z-2 md:flex-row md:items-center md:gap-10">
          <div className="flex flex-col w-[70%] h-auto pl-5 -mt-10 md:w-[60%] md:pl-10 md:mt-0 xl:w-[50%]">
            <p className="font-bold text-yellow-600 h-[9vw] text-2xl sm:text-4xl md:text-3xl md:h-[6vw] lg:text-5xl xl:text-6xl">
              Tandoori Crafted With
            </p>
            <p className="font-bold text-yellow-800 h-[12vw] text-4xl sm:text-6xl md:text-5xl md:h-[8vw] lg:text-7xl xl:text-8xl">
              Fire and Flavor
            </p>
            <p className="text-xs font-semibold text-justify sm:text-sm lg:text-lg xl:text-xl">
              From the heart of the tandoor to your plate, every dish is a fiery
              celebration of bold spices and smoky perfection. Dive into a menu
              where ancient cooking meets unforgettable flavor.
            </p>
          </div>
          <img
            className="w-[70%] ml-40 h-auto pr-10 md:w-[40%] md:ml-0 md:pr-0 xl:w-[50%] xl:mr-10"
            src="/ModelImg.png"
            alt="Model"
          />
        </div>
        {/* Hot Choice Menu */}
        <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lleft.png"
            alt="Line Left"
          />
          <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            This Month's <span className="text-red-700 font-bold">HOT</span>{" "}
            Choice
          </p>
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lright.png"
            alt="Line Right"
          />
        </div>
        <div className="overflow-x-scroll w-full flex justify-center items-center lg:overflow-x-hidden lg:w-screen">
          <div className="flex gap-10 mx-[3vw] w-max lg:flex-wrap lg:gap-3 lg:mx-[0vw] xl:gap-10 xl:mx-[2vw]">
            {data.map((item) => (
              <div className="relative w-45 lg:w-60 xl:w-80">
                <img
                  className="w-45 h-25 rounded-sm lg:w-60 lg:h-35 xl:w-80 xl:h-45"
                  src={item.image}
                  alt={item.name}
                />
                <img
                  className="w-[9vw] absolute -mt-25 lg:-mt-35 xl:-mt-45"
                  src="/Tpicks.png"
                  alt="Top Picks"
                />
                <p className="text-center text-sm font-bold xl:text-lg">
                  {item.name}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs xl:text-sm">
                      <span className="font-bold text-xs xl:text-sm">
                        Price:{" "}
                      </span>
                      ${item.price}
                    </p>
                    <p className="text-xs xl:text-sm">
                      <span className="font-bold text-xs xl:text-sm">
                        Rating:
                      </span>
                      ({item.rating}){"  "}
                      <span className="inline-flex items-center text-xs">
                        {Array.from({ length: Math.floor(item.rating) }).map(
                          (_, index) => (
                            <span key={index}>
                              <Star className="text-yellow-700" size={16} />
                            </span>
                          )
                        )}
                        {item.rating % 1 !== 0 && (
                          <span>
                            <StarHalf className="text-yellow-700" size={16} />
                          </span>
                        )}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-xs xl:text-sm">
                      Add to cart:{" "}
                      <span className="inline-flex items-center">
                        <ShoppingCart className="text-yellow-700" size={20} />
                      </span>
                    </p>
                    <p>
                      <span className="font-bold text-xs xl:text-sm">
                        Qty:{" "}
                      </span>
                      1
                    </p>
                  </div>
                </div>
                <p className="text-justify text-xs xl:text-sm">
                  {item.ingredients}
                </p>
              </div>
            ))}
          </div>
          <div className="px-1 py-3 hover:bg-gray-300 rounded-sm">
            <ChevronRight size={40} />
          </div>
        </div>
        {/* Reservation */}
        <div className="flex justify-between w-screen items-center overflow-hidden mt-10 lg:h-[10vw]">
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lleft.png"
            alt="Line Left"
          />
          <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            This Month's <span className="text-red-700 font-bold">HOT</span>{" "}
            Choice
          </p>
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lright.png"
            alt="Line Right"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-5 lg:mx-5">
          <div className="w-90 flex flex-col items-center justify-center lg:w-80 xl:w-[30%]">
            <img
              className="w-80 h-55 rounded-lg lg:w-75 lg:h-45"
              src="/Des5.png"
              alt="Reservation"
            />
            <p className="text-center text-xl font-bold">Book Your Table</p>
            <p className="text-justify">
              All of our locations provide online booking of tables for multiple
              gatherings like family or friends. Click below to book a table at
              your nearest Tandoori Haven restaurant.
            </p>
            <button className="px-5 py-2 bg-yellow-700 text-white rounded-lg mt-5 hover:bg-yellow-500">
              Book Now
            </button>
          </div>
          <div className="w-90 flex flex-col items-center justify-center lg:w-80 xl:w-[30%]">
            <img
              className="w-80 h-55 rounded-lg lg:w-75 lg:h-45"
              src="/Des6.png"
              alt="Reservation"
            />
            <p className="text-center text-xl font-bold">Catering</p>
            <p className="text-justify">
              We also offer catering for workplaces for special occasions as
              well as family gatherings and festive celebrations. Contact us now
              and book a date.
            </p>
            <button className="px-5 py-2 bg-yellow-700 text-white rounded-lg mt-5 hover:bg-yellow-500">
              Book Now
            </button>
          </div>
          <div className="w-90 flex flex-col items-center justify-center lg:w-80 xl:w-[30%]">
            <img
              className="w-80 h-55 rounded-lg lg:w-75 lg:h-45"
              src="/Des7.png"
              alt="Reservation"
            />
            <p className="text-center text-xl font-bold">Daily Lunch</p>
            <p className="text-justify">
              We offer daily launches for the place as well as your home. We
              deliver the food on a daily basis to your liking. Click below to
              select food type and pricing.
            </p>
            <button className="px-5 py-2 bg-yellow-700 text-white rounded-lg mt-5 hover:bg-yellow-500">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Menupage />
      <Locationpage />
      {/* Footer */}  
      <div className="bg-yellow-700 text-white flex justify-between mt-10 p-5 gap-5 xl:px-20">
        <div className="flex flex-col items-center gap-2 lg:gap-3">
          <p className="font-bold text-lg">Locations</p>
          <p className="underline">Brampton</p>
          <p className="underline">Mississauga</p>
          <p className="underline">Scarborough</p>
          <p className="underline">Oakville</p>
        </div>
        <div className="flex flex-col text-center gap-1 lg:gap-2">
          <p className="font-bold text-lg">Overview</p>
          <p>Contact</p>
          <p>About Us</p>
          <p>Locations</p>
          <p>Testimonials</p>
          <p>FAQs</p>
        </div>
        <div className="flex flex-col text-center gap-2 hidden lg:flex">
          <p className="font-bold text-xl">Contact</p>
          <p className="underline">Restaurant Desk</p>
          <p>+1 (123) 345 6789</p>
          <p className="font-bold">info@tandoorihaven.com</p>
          <p>Subscibe us for future updates and events </p>
          <button className="w-30 px-3 py-2 rounded-lg bg-red-700 text-white ml-20 hover:bg-red-500">
            Subscribe
          </button>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="font-bold text-lg text-center">Social Media</p>
          <div className="flex gap-3 mt-2 justify-center">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
          <p className="font-bold text-lg text-center">Delivery Partner</p>
          <div className="flex gap-3 mt-2 justify-center">
            <img
              className="h-7 w-7 rounded-sm"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWwQVdqf7QweOQKg2eCxFqeOh9EMBebySgg&s"
              alt=""
            />
            <img
              className="h-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SkipTheDishes_logo.svg/2560px-SkipTheDishes_logo.svg.png"
              alt=""
            />
          </div>
          <p className="font-bold text-xs text-center lg:text-sm">
            We accept Debit Card, Credit <br /> Card and Cash.
          </p>
        </div>
      </div>
      <p className="text-center p-2">
        © 2023 Tandoori Haven. All rights reserved.
      </p>
    </div>
  );
}

export default App;
