import React, { useState } from "react";
import logo from "../assets/tesla-logo.png";
import { TfiClose } from "react-icons/tfi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex font-bold">
        <div className="flex justify-between items-center  w-screen">
          <a href="https://tesla.com">
            <img
              src={logo}
              alt="logo"
              className="h-[150px] flex justify-between items-center"
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

          <div className="lg:hidden text-white p-1 bg-black/15 rounded-md shadow-sm hover:bg-black/50">
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
                size={25}
              />
            </div>
            <ul className="ml-10 mt-5 ">
              <li className="mt-3 hover:rounded hover:bg-black/5">Model S</li>
              <li className="mt-3 hover:rounded hover:bg-black/5">Model 3</li>
              <li className="mt-3 hover:rounded hover:bg-black/5">Model X</li>
              <li className="mt-3 hover:rounded hover:bg-black/5">Model Y</li>
              <li className="mt-3 hover:rounded hover:bg-black/5">
                Solar Roof
              </li>
              <li className="mt-3 hover:rounded hover:bg-black/5">
                Solar Panel
              </li>
              <li className="mt-3 hover:rounded hover:bg-black/5">
                Existing Inventory
              </li>
              <li className="mt-3 hover:rounded hover:bg-black/5">
                Used Inventory
              </li>
              <li className="mt-3 hover:rounded hover:bg-black/5">Trade-in</li>
              <li className="mt-3 hover:rounded hover:bg-black/5">
                Test Drive
              </li>
              <li className="mt-3 hover:rounded hover:bg-black/5">Insurance</li>
              <li className="mt-3 hover:rounded hover:bg-black/5">Powerwall</li>
              <li className="mt-3 hover:rounded hover:bg-black/5">
                Commercial Energy
              </li>
              <li className="mt-3 hover:rounded hover:bg-black/5">Utilities</li>
              <li className="mt-3 hover:rounded hover:bg-black/5">More</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
