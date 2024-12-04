import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carousel from "./Components/Carousal";
import EventDetails from "./Components/EventDetails";
import Confirmation from "./Components/Confirmation";
import Navbar from "./Components/NavBar";
import EventList from "./Components/EventList";
import CheckoutPage from "./Components/CheckoutPage";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-black text-white">        
        {/* These Routes define separate pages */}
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/event" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
