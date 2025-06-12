import React, { useContext, useEffect } from "react";
import { PageContext } from "../components/PageContext";
import { Mail, Phone } from "lucide-react";

const Contactpage = () => {
  const { menuHandler, contactRef, scrollTo } = useContext(PageContext);
  useEffect(() => {
    menuHandler(4);
    if (scrollTo === 10) {
      window.location.reload();
    }
  });

  return (
    <div className="p-4" ref={contactRef}>
      <p className="text-center text-lg mt-2 md:text-xl lg:text-2xl xl:text-3xl font-bold">
        We’d love to hear from you! Whether you have questions about our menu,
        want to make a reservation, need catering information, or have feedback,
        feel free to get in touch.
      </p>
      <div className="flex flex-col items-center justify-center mt-20">
        <p className="font-bold underline text-lg lg:text-xl">
          Visit our Locations
        </p>
        <div className="flex flex-wrap justify-center gap-10 mt-4">
          <div className="flex flex-col items-center text-center mt-4 w-70">
            <p className="font-bold">Brampton</p>
            <p>000 Bovaird Dr W Unit 19-20, Brampton, ON L6X 0T9</p>
            <p>
              <span className="inline-flex items-center text-sm gap-1">
                <Phone size={15} /> 905-123-4567
              </span>
            </p>
            <p>
              <span className="inline-flex items-center text-sm gap-1">
                <Mail size={15} /> brampton@tandoorihaven.com
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-4 w-70">
            <p className="font-bold">Mississauga</p>
            <p>300 City Centre Dr, Mississauga, ON L5B 3C1</p>
            <p>
              <span className="inline-flex items-center text-sm gap-1">
                <Phone size={15} /> 905-123-4567
              </span>
            </p>
            <p>
              <span className="inline-flex items-center text-sm gap-1">
                <Mail size={15} /> mississauga@tandoorihaven.com
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-4 w-70">
            <p className="font-bold">Scarborough</p>
            <p>300 Borough Dr, Scarborough, ON M1P 4P5</p>
            <p>
              <span className="inline-flex items-center text-sm gap-1">
                <Phone size={15} /> 905-123-4567
              </span>
            </p>
            <p>
              <span className="inline-flex items-center text-sm gap-1">
                <Mail size={15} /> scarborough@tandoorihaven.com
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-4 w-70">
            <p className="font-bold">Oakville</p>
            <p>100 Navy St, Oakville, ON L6J 1L2</p>
            <p>
              <span className="inline-flex items-center text-sm gap-1">
                <Phone size={15} /> 905-123-4567
              </span>
            </p>
            <p>
              <span className="inline-flex items-center text-sm gap-1">
                <Mail size={15} /> oakville@tandoorihaven.com
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="font-bold mt-15 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl underline">
        Contact Us
      </p>
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center mt-10 text-center md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto">
          <p className="inline-flex items-center text-lg gap-1 font-bold">
            <span>
              <Phone size={20} />
            </span>
            <span>Phone Support</span>
          </p>
          <p>
            For general inquiries, reservations, and lunch orders, call us at:
          </p>
          <p>Toll-Free: 1-800-FOOD-IND (3663-463)</p>
          <p className="inline-flex items-center text-lg gap-1 font-bold mt-10">
            <span>
              <Mail size={20} />
            </span>
            <span>Email Us</span>
          </p>
          <p>For catering, partnerships, or special requests:</p>
          <p>info@tandoorihaven.com</p>
        </div>
        <form className="mt-8 mx-auto md:w-[90%] lg:w-[50%] xl:w-[40%] mx-auto">
          <div className="flex flex-wrap justify-between w-full">
            <div className="mb-4 w-[45%]">
              <label
                className="block text-sm font-medium mb-2 font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4 w-[45%]">
              <label
                className="block text-sm font-medium mb-2 font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 font-semibold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-700 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactpage;
