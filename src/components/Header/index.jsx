import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.screenY >= 10) {
        setBgColor(true);
      } else {
        setBgColor(true);
      }
    };
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => {};
  }, [bgColor]);

  return (
    <header
      className={`sticky top-0 z-20 mt-4 ${
        !bgColor ? "bg-transparent" : "bg-white h-16"
      } `}
    >
      <div className={`flex items-center justify-center`}>
        <nav
          className={`flex justify-evenly ${
            bgColor && "mt-1"
          } w-full items-center`}
        >
          <a className="text-3xl bg-none font-semibold leading-none" href="/">
            <img
              className="h-10"
              src="https://monst-nextjs.vercel.app/assets/imgs/logos/monst-logo.svg"
              alt=""
            />
          </a>
          {/* <ul className="hidden lg-flex lg:items-center lg:w-auto lg:space-x-12">
            <li className="group relative pt-4 pb-4 has-child">
              <Link
                to="/"
                className="text-sm bg-none font-semibold text-slate-600 hover:text-slate-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm bg-none font-semibold text-slate-600 hover:text-slate-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-sm bg-none font-semibold text-slate-600 hover:text-slate-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-sm bg-none font-semibold text-slate-600 hover:text-slate-500"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm bg-none font-semibold text-slate-600 hover:text-slate-500"
              >
                Contact
              </Link>
            </li>
          </ul> */}
          <ul className="hidden md:flex gap-8 uppercase bg-white/10 float-right">
            <li className="text-lg pt-4 bg-none font-semibold text-slate-600 hover:text-slate-500">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg pt-4 bg-none font-semibold text-slate-600 hover:text-slate-500">
              <Link to="/about">About</Link>
            </li>
            <li className="text-lg pt-4 bg-none font-semibold text-slate-600 hover:text-slate-500">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-lg pt-4 bg-none font-semibold text-slate-600 hover:text-slate-500">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-lg pt-4 bg-none font-semibold text-slate-600 hover:text-slate-500">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          <div className="hidden lg:block">
            <a className="bg-none" href="/login">
              <button
                title="Log In"
                className="bg-transparent text-sm hover-text-bg-blue-400 text-bg-blue-400 py-2 px-6 mx-4 border border-bg-blue-400 rounded"
              >
                LogIn
              </button>
            </a>
            <a className="btn-accent bg-none hover-up-2" href="/signup">
              <button
                title="Sign Up"
                className="bg-blue-400 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
              >
                SignUp
              </button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
