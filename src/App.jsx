import { Routes, Route } from "react-router-dom";
import Footer from "./views/Footer/Footer";
import Home from "./views/Home/Home";
import Details from "./views/Details/Details";
import About from "./views/About/About";
import Faq from "./views/Faq/Faq";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:idGiveaway" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer author="Marco Pérez" link="https://marcodamianperez.github.io/" />
    </>
  );
};

export default App;
