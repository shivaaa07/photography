import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { TbMenu3 } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";

const menuItem = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Albums",
    path: "albums",
  },
  {
    name: "Gallery",
    path: "gallery",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const Header = () => {
  const location = useLocation();
  // menu clicked function
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    console.log("Menu Clicked");
    setOpen(!open);
  };
  return (
    <>
      <header
        className={`p-5 xl:px-12 xl:py-8 ${
          location.pathname == "/" ? "bg-transparent" : "bg-white"
        } fixed left-0 right-0 z-10`}
      >
        <div className="menu-wrapper flex justify-between items-center">
          <div className="logo">
            <NavLink to={`/`}>
              <span
                className={`grid w-12 h-12 rounded-full ${
                  location.pathname == "/" ? "bg-white" : "bg-black"
                } ${
                  location.pathname == "/" ? "text-black" : "text-white"
                } place-items-center font-bold text-2xl xl:text-4xl`}
              >
                E
              </span>
            </NavLink>
          </div>

          <div className="icons">
            <TbMenu3
              className={`text-3xl xl:text-4xl cursor-pointer ${
                open ? "hidden" : "block"
              } ${location.pathname == "/" ? "text-white" : "text-black"}`}
              onClick={handleMenu}
            />
          </div>
        </div>
        <nav
          className={`w-full h-screen absolute left-0 top-0 transition-all duration-500 ease-linear ${
            open ? "translate-y-[0%]" : "translate-y-[-170%]"
          } bg-black/80`}
        >
          <ul className="w-full h-full flex flex-col justify-center items-center gap-4">
            {menuItem.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path} className={`text-white uppercase font-semibold text-2xl hover:text-red-500`} onClick={handleMenu}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
          {/* Close Btn of Menu */}
          <MdClose
            className={`text-3xl xl:text-4xl cursor-pointer fixed top-8 right-8 z-20 ${
              open ? "block" : "hidden"
            } ${location.pathname == "/" ? "text-white" : "text-black"}`}
            onClick={handleMenu}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
