import { useEffect } from "react";
import "./App.css";
import Feature from "./components/Features/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Home from "./components/Home/Home";
import Testimonials from "./components/Testimonials/Testimonials";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <>
      <Header />
      <Home />
      <Help />
      <Feature />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
