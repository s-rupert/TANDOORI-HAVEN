import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { PageContext } from "../components/PageContext";

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
import Userpage from "../pages/User/Userpage";
import UserInfo from "../pages/User/UserInfo";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const {
    menubtn,
    location,
    reservation,
    about,
    contact,
    homePage,
    menuHandler,
    userbtn,
    contactRef,
    setUserbtn,
    setScrollTo,
  } = useContext(PageContext);

  const scrollToSection = (val) => {
    setScrollTo(val);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoginStatus(true);
    }
  }
  , []);
  return (
    <div
      id="layout"
      className={`bg-amber-50 h-[100vh] w-screen relative overflow-x-hidden ${
        userbtn ? "overflow-hidden" : ""
      }`}
    >
      {/* Header */}
      <div className="flex justify-between h-35 p-2 h-auto md:relative md:z-10">
        <Link to="/">
          <img
            loading="lazy"
            className="w-[25vw] h-[25vw] ml-5 md:w-[15vw] md:h-[15vw] xl:w-[10vw] xl:h-[10vw]"
            src="/Logo.png"
            alt="logo"
            onClick={() => menuHandler(10)}
          />
        </Link>
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
            className="absolute top-2 left-2 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <X size={30} />
          </div>
          <Link
            to="/menu"
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              menubtn ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
          >
            Menu
          </Link>
          <Link
            to="/locations"
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              location ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
          >
            Location
          </Link>
          <Link
            to="/reservation"
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              reservation ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
          >
            Online Reservation
          </Link>
          <Link
            to="/about_us"
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              about ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`text-white px-[1vw] bg-yellow-700 rounded-md flex items-center h-[7vw] text-lg md:text-xs md:h-[3vw] lg:text-sm xl:h-[2vw] ${
              contact ? "mt-5 md:text-xl text-xl lg:text-xl xl:text-xl" : ""
            }`}
          >
            Contact
          </Link>
          <div
            className="text-white rounded-full flex items-center h-[7vw] text-lg md:text-xs md:text-yellow-700 md:h-[3vw] lg:text-sm xl:h-[2vw]"
            onClick={() => {
              setUserbtn(true);
            }}
          >
            {loginStatus ? (
              <UserInfo />
            ) : (
              <UserRound />
            )}
          </div>
          <Link to="/checkout"
            className="text-white  rounded-full flex items-center h-[7vw] text-lg md:text-xs md:text-yellow-700 md:h-[3vw] lg:text-sm xl:h-[2vw]"
            onClick={() => {}}
          >
            <ShoppingCart />
          </Link>
        </div>
      </div>
      <Userpage />
      <Outlet />
      {/* Footer */}
      <div className="bg-yellow-700 text-white flex justify-between mt-10 p-5 gap-5 xl:px-20">
        <div className="flex flex-col items-center gap-2 lg:gap-3">
          <p className="font-bold text-lg">Locations</p>
          <Link to="/locations">
            <p
              className="hover:text-black underline"
              onClick={() => {
                scrollToSection(4);
              }}
            >
              Brampton
            </p>
          </Link>
          <Link to="/locations">
            <p
              className="hover:text-black underline"
              onClick={() => {
                scrollToSection(5);
              }}
            >
              Mississauga
            </p>
          </Link>
          <Link to="/locations">
            <p
              className="hover:text-black underline"
              onClick={() => {
                scrollToSection(6);
              }}
            >
              Scarborough
            </p>
          </Link>
          <Link to="/locations">
            <p
              className="hover:text-black underline"
              onClick={() => {
                scrollToSection(7);
              }}
            >
              Oakville
            </p>
          </Link>
        </div>
        <div className="flex flex-col text-center gap-1 lg:gap-2">
          <p className="font-bold text-lg">Overview</p>
          <Link to="/contact">
            <p
              className="hover:text-black underline"
              onClick={() => setScrollTo(10)}
            >
              Contact
            </p>
          </Link>
          <Link to="about_us">
            <p
              className="hover:text-black underline"
              onClick={() => setScrollTo(10)}
            >
              About Us
            </p>
          </Link>
          <Link to="/locations">
            <p
              className="hover:text-black underline"
              onClick={() => setScrollTo(10)}
            >
              Locations
            </p>
          </Link>
          <Link to="/testimonials">
            <p
              className="hover:text-black underline"
              onClick={() => setScrollTo(10)}
            >
              Testimonials
            </p>
          </Link>
          <Link to="/testimonials">
            <p
              className="hover:text-black underline"
              onClick={() => setScrollTo(10)}
            >
              FAQs
            </p>
          </Link>
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
              loading="lazy"
              className="h-7 w-7 rounded-sm"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWwQVdqf7QweOQKg2eCxFqeOh9EMBebySgg&s"
              alt=""
            />
            <img
              loading="lazy"
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
        © 2025 Tandoori Haven. All rights reserved.
      </p>
    </div>
  );
}
