import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Blog from "./components/pages/Blog/Blog";
// import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tab from "./components/Tab/tab";
import Footer from "./components/Footer";
import Services from "./components/pages/Services/Services";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
