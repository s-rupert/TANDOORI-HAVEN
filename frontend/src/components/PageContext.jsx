// PageContext.jsx
import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [menubtn, setMenubtn] = useState(false);
  const [location, setLocation] = useState(false);
  const [reservation, setReservation] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const [userbtn, setUserbtn] = useState(false)

  const menuHandler = (num) => {
    switch (num) {
      case 0:
        setMenubtn(!menubtn);
        setLocation(false);
        setReservation(false);
        setAbout(false);
        setContact(false);
        if (!menubtn) {
          setHomePage(false);
        }else {
          setHomePage(true);
        }
        break;
      case 1:
        setLocation(!location);
        setMenubtn(false);
        setReservation(false);
        setAbout(false);
        setContact(false);
        if (!location) {
          setHomePage(false);
        } else {
          setHomePage(true);
        }
        break;
      case 2:
        setReservation(!reservation);
        setMenubtn(false);
        setLocation(false);
        setAbout(false);
        setContact(false);
        if (!reservation) {
          setHomePage(false);
        } else {
          setHomePage(true);
        }
        break;
      case 3:
        setAbout(!about);
        setMenubtn(false);
        setLocation(false);
        setReservation(false);
        setContact(false);
        if (!about) {
          setHomePage(false);
        } else {
          setHomePage(true);
        }
        break;
      case 4:
        setContact(!contact);
        setMenubtn(false);
        setLocation(false);
        setReservation(false);
        setAbout(false);
        if (!contact) {
          setHomePage(false);
        } else {
          setHomePage(true);
        }
        break;
      default:
        break;
    }
  };

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
        homePage,
        setHomePage,
        userbtn,
        setUserbtn,

      }}
    >
      {children}
    </PageContext.Provider>
  );
};
