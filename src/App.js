import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
// import OneBlog from "./components/blog/OneBlog";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import OnePortfolio from "./components/portfolio/OnePortfolio";
import Portfolio from "./components/portfolio/Portfolio";
import "./App.css";
import FullBlog from "./components/blog/FullBlog";

export const TitleContext = createContext();

const App = () => {
  const [titleShow, setTitleShow] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setTitleShow(false);
    } else {
      setTitleShow(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar titleShow={titleShow} />
      <TitleContext.Provider value={setTitleShow}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<FullBlog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<OnePortfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </TitleContext.Provider>
    </BrowserRouter>
  );
};

export default App;
