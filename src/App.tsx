import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/Home/page";
import AboutPage from "./Pages/About/page";
import ServicePage from "./Pages/Services/page";
import ReviewPage from "./Pages/Reviews/page";
import ContactPage from "./Pages/Contact/page";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="relative min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}