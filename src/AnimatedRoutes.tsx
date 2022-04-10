import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/layout/home";

function AnimatedRoutes() {
    const location = useLocation();
  
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Home page={1}/>} />
          <Route path="/trainings" element={<Home page={2}/>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    );
  };

export default AnimatedRoutes