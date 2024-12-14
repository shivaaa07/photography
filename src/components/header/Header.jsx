import React from "react";
import { TbMenu3 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

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
  return (
    <>
      <header className="flex justify-between p-5 xl:p-10">
        <div className="logo">
          <NavLink to={`/`}>
            <span className="grid w-12 h-12 rounded-full bg-black text-white place-items-center font-bold text-2xl xl:text-4xl">
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
          <TbMenu3 className="text-2xl xl:text-4xl cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Header;
