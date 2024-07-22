import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import Streamline from "./components/Streamline";
import Email from "./components/Email";
import WhatWeDo from "./components/WhatWeDo";
import WhyAfrica from "./components/WhyAfrica";
// import News from "./components/News";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/newsletter" element={<Email />} /> */}
        {/* Add more routes if needed */}
      </Routes>
      <WhatWeDo />
      <WhyAfrica />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Workflow />
        <Streamline />
      </div>
      <Faqs />
      <Email />
      <Footer />
    </Router>
  );
};

export default App;
