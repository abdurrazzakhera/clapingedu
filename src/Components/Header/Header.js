import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "For Kids", link: "/" },
    { name: "For IELTS", link: "/" },
    { name: "Course", link: "/" },
    { name: "Join Class Now", link: "/" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex md:items-center md:justify-between  bg-white py-4 md:px-8 px-4">
        <div className="flex items-center py-0 text-2xl">
          <span className="text-3xl text-indigo-600 mr-1">
            <Icon icon="ant-design:ant-design-outlined" />
          </span>
          Navbar
        </div>
        <div
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden absolute top-6 right-8 cursor-pointer"
        >
          <span className="text-2xl font-bold text-indigo-600 ">
            <Icon
              icon={navbarOpen ? "ant-design:menu-outlined" : "ep:circle-close"}
            ></Icon>
          </span>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4  absolute md:static md:z-auto z-[-1] left-0 md:w-auto md:pl-0 px-2 bg-white w-full transition-all duration-500 ease-in-out ${
            navbarOpen ? "top-16" : "top-[-490px]"
          }  `}
        >
          {links.map((link) => (
            <li className="text-xl mr-2 md:my-0 my-2 bg-indigo-500 text-white py-1  px-3 hover:bg-white hover:text-gray-600 hover:border border-indigo-400 duration-500 md:rounded-md rounded-sm uppercase ">
              <a href="">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
