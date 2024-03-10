import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Client from "./components/Client";
import About from "./components/About";
import Service from "./components/Service";
import Choose from "./components/Choose";
import Provide from "./components/Provide";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Client />
      <About />
      <Service />
      <Choose />
      <Provide />
      <Location />
      <Footer />
    </>
  );
}

export default App;
