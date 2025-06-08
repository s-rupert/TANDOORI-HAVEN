import React, { useContext, useRef, useEffect } from "react";
import { PageContext } from "../components/PageContext";

const ReservationPage = () => {
  const {
    reservation,
    setReservation,
    tablebookRef,
    cateringRef,
    dailylunchRef,
    scrollTo,
    setScrollTo,
  } = useContext(PageContext);

  useEffect(() => {
  if (scrollTo === 1) {
    tablebookRef.current?.scrollIntoView({ behavior: "smooth" });
  } else if (scrollTo === 2) {
    cateringRef.current?.scrollIntoView({ behavior: "smooth" });
  } else if (scrollTo === 3) {
    dailylunchRef.current?.scrollIntoView({ behavior: "smooth" });
  }
}, [scrollTo]);


  return (
    <div className={`m-2 ${reservation ? "block" : "hidden"}`}>
      <p className="font-bold text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Make a Reservation or Place an Order
      </p>
      <p className="text-center text-sm mt-2 md:text-base lg:text-lg xl:text-xl">
        Whether you're planning a dine-in experience, a special event, or want
        delicious meals delivered to your door, we've got you covered. Book a
        table, request catering services, or schedule daily food deliveries with
        ease, just let us know your needs, and we'll take care of the rest.
      </p>
      <div>
        <img loading="lazy"
          className="absolute -top-10 opacity-50 left-30 w-[22vw] md:left-[20vw]  z-1 xl:w-[15vw]"
          src="/12.png"
          alt=""
        />
        <img loading="lazy"
          className="absolute opacity-50 top-15 right-20 w-[20vw] z-1 xl:w-[10vw]"
          src="/13.png"
          alt=""
        />
        <img loading="lazy"
          className="absolute opacity-50 top-[50vw] w-[15vw] z-1 md:top-[15vw] xl:w-[10vw]  xl:top-[15vw]"
          src="/14.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center mt-10 ">
        {/* table reservation form */}
        <div ref={tablebookRef} className="flex flex-col justify-center">
          <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
            <img loading="lazy"
              className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
              src="/Lleft.png"
              alt="Line Left"
            />
            <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Table Reservation
            </p>
            <img loading="lazy"
              className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
              src="/Lright.png"
              alt="Line Right"
            />
          </div>
          <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl">
            You can reserve a table in advance for a smooth and comfortable
            dining experience, whether it's a casual meal or a special occasion.
            We offer both Veg and Non-Veg menu options, served fresh and with
            care. Online reservations may take a couple of hours to confirm, so
            feel free to call or visit any of our branches for immediate
            assistance.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10 mx-4 md:mx-10 my-8">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <label className="text-sm font-semibold text-gray-600">
                Location
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="">Select a location</option>
                <option value="brampton">Brampton</option>
                <option value="mississauga">Mississauga</option>
                <option value="scarborough">Scarborough</option>
                <option value="oakville">Oakville</option>
              </select>

              <label className="text-sm font-semibold text-gray-600">
                Time
              </label>
              <input
                type="time"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-600">
                Quantity
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="">Select a Number of guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <label className="text-sm font-semibold text-gray-600">
                Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-600">
                Contact
              </label>
              <input
                type="tel"
                placeholder="Enter your contact number"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <button className="w-auto inline-block bg-yellow-700 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">
              Reserve Now
            </button>
          </div>
          <div className="text-center font-bold mt-3">Need Help →</div>
          <p className="text-center text-sm">
            Note: We will contact you shortly if there are any issues,
            otherwise, you will receive a confirmation message on your phone
            number.
          </p>
        </div>
        {/* Catering for Gathering */}
        <div ref={cateringRef} className="flex flex-col justify-center">
          <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
            <img loading="lazy"
              className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
              src="/Lleft.png"
              alt="Line Left"
            />
            <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Catering for Gatherings
            </p>
            <img loading="lazy"
              className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
              src="/Lright.png"
              alt="Line Right"
            />
          </div>
          <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl">
            You can book catering services for all types of gatherings, with
            customizable Veg and Non-Veg menu options. Specializing in Indian
            cuisine, we offer a wide variety of dishes at reasonable prices,
            tailored to the size and type of your event. Online bookings may
            take a couple of hours to process, but you’re welcome to call or
            visit any of our branches for quicker assistance.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10 mx-4 md:mx-10 my-8">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <label className="text-sm font-semibold text-gray-600">
                Location
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="">Select a location</option>
                <option value="brampton">Brampton</option>
                <option value="mississauga">Mississauga</option>
                <option value="scarborough">Scarborough</option>
                <option value="oakville">Oakville</option>
              </select>

              <label className="text-sm font-semibold text-gray-600">
                Time
              </label>
              <input
                type="time"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-600">
                Quantity
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="">Select a Number of guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <label className="text-sm font-semibold text-gray-600">
                Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-600">
                Contact
              </label>
              <input
                type="tel"
                placeholder="Enter your contact number"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <button className="w-auto inline-block bg-yellow-700 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">
              Reserve Now
            </button>
          </div>
          <div className="text-center font-bold mt-3">Need Help →</div>
          <p className="text-center text-sm">
            Note: We will contact you shortly for more information and food
            categories. Feel free to contact us directly via call or to our
            location.
          </p>
        </div>
        {/* Daily lunches */}
        <div ref={dailylunchRef} className="flex flex-col justify-center">
          <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
            <img loading="lazy"
              className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
              src="/Lleft.png"
              alt="Line Left"
            />
            <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Daily Lunches
            </p>
            <img loading="lazy"
              className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
              src="/Lright.png"
              alt="Line Right"
            />
          </div>
          <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl">
            You can subscribe to daily lunch orders with a wide selection of Veg
            and Non-Veg options to suit your taste. Payments are made weekly in
            advance, with the option to switch to a monthly plan. For any
            questions, feel free to contact our branch or visit us in person for
            more details.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10 mx-4 md:mx-10 my-8">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <label className="text-sm font-semibold text-gray-600">
                Location
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="">Select a location</option>
                <option value="brampton">Brampton</option>
                <option value="mississauga">Mississauga</option>
                <option value="scarborough">Scarborough</option>
                <option value="oakville">Oakville</option>
              </select>

              <label className="text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-600">
                Food Choice
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="">Select choice of food from list</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <label className="text-sm font-semibold text-gray-600">
                Starting Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-600">
                Contact
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-600">
                Delivery Address
              </label>
              <input
                type="tel"
                placeholder="Enter your full address"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <button className="w-auto inline-block bg-yellow-700 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">
              Reserve Now
            </button>
          </div>
          <div className="text-center font-bold mt-3">Need Help →</div>
          <p className="text-center text-sm">
            Note: We will contact you shortly for more information and food
            categories. Feel free to contact us directly via call or to our
            location for more detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
