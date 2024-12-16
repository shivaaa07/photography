import React from "react";
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
  return (
    <>
      <header className={`flex justify-between items-center p-5 xl:px-12 xl:py-8 ${location.pathname == "/" ? "bg-transparent" : "bg-white"} fixed left-0 right-0 z-10`}>
        <div className="logo">
          <NavLink to={`/`}>
            <span className={`grid w-12 h-12 rounded-full ${location.pathname == "/" ? "bg-white" : "bg-black"} ${location.pathname == "/" ? "text-black" : "text-white"} place-items-center font-bold text-2xl xl:text-4xl`}>
              E
            </span>
          </NavLink>
        </div>
        <nav>
          <ul>
            {menuItem.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="icons">
          <TbMenu3 className={`text-3xl xl:text-4xl cursor-pointer ${location.pathname == "/" ? "text-white" : "text-black"}`} />
        </div>
      </header>
    </>
  );
};

export default Header;
