import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar"; // Optional

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Optional - remove if not using */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
