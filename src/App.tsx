import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/Home/page";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="relative min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}