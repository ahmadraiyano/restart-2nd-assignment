import React from "react";
import NavLi from "./NavLi/NavLi";
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


const NavBar = () => {
  return (
    <div className=" shadow-sm bg-white">
      <div className="w-10/12 mx-auto flex justify-between items-center py-4">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLi></NavLi>
            </ul>
          </div>
          <a className="text-2xl font-bold logo cursor-pointer">TickeTin</a>
        </div>
        
        <div className="flex items-center">
            <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLi></NavLi>
          </ul>
        </div>
          <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><FontAwesomeIcon icon="fa-solid fa-plus" /> New Ticket</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
