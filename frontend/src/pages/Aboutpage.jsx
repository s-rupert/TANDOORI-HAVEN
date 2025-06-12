import React, { useContext, useEffect } from "react";
import { PageContext } from "../components/PageContext";

const AboutPage = () => {
  const { menuHandler, scrollTo } = useContext(PageContext);
  useEffect(()=>{
    menuHandler(3)
    if (scrollTo === 10) {
      window.location.reload();
    }
  })

  return (
    <div className="p-4">
      <p className="text-center text-lg mx-[2vw] md:text-xl lg:text-2xl xl:text-2xl font-bold mt-10 relative z-2">
        At Tandoori Haven, we’re passionate about bringing the rich and diverse
        flavors of Indian cuisine to Canada. With locations in Toronto,
        Brampton, Surrey, and Calgary, we aim to offer more than just a meal—we
        deliver a warm, satisfying experience rooted in tradition and
        hospitality.
      </p>
      <div>
        <img
          loading="lazy"
          className="absolute -top-10 opacity-50 left-30 w-[22vw] md:left-[20vw]  z-1 xl:w-[15vw]"
          src="/16.png"
          alt=""
        />
        <img
          loading="lazy"
          className="absolute opacity-50 top-15 right-20 w-[20vw] z-1 xl:w-[10vw]"
          src="/18.png"
          alt=""
        />
        <img
          loading="lazy"
          className="absolute opacity-50 top-[50vw] w-[15vw] z-1 md:top-[15vw] xl:w-[10vw]  xl:top-[15vw]"
          src="/17.png"
          alt=""
        />
      </div>
      <div>
        <div className="flex flex-col justify-center gap-4 lg:gap-[4rem] mt-20 md:flex-row">
          <img
            loading="lazy"
            className="md:w-[50%] lg:w-[40%] xl:w-[30%]"
            src="/Des1.png"
            alt=""
          />
          <div className="md:w-[50%] lg:w-[40%] xl:w-[30%]">
            <img loading="lazy" src="/Line.png" alt="line" />
            <p className="font-bold text-xl -mt-4">Our Story</p>
            <p className="text-center text-justify">
              Founded with a love for traditional Indian cooking, our journey
              began with a simple goal: to share authentic, home-style food with
              our community. What started as a small family venture has grown
              into a trusted name for flavorful dishes and exceptional service
              across multiple cities.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 lg:gap-[4rem] mt-20 md:flex-row">
          <div className="md:w-[50%] lg:w-[40%] xl:w-[30%]">
            <img loading="lazy" src="/Line.png" alt="line" />
            <p className="font-bold text-xl -mt-4">What We Offer</p>
            <p className="text-center text-justify">
              We serve a wide variety of Veg and Non-Veg dishes, prepared fresh
              every day using high-quality ingredients and authentic recipes.
              Whether you’re dining in with family, ordering lunch to your
              doorstep, or planning a special event, we’ve got you covered with:
            </p>
            <ul className="list-disc list-inside text-left mt-4 pl-4">
              <li>Table Reservations for a comfortable dine-in experience</li>
              <li>
                Daily Lunch Deliveries, with flexible weekly or monthly plans
              </li>
              <li>Catering Services for all types of gatherings and events</li>
              <li>
                A diverse menu including customer favorites like Tandoori Paneer
                Tikka, curries, biryanis, and more
              </li>
            </ul>
          </div>
          <div className="md:w-[50%] lg:w-[40%] xl:w-[30%] flex flex-col items-center justify-center gap-4">
            <img loading="lazy" className="" src="/Des2.png" alt="" />
            <p>Click below to check our menu and reservation page.</p>
            <div className="flex gap-4">
              <button className="px-2 py-1 bg-yellow-700 rounded-md">
                Online Reservation
              </button>
              <button className="px-2 py-1 bg-yellow-700 rounded-md">
                Menu
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 lg:gap-[4rem] mt-20 md:flex-row">
          <img
            loading="lazy"
            className="md:w-[50%] lg:w-[40%] xl:w-[30%]"
            src="/Des3.png"
            alt=""
          />
          <div className="md:w-[50%] lg:w-[40%] xl:w-[30%]">
            <img loading="lazy" src="/Line.png" alt="line" />
            <p className="font-bold text-xl -mt-4">Our Delivery Partners</p>
            <p className="text-center text-justify">
              For added convenience, we’ve partnered with leading delivery
              platforms like Uber Eats and SkipTheDishes, so you can enjoy our
              meals from the comfort of your home. Simply browse our menu, place
              your order, and let your favorite dishes come to you, hot and
              fresh.
            </p>
            <p className="mt-5 text-center">
              Click below to directly order from our delivery partners.
            </p>
            <div className="flex gap-10 mt-5 justify-center">
              <img
                loading="lazy"
                className="h-9 rounded-sm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWwQVdqf7QweOQKg2eCxFqeOh9EMBebySgg&s"
                alt=""
              />
              <img
                loading="lazy"
                className="h-9"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SkipTheDishes_logo.svg/2560px-SkipTheDishes_logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 lg:gap-[4rem] mt-20 md:flex-row">
          <div className="md:w-[50%] lg:w-[40%] xl:w-[30%]">
            <img loading="lazy" src="/Line.png" alt="line" />
            <p className="font-bold text-xl -mt-4">Our Commitment</p>
            <p className="text-center text-justify">
              We take pride in using fresh ingredients, maintaining strict
              hygiene standards, and delivering meals that taste like home. Our
              staff is friendly, attentive, and always ready to help you choose
              the perfect dish for any occasion.
            </p>
          </div>
          <img
            loading="lazy"
            className="md:w-[50%] lg:w-[40%] xl:w-[30%]"
            src="/Des4.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-center mt-20 md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto">
        <p className="text-lg font-bold lg:text-xl underline">Join Us</p>
        <p className="mt-2">
          Whether you're booking a table, arranging catering, or ordering your
          daily lunch, Tandoori Haven is here to serve you with care and
          quality. Visit one of our branches or explore our services online—we
          look forward to serving you soon!
        </p>
        <p className="mt-5 font-semibold">
          Subscribe for future offers and updates.
        </p>
        <button className="px-4 py-2 bg-red-700 rounded-md mt-3 text-white hover:bg-red-500">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
