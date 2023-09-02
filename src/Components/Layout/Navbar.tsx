import * as React from "react";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";

export const Navbar = () => {
  const [Navbarbg, setNavbarbg] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const close = () => {
    setIsDropdownOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setNavbarbg(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`py-4 px-8 fixed left-0 right-0 xl:px-40 ${
        Navbarbg ? "bg-navbar" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between contain">
        <img src="/images/logo.png" alt="logo" className=" w-10 h-10" />

        <div>
          <div className=" lg:hidden">
            <CgMenu
              className="text-white text-2xl cursor-pointer"
              onClick={toggleDropdown}
            />

            <ul
              className={`bg-brand-200 fixed p-8 h-full w-64 right-0 leading-10 text-white top-0 transition-all ${
                isDropdownOpen ? "left-0" : "-left-full"
              }`}
            >
              <li onClick={close} className="cursor-pointer">
                <a href="#home">HOME</a>
              </li>
              <li onClick={close} className="cursor-pointer">
                <a href="#about">ABOUT</a>
              </li>
              <li onClick={close} className="cursor-pointer">
                <a href="#services">COFFEE</a>
              </li>
              <li onClick={close} className="cursor-pointer">
                <a href="#reviews">REVIEWS</a>
              </li>
              <li onClick={close} className="cursor-pointer">
                <a href="#blog">BLOG</a>
              </li>
              <li onClick={close} className="cursor-pointer">
                <a href="#pages">PAGES</a>
              </li>
            </ul>
          </div>
          <ul className="text-white hidden lg:flex items-center gap-5 text-xs">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#services">COFFEE</a>
            </li>
            <li>
              <a href="#reviews">REVIEWS</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
            </li>
            <li>
              <a href="#pages">PAGES</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
