import react from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import Locationpage from "./pages/Locationpage";
import { PageContext } from "./components/PageContext";
import ReservationPage from "./pages/Reservationpage";
import AboutPage from "./pages/Aboutpage";
import ContactPage from "./pages/Contactpage";
import Review from "./pages/Review";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/menu" element={<Menupage />} />
            <Route path="/location" element={<Locationpage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/review" element={<Review />} />
          </Route>
            <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
