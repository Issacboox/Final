import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Speaking from "./components/Speaking/Speaking";
import Schedule from "./components/Schedule/Schedule";
import Pricing from "./components/Pricing/Pricing";
import Sponsors from "./components/Sponsors/Sponsors";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

const Main = () => (
  <React.Fragment>
    <Hero />
    <About />
    <Speaking />
    <Schedule />
    <Pricing />
    <Sponsors />
    <Blog />
    <Contact />
    <Footer />
  </React.Fragment>
);
export default Main;
