import React, { useContext, useEffect, useState } from "react";
import {
  Star,
  StarHalf,
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import data from "../JSON/MonthPick.json";
import dataFullMeal from "../JSON/FullMeal.json";
import badata from "../JSON/Breakfast&Appetizers.json";
import sddata from "../JSON/Sweets&desserts.json";
import drinkdata from "../JSON/Drinks.json";

import { PageContext } from "../components/PageContext";

function Menupage() {
  const { menubtn, setMenubtn, menuHandler } = useContext(PageContext);
  const [mealSM, setMealSM] = useState(false);
  const [baSM, setBASM] = useState(false);
  const [drinkSM, setDrinkSM] = useState(false);
  const [sdSM, setSDSM] = useState(false);

  const visibleMealData = mealSM ? dataFullMeal : dataFullMeal.slice(0, 8);
  const visibleBAData = baSM ? badata : badata.slice(0, 8);
  const visibleDrinkData = drinkSM ? drinkdata : drinkdata.slice(0, 8);
  const visibleSDData = sdSM ? sddata : sddata.slice(0, 8);

  useEffect(()=>{
    menuHandler(0)
  })

  return (
    <div>
      <p className="text-center text-lg mx-[2vw] md:text-xl lg:text-2xl xl:text-3xl font-bold mt-10 relative z-2">
        Our menu offers a wide range of meals, snacks, drinks, appetizers, and
        more. We are dedicated to ensuring top-quality food and excellent
        service.
      </p>
      <div>
        <img
          loading="lazy"
          className="absolute -top-10 opacity-50 left-30 w-[22vw] md:left-[20vw]  z-1 xl:w-[15vw]"
          src="/6.png"
          alt=""
        />
        <img
          loading="lazy"
          className="absolute opacity-50 top-15 right-20 w-[20vw] z-1 xl:w-[10vw]"
          src="/7.png"
          alt=""
        />
        <img
          loading="lazy"
          className="absolute opacity-50 top-[50vw] w-[15vw] z-1 md:top-[15vw] xl:w-[10vw]  xl:top-[15vw]"
          src="/8.png"
          alt=""
        />
      </div>
      {/* full meals  */}
      <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lleft.png"
          alt="Line Left"
        />
        <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Full Meals Veg & Non Veg
        </p>
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lright.png"
          alt="Line Right"
        />
      </div>
      <div className="overflow-x-scroll w-full flex justify-center items-center lg:overflow-x-hidden lg:w-screen">
        <div className="flex gap-10 mx-[3vw] justify-between  w-max lg:flex-wrap lg:gap-3 lg:mx-[1vw] xl:gap-5 ">
          {visibleMealData.map((item,index) => (
            <div className="relative w-45 lg:w-[22vw] " key={index}>
              <img
                loading="lazy"
                className="w-45 h-25 rounded-sm lg:w-[22vw] lg:h-[13vw]  "
                src={item.image}
                alt={item.name}
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
        <div
          className={`px-1 py-3 hover:bg-gray-300 rounded-sm ${
            mealSM ? "hidden" : ""
          }`}
          onClick={() => {
            setMealSM(true);
          }}
        >
          <ChevronRight size={40} />
        </div>
        <div
          className={`px-1 py-3 hover:bg-gray-300 rounded-sm ${
            mealSM ? "" : "hidden"
          }`}
          onClick={() => {
            setMealSM(false);
          }}
        >
          <ChevronLeft size={40} />
        </div>
      </div>
      {/* snacks and appetizers */}
      <div className="flex justify-between w-screen items-center overflow-hidden mt-10 lg:h-[10vw] xl:mt-0">
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lleft.png"
          alt="Line Left"
        />
        <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Snacks and Appetizers
        </p>
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lright.png"
          alt="Line Right"
        />
      </div>
      <div className="overflow-x-scroll w-full flex justify-center items-center lg:overflow-x-hidden lg:w-screen">
        <div className="flex gap-10 mx-[3vw] w-max justify-between lg:flex-wrap lg:gap-3 lg:mx-[1vw] xl:gap-5 ">
          {visibleBAData.map((item,index) => (
            <div className="relative w-45 lg:w-[22vw] " key={index}>
              <img
                loading="lazy"
                className="w-45 h-25 rounded-sm lg:w-[22vw] lg:h-[13vw] "
                src={item.image}
                alt={item.name}
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
        <div
          className={`px-1 py-3 hover:bg-gray-300 rounded-sm ${
            baSM ? "hidden" : ""
          }`}
          onClick={() => {
            setBASM(true);
          }}
        >
          <ChevronRight size={40} />
        </div>
        <div
          className={`px-1 py-3 hover:bg-gray-300 rounded-sm ${
            baSM ? "" : "hidden"
          }`}
          onClick={() => {
            setBASM(false);
          }}
        >
          <ChevronLeft size={40} />
        </div>
      </div>
      {/* drinks */}
      <div className="flex justify-between w-screen items-center overflow-hidden mt-10 lg:h-[10vw] xl:mt-0">
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lleft.png"
          alt="Line Left"
        />
        <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Cold Drinks, Wine & Beer
        </p>
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lright.png"
          alt="Line Right"
        />
      </div>
      <div className="overflow-x-scroll w-full flex justify-center items-center lg:overflow-x-hidden lg:w-screen">
        <div className="flex gap-10 mx-[3vw] justify-between  w-max lg:flex-wrap lg:gap-3 lg:mx-[1vw] xl:gap-5 ">
          {visibleDrinkData.map((item, index) => (
            <div className="relative w-45 lg:w-[22vw] " key={index}>
              <img
                loading="lazy"
                className="w-45 h-25 rounded-sm lg:w-[22vw] lg:h-[13vw]  "
                src={item.image}
                alt={item.name}
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
        <div
          className={`px-1 py-3 hover:bg-gray-300 rounded-sm ${
            drinkSM ? "hidden" : ""
          }`}
          onClick={() => {
            setDrinkSM(true);
          }}
        >
          <ChevronRight size={40} />
        </div>
        <div
          className={`px-1 py-3 hover:bg-gray-300 rounded-sm ${
            drinkSM ? "" : "hidden"
          }`}
          onClick={() => {
            setDrinkSM(false);
          }}
        >
          <ChevronLeft size={40} />
        </div>
      </div>
      {/* desserts */}
      <div className="flex justify-between w-screen items-center overflow-hidden mt-10 lg:h-[10vw] xl:mt-0">
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lleft.png"
          alt="Line Left"
        />
        <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Sweets & Desserts
        </p>
        <img
          loading="lazy"
          className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
          src="/Lright.png"
          alt="Line Right"
        />
      </div>
      <div className="overflow-x-scroll w-full flex justify-center items-center lg:overflow-x-hidden lg:w-screen">
        <div className="flex gap-10 mx-[3vw] justify-between  w-max lg:flex-wrap lg:gap-3 lg:mx-[1vw] xl:gap-5 ">
          {visibleSDData.map((item, index) => (
            <div className="relative w-45 lg:w-[22vw] " key={index}>
              <img
                loading="lazy"
                className="w-45 h-25 rounded-sm lg:w-[22vw] lg:h-[13vw]  "
                src={item.image}
                alt={item.name}
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
        <div
          className={`px-1 py-3 hover:bg-gray-300 rounded-sm ${
            sdSM ? "hidden" : ""
          }`}
          onClick={() => {
            setSDSM(true);
          }}
        >
          <ChevronRight size={40} />
        </div>
        <div
          className={`px-1 py-3 hover:bg-gray-300 rounded-sm ${
            sdSM ? "" : "hidden"
          }`}
          onClick={() => {
            setSDSM(false);
          }}
        >
          <ChevronLeft size={40} />
        </div>
      </div>
      {/* Search and offer section */}
      <p className="mt-10 text-center text-lg mx-5 font-bold md:text-xl lg:text-2xl xl:text-3xl">
        Looking for specific items, Search here and enjoy our quality meals
      </p>
      <div className="flex justify-center items-center mt-5 mx-5 gap-[5vw]">
        <input
          type="text"
          placeholder="Search for items..."
          className="border border-gray-300 rounded-md px-3 py-2 w-80 sm:w-96 md:w-[30vw] lg:w-[22vw] xl:w-[50vw]"
        />
        <button className="ml-2 bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          Search
        </button>
      </div>
      <p className="mt-10 text-center text-lg mx-5 font-bold text-yellow-700 md:text-xl lg:text-2xl xl:text-3xl">
        Coupons and Offers
      </p>
      <p className="text-center text-sm mx-5">
        Currently, no coupons or offers are available. Check our menu for
        reasonable prices.
      </p>
    </div>
  );
}

export default Menupage;
