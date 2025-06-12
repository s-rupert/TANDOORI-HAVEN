import react, { useEffect, useState, useContext, useRef } from "react";
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
  Contact,
} from "lucide-react";
import { Link } from "react-router-dom";
import data from "../JSON/MonthPick.json";
import { PageContext } from "../components/PageContext";
import Menupage from "./Menupage";
import Locationpage from "./Locationpage";
import ReservationPage from "./Reservationpage";
import AboutPage from "./Aboutpage";
import ContactPage from "./Contactpage";
import Userpage from "./Userpage";
import Review from "./Review";

function Homepage() {
  const { setScrollTo, menuHandler } = useContext(PageContext);

  const scrollToSection = (val) => {
    setScrollTo(val);
  };
  useEffect(()=>{
    menuHandler(10)
  })

  return (
    <div>
      <img
        loading="lazy"
        className="absolute -top-10 opacity-50 left-20 w-[22vw] md:left-[20vw]  z-1 xl:w-[15vw]"
        src="/1.png"
        alt=""
      />
      <img
        loading="lazy"
        className="absolute opacity-50 top-0 right-20 w-[20vw] z-1 xl:w-[10vw]"
        src="/2.png"
        alt=""
      />
      <img
        loading="lazy"
        className="absolute opacity-50 top-[70vw] left-[15vw] w-[15vw] z-1 md:top-[45vw] xl:w-[10vw] xl:left-[10vw] xl:top-[35vw]"
        src="/3.png"
        alt=""
      />
      <img
        loading="lazy"
        className="absolute opacity-50 top-[25vw] -left-[5vw] w-[22vw] z-1 xl:w-[15vw] xl:top-[20vw]"
        src="/4.png"
        alt=""
      />
      <img
        loading="lazy"
        className="absolute opacity-50 top-[80vw] left-[70vw] w-[32vw] z-1 md:top-[45vw] md:w-[20vw] xl:w-[10vw] xl:left-[90vw]"
        src="/5.png"
        alt=""
      />
      {/* Hero Section */}
      <div className="flex flex-col-reverse justify-between w-screen relative z-2 md:flex-row md:items-center md:gap-10 lg:-mt-15">
        <div className="flex flex-col w-[70%] h-auto pl-5 -mt-10 md:w-[60%] md:pl-10 md:mt-0 xl:w-[60%]">
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
          loading="lazy"
          className="w-[70%] ml-40 h-auto pr-10 md:w-[40%] md:ml-0 md:pr-0 xl:w-[40%] xl:mr-10"
          src="/ModelImg.png"
          alt="Model"
        />
      </div>
      {/* Hot Choice Menu */}
      <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lleft.png"
          alt="Line Left"
        />
        <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          This Month's <span className="text-red-700 font-bold">HOT</span>{" "}
          Choice
        </p>
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lright.png"
          alt="Line Right"
        />
      </div>
      <div className="overflow-x-scroll w-full h-auto flex justify-center items-center lg:overflow-x-hidden lg:w-screen">
        <div className="flex gap-10 mx-[3vw] w-max justify-between lg:flex-wrap lg:gap-3 lg:mx-[1vw] xl:gap-5 ">
          {data.map((item) => (
            <div className="relative w-45 lg:w-[22vw] " key={item.id}>
              <img
                loading="lazy"
                className="w-45 h-25 rounded-sm lg:w-[22vw] lg:h-[13vw]"
                src={item.image}
                alt={item.name}
              />
              <img
                loading="lazy"
                className="w-[9vw] absolute -mt-25 lg:-mt-[13vw]"
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
                    <span className="font-bold text-xs xl:text-sm">Qty: </span>1
                  </p>
                </div>
              </div>
              <p className="text-justify text-xs xl:text-sm">
                {item.ingredients}
              </p>
            </div>
          ))}
        </div>
        <Link
          to="/menu"
          className="px-1 py-3 hover:bg-gray-300 rounded-sm"
          onClick={() => menuHandler(0)}
        >
          <ChevronRight size={40} />
        </Link>
      </div>
      {/* Reservation */}
      <div className="flex justify-between w-screen items-center overflow-hidden mt-10 lg:h-[10vw]">
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lleft.png"
          alt="Line Left"
        />
        <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Reservation Options
        </p>
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lright.png"
          alt="Line Right"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-5 lg:mx-5">
        <div className="w-90 flex flex-col items-center justify-center lg:w-80 xl:w-[30%]">
          <img
            loading="lazy"
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
          <Link to="/reservation">
            <button
              className="px-5 py-2 bg-yellow-700 text-white rounded-lg mt-5 hover:bg-yellow-500"
              onClick={() => {
                scrollToSection(1);
              }}
            >
              Book Now
            </button>
          </Link>
        </div>
        <div className="w-90 flex flex-col items-center justify-center lg:w-80 xl:w-[30%]">
          <img
            loading="lazy"
            className="w-80 h-55 rounded-lg lg:w-75 lg:h-45"
            src="/Des6.png"
            alt="Reservation"
          />
          <p className="text-center text-xl font-bold">Catering</p>
          <p className="text-justify">
            We also offer catering for workplaces for special occasions as well
            as family gatherings and festive celebrations. Contact us now and
            book a date.
          </p>
          <Link to="/reservation">
            <button
              className="px-5 py-2 bg-yellow-700 text-white rounded-lg mt-5 hover:bg-yellow-500"
              onClick={() => {
                scrollToSection(2);
              }}
            >
              Book Now
            </button>
          </Link>
        </div>
        <div className="w-90 flex flex-col items-center justify-center lg:w-80 xl:w-[30%]">
          <img
            loading="lazy"
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
          <Link to="/reservation">
            <button
              className="px-5 py-2 bg-yellow-700 text-white rounded-lg mt-5 hover:bg-yellow-500"
              onClick={() => {
                scrollToSection(3);
              }}
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
