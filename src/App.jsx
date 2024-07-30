import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import RemoteTeams from "./pages/RemoteTeams";
import Careers from "./pages/Careers";
import BuildOperateTransfer from "./pages/BuildOperateTransfer";
import ManagedServices from "./pages/ManagedServices";
import MarketEntryProgram from "./pages/MarketEntryProgram";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Faqs from "./pages/Faqs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="remote-teams" element={<RemoteTeams />} />
        <Route
          path="build-operate-transfer"
          element={<BuildOperateTransfer />}
        />
        <Route path="managed-services" element={<ManagedServices />} />
        <Route path="market-entry-program" element={<MarketEntryProgram />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faqs" element={<Faqs />} />
      </Routes>
    </Router>
  );
};

export default App;
