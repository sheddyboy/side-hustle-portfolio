import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonies from "./components/Testimonies";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
