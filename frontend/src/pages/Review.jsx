import React, { useEffect, useContext, useState} from "react";
import Reviewdata from "../JSON/Reviews.json";
import FAQs from "../JSON/FAQs.json"
import Chatbot from "../components/Chatbot";
import { PageContext } from "../components/PageContext";

function Review() {
  const { review, setReview } = useContext(PageContext);
  const lightColors = [
    "#FCE4EC", // light pink
    "#FFF3E0", // light orange
    "#E3F2FD", // light blue
    "#F1F8E9", // light green
    "#FFFDE7", // light yellow
    "#EDE7F6", // light purple
    "#FBE9E7", // light coral
    "#E0F7FA", // light cyan
    "#F9FBE7", // light lime
    "#ECEFF1", // light gray-blue
    "#F0F4C3", // light chartreuse
    "#FFE0B2", // light apricot
    "#E8F5E9", // light mint
    "#F3E5F5", // light lavender
    "#FFF8E1", // light cream
  ];

  


  return (
    < div className={`relative ${review?"":"hidden"}`}>
      <Chatbot />
      <p className="text-xl font-bold text-center md:text-2xl lg:text-3xl xl:text-4xl">What Our Customer Say</p>
      <p className="text-sm text-center mt-[1vw] md:text-xl">
        Feedback from users. Hear how our food and services made their dining a
        better experience.
      </p>

      <div className="overflow-hidden w-full py-6 mt-[2vw]">
        <div className="flex gap-8 marquee w-max">
          {Reviewdata.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-60 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center md:w-65 lg:w-70 xl:w-80`}
              style={{ backgroundColor: lightColors[index] }}
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={item.url}
                  alt={item.author_name}
                />
                <div>
                  <p className="font-semibold text-sm">{item.author_name}</p>
                  <p className="text-yellow-500 text-sm">⭐ {item.rating}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2 text-center">
                {item.text}
              </p>
              <p className="text-xs text-gray-500">
                {item.relative_time_description}
              </p>
            </div>
          ))}
          {Reviewdata.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={item.url}
                  alt={item.author_name}
                />
                <div>
                  <p className="font-semibold text-sm">{item.author_name}</p>
                  <p className="text-yellow-500 text-sm">⭐ {item.rating}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2 text-center">
                {item.text}
              </p>
              <p className="text-xs text-gray-500">
                {item.relative_time_description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xl font-bold text-center mt-20 md:text-2xl lg:text-3xl xl:text-4xl">Frequently Asked Questions(FAQs)</p>
      <div className="flex justify-center relative">
        <div className="flex flex-wrap gap-5 m-5 lg:w-[1024px] justify-center items-center">
          {FAQs.map((item) => (
            <div className="text-left bg-white rounded-lg shadow-lg px-4 py-2 md:w-[46vw] lg:w-[500px]">
              <p className="text-lg mt-[1vw] md:text-xl font-bold">{item.question}</p>
              <p className="text-sm text-justify">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
