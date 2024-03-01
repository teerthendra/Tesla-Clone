import React, { useState } from "react";
import logo from "../assets/tesla-logo.png";
import { TfiClose } from "react-icons/tfi";
import { FiChevronRight } from "react-icons/fi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex text-sm">
        <div className="flex justify-between items-center  w-screen">
          <a href="https://tesla.com">
            <img
              src={logo}
              alt="logo"
              className="h-[140px] flex justify-between items-center"
            />
          </a>

          <div className=" text-white justify-centre items-center hidden lg:inline ">
            <ul className="flex py-2 divide-x-2 divide-black-300">
              <li className="py-1 px-3 hover:rounded hover:bg-[#00000013]">
                <a href="https://tesla.com/models">Model S</a>
              </li>
              <li className="py-1 px-3 hover:rounded hover:bg-[#00000013]">
                <a href="https://tesla.com/model3">Model 3</a>
              </li>
              <li className="py-1 px-3 hover:rounded hover:bg-[#00000013]">
                <a href="https://tesla.com/modelx">Model X</a>
              </li>
              <li className="py-1 px-3 hover:rounded hover:bg-[#00000013]">
                <a href="https://tesla.com/modely">Model Y</a>
              </li>
              <li className="py-1 px-3 hover:rounded hover:bg-[#00000013]">
                <a href="https://tesla.com/solarroof">Solar Roof</a>
              </li>
              <li className="py-1 px-3 hover:rounded hover:bg-[#00000013]">
                <a href="https://tesla.com/solarpanels">Solar Panels</a>
              </li>
            </ul>
          </div>

          <div className="text-white hidden lg:inline ">
            <ul className="flex divide-x-2 divide-black-300 ">
              <li className="py-1 px-3 hover:rounded hover:bg-[#00000013]">
                <a href="https://shop.tesla.com">Shop</a>
              </li>
              <li className="py-1 px-3 hover:rounded hover:bg-[#00000013]">
                <a href="https://tesla.com/teslaaccount">Account</a>
              </li>
              <li
                onClick={handelNav}
                className="py-1 px-3 hover:rounded hover:bg-[#00000013]"
              >
                Menu
              </li>
            </ul>
          </div>

          <div className="lg:hidden text-white p-2 bg-black/15 rounded-md shadow-sm hover:bg-black/40">
            <button onClick={handelNav} className="lg:hidden">
              Menu
            </button>
          </div>

          <div
            className={
              nav
                ? "bg-white absolute top-0 right-0 w-80 h-full z-10 "
                : "fixed right-[100%]"
            }
          >
            <div className="flex justify-end pr-8 pt-8 z-9">
              <TfiClose
                onClick={handelNav}
                className="rounded m-2 p-1 hover:bg-black/5 icon-black"
                size={20}
              />
            </div>
            <ul className="ml-10 mt-5 overflow-hidden ">
              <li className=" p-2 hover:rounded hover:bg-black/5 mb-4 w-screen ">
                Vehicles <FiChevronRight className="w-1/4 inline " size={20} />{" "}
              </li>

              <li className=" p-2 w-screen hover:rounded hover:bg-black/5 mb-4 ">
                Energy <FiChevronRight className="inline w-1/4" size={20} />{" "}
              </li>

              <li className=" p-2 w-screen hover:rounded hover:bg-black/5 mb-4">
                Charging <FiChevronRight className="inline w-1/4" size={20} />{" "}
              </li>

              <li className=" p-2 w-screen hover:rounded hover:bg-black/5 mb-4">
                Discover <FiChevronRight className="inline w-1/4" size={20} />{" "}
              </li>

              <li className=" p-2 w-screen hover:rounded hover:bg-black/5 mb-4">
                Shop{" "}
              </li>

              <li className=" p-2 w-screen hover:rounded hover:bg-black/5 mb-4">
                Support{" "}
              </li>

              <li className=" p-2 w-screen hover:rounded hover:bg-black/5 mb-4 ">
                Account <FiChevronRight className="inline w-1/4" size={20} />{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
