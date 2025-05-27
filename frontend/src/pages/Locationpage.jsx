import React, {useContext} from "react";
import LocationMap from "../components/LocationMap";
import { Mail, Phone } from "lucide-react";
import { PageContext } from "../components/PageContext";

const LocationPage = () => {
  const { location, setLocation } = useContext(PageContext);
  return (
    <div className={`${location ? "block" : "hidden"}`}>
      <p className="font-bold text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Our Locations & Operating Hours
      </p>
      <p className="text-center text-sm mt-2 md:text-base lg:text-lg xl:text-xl">
        Explore our active locations along with their respective opening hours
        to serve you better.
      </p>
      <img
          className="absolute -top-10 opacity-50 left-30 w-[22vw] md:left-[20vw]  z-1 xl:w-[15vw]"
          src="/9.png"
          alt=""
        />
        <img
          className="absolute opacity-50 top-15 right-20 w-[20vw] z-1 xl:w-[10vw]"
          src="/10.png"
          alt=""
        />
        <img
          className="absolute opacity-50 top-[50vw] w-[15vw] z-1 md:top-[15vw] xl:w-[10vw]  xl:top-[15vw]"
          src="/11.png"
          alt=""
        />
      <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lleft.png"
            alt="Line Left"
          />
          <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Brampton Branch
          </p>
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lright.png"
            alt="Line Right"
          />
        </div>
      <div className="flex justify-center flex-col text-center md:flex-row gap-10 mx-10">
        <div>   
          <p className="font-semibold text-lg">Brampton Location</p>
          <p>000 Bovaird Dr W Unit 19-20, Brampton, ON L6X 0T9</p>
          <p className="font-semibold mt-5">Contact Details</p>
          <p><span className="inline-flex items-center text-sm gap-1" ><Phone size={15}/> 905-123-4567</span></p>
          <p><span className="inline-flex items-center text-sm gap-1" ><Mail size={15}/> brampton@tandoorihaven.com</span></p>
        </div>
        <div>
          <p className="font-semibold text-lg">Operating Hours</p>
          <p>Monday to Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday: 12:00 PM - 11:00 PM</p>
          <p>Sunday: Closed</p>
          <p className="mt-5 text-sm">
            Events and Festival might affect these hours. Feel free to contact
            us via our website or phone for any inquiries.
          </p>
        </div>
      </div>
      <div className="mt-10 border-1 border-black mx-[10%]">
        <LocationMap />
      </div>
      <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lleft.png"
            alt="Line Left"
          />
          <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Mississauga Branch
          </p>
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lright.png"
            alt="Line Right"
          />
        </div>
      <div className="flex justify-center flex-col text-center md:flex-row gap-10 mx-10">
        <div>   
          <p className="font-semibold text-lg">Mississauga Location</p>
          <p>300 City Centre Dr, Mississauga, ON L5B 3C1</p>
          <p className="font-semibold mt-5">Contact Details</p>
          <p><span className="inline-flex items-center text-sm gap-1" ><Phone size={15}/> 905-123-4567</span></p>
          <p><span className="inline-flex items-center text-sm gap-1" ><Mail size={15}/> mississauga@tandoorihaven.com</span></p>
        </div>
        <div>
          <p className="font-semibold text-lg">Operating Hours</p>
          <p>Monday to Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday: 12:00 PM - 11:00 PM</p>
          <p>Sunday: Closed</p>
          <p className="mt-5 text-sm">
            Events and Festival might affect these hours. Feel free to contact
            us via our website or phone for any inquiries.
          </p>
        </div>
      </div>
      <div className="mt-10 border-1 border-black mx-[10%]">
        <LocationMap />
      </div>
      <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lleft.png"
            alt="Line Left"
          />
          <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Scarborough Branch
          </p>
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lright.png"
            alt="Line Right"
          />
        </div>
      <div className="flex justify-center flex-col text-center md:flex-row gap-10 mx-10">
        <div>   
          <p className="font-semibold text-lg">Scarborough Location</p>
          <p>300 Borough Dr, Scarborough, ON M1P 4P5</p>
          <p className="font-semibold mt-5">Contact Details</p>
          <p><span className="inline-flex items-center text-sm gap-1" ><Phone size={15}/> 905-123-4567</span></p>
          <p><span className="inline-flex items-center text-sm gap-1" ><Mail size={15}/> scarborough@tandoorihaven.com</span></p>
        </div>
        <div>
          <p className="font-semibold text-lg">Operating Hours</p>
          <p>Monday to Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday: 12:00 PM - 11:00 PM</p>
          <p>Sunday: Closed</p>
          <p className="mt-5 text-sm">
            Events and Festival might affect these hours. Feel free to contact
            us via our website or phone for any inquiries.
          </p>
        </div>
      </div>
      <div className="mt-10 border-1 border-black mx-[10%]">
        <LocationMap />
      </div>
      <div className="flex justify-between w-screen items-center overflow-hidden mt-20 lg:h-[10vw] xl:mt-0">
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lleft.png"
            alt="Line Left"
          />
          <p className="text-lg text-yellow-700 font-semibold h-15 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Oakville Branch
          </p>
          <img
            className="w-[25%] -mt-5 rotate-[2deg] lg:w-[30%]"
            src="/Lright.png"
            alt="Line Right"
          />
        </div>
      <div className="flex justify-center flex-col text-center md:flex-row gap-10 mx-10">
        <div>   
          <p className="font-semibold text-lg">Oakville Location</p>
          <p>100 Navy St, Oakville, ON L6J 1L2</p>
          <p className="font-semibold mt-5">Contact Details</p>
          <p><span className="inline-flex items-center text-sm gap-1" ><Phone size={15}/> 905-123-4567</span></p>
          <p><span className="inline-flex items-center text-sm gap-1" ><Mail size={15}/> oakville@tandoorihaven.com</span></p>
        </div>
        <div>
          <p className="font-semibold text-lg">Operating Hours</p>
          <p>Monday to Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday: 12:00 PM - 11:00 PM</p>
          <p>Sunday: Closed</p>
          <p className="mt-5 text-sm">
            Events and Festival might affect these hours. Feel free to contact
            us via our website or phone for any inquiries.
          </p>
        </div>
      </div>
      <div className="mt-10 border-1 border-black mx-[10%]">
        <LocationMap />
      </div>
      <p className="font-bold text-center text-lg md:text-xl lg:text-2xl xl:text-3xl mt-20">Visit Us Today!</p>
      <p className="text-center text-sm mt-2 md:text-base lg:text-lg xl:text-xl ">At Tandoori Haven, we’re proud to serve the Greater Toronto Area with authentic Indian cuisine in a warm, welcoming environment. Whether you're near Brampton, Mississauga, Scarborough, or Oakville, a delicious experience is just around the corner.</p>
    </div>
  );
};

export default LocationPage;
