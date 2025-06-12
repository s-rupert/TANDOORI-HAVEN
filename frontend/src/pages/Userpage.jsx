import React, { useState, useContext, useEffect } from "react";
import { X } from "lucide-react";

import { PageContext } from "../components/PageContext";

const Userpage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [sAttempt, setSattempt] = useState(true);
  const { userbtn, setUserbtn } = useContext(PageContext);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center w-full h-full z-20 bg-gray-100/50 overflow-hidden ${
        userbtn ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-6 bg-yellow-600 p-10 rounded-xl text-center shadow-2xl w-96 relative">
        <X
          className="absolute top-4 right-4 text-white cursor-pointer"
          onClick={() => {
            setUserbtn(false);
            setIsLogin(true);
            setSattempt(true);
          }}
        />

        {/* Logo */}
        <div className="w-28 h-28 mb-4 bg-yellow-200/40 rounded-full p-2">
          <img
            loading="lazy"
            src="/Logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className={`${sAttempt ? "" : "hidden"}`}>
          {/* Login Form */}
          <div
            className={`w-full text-left text-white space-y-4 ${
              isLogin ? "" : "hidden"
            }`}
          >
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white border-2 border-white rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white border-2 border-white rounded-md"
              />
            </div>

            <div className="text-center text-sm text-white underline cursor-pointer">
              Forget Password?
            </div>

            <button
              className="w-full py-2 mt-2 bg-white text-yellow-700 font-semibold rounded-md hover:bg-gray-100 transition"
              onClick={() => setSattempt(false)}
            >
              Login
            </button>

            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <span
                className="underline font-semibold cursor-pointer hover:text-white"
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </p>
          </div>
          {/* Register Form */}
          <div
            className={`w-full text-left text-white space-y-4 ${
              isLogin ? "hidden" : ""
            }`}
          >
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white border-2 border-white rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Fullname</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white border-2 border-white rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white border-2 border-white rounded-md"
              />
            </div>

            <button
              className="w-full py-2 mt-2 bg-white text-yellow-700 font-semibold rounded-md hover:bg-gray-100 transition"
              onClick={() => setSattempt(false)}
            >
              Register
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <span
                className="underline font-semibold cursor-pointer hover:text-white"
                onClick={() => setIsLogin(true)}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
        <div className={`${sAttempt ? "hidden" : ""}`}>
          <div className={`${isLogin ? "" : "hidden"}`}>
            <p className="text-lg text-white font-bold">Successfully Login</p>
            <p className="text-2xl text-white font-bold mt-5">
              Welcome Back <span>Name!</span>
            </p>
          </div>
          <div className={`${isLogin ? "hidden" : ""}`}>
            <p className="text-lg text-white font-bold">
              Your account is <br />
              successfully Created.
            </p>
            <p className="text-xl text-white font-bold mt-5">
              Welcome to Tandoori Haven!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userpage;
