// PageContext.jsx
import { createContext, useState, useRef } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [menubtn, setMenubtn] = useState(false);
  const [location, setLocation] = useState(false);
  const [reservation, setReservation] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [userbtn, setUserbtn] = useState(false);
  const [scrollTo, setScrollTo] = useState(0);
  const tablebookRef = useRef(null);
  const cateringRef = useRef(null);
  const dailylunchRef = useRef(null);
  const locBramptonRef =useRef(null);
  const locMississaugaRef =useRef(null);
  const locOakvilleRef =useRef(null);
  const locScarboroughRef =useRef(null);
  const contactRef = useRef(null);
  const [toCart, setToCart] = useState(false);
  const [idNum, setIdNum] = useState("");
  const [user, setUser] = useState({
    fullname: "",
    email: ""
  });

  const menuHandler = (num) => {
    switch (num) {
      case 0:
        setMenubtn(true);
        setLocation(false);
        setReservation(false);
        setAbout(false);
        setContact(false);

        break;
      case 1:
        setLocation(true);
        setMenubtn(false);
        setReservation(false);
        setAbout(false);
        setContact(false);
        break;
      case 2:
        setReservation(true);
        setMenubtn(false);
        setLocation(false);
        setAbout(false);
        setContact(false);
        break;
      case 3:
        setAbout(true);
        setMenubtn(false);
        setLocation(false);
        setReservation(false);
        setContact(false);

        break;
      case 4:
        setContact(true);
        setMenubtn(false);
        setLocation(false);
        setReservation(false);
        setAbout(false);


        break;
      case 10:
        setContact(false);
        setMenubtn(false);
        setLocation(false);
        setReservation(false);
        setAbout(false);
        break;
      default:
        break;
    }
  };

  const addToCartHandler = (val) => {
    setIdNum(val)
    setToCart(true)
  }

  return (
    <PageContext.Provider
      value={{
        menubtn,
        setMenubtn,
        location,
        setLocation,
        reservation,
        setReservation,
        about,
        setAbout,
        contact,
        setContact,
        menuHandler,
        userbtn,
        setUserbtn,
        tablebookRef,
        cateringRef,
        dailylunchRef,
        scrollTo,
        setScrollTo,
        locBramptonRef,
        locMississaugaRef,
        locOakvilleRef,
        locScarboroughRef,
        contactRef,
        toCart,
        setToCart,
        addToCartHandler,
        idNum,
        setIdNum,
        user,
        setUser
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
