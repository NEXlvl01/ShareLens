import React, { useContext } from "react";
import logo from "../../Logos/Sharelens main.png";
import { FaUserLarge } from "react-icons/fa6";
import "./Navbar.css";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function Navbar() {
  const { loginStatus } = useContext(AppContext);

  var user = localStorage.getItem("Name");
  var firstName = "";

  if(user) {
    firstName = user.split(" ")[0];
  }

  return (
    <div className="bg-[#fdf8f4] flex justify-center">
      <div
        id="mainNavDiv"
        className="flex h-[130px] items-center w-[80%] justify-evenly"
      >
        <div className="w-[150px] flex justify-center">
          <NavLink to="/">
            <img
              src={logo}
              alt=""
              className="w-[150px] h-[30px] cursor-pointer"
            />
          </NavLink>
        </div>

        <div id="navBarItems" className="text-[#0C1D37] flex gap-6">
          <NavLink to="/">
            <button className="hover:text-[#ff4136] transition-all duration-200">
              Home
            </button>
          </NavLink>
          <NavLink to="/cameras">
            <button className="hover:text-[#ff4136] transition-all duration-200">
              Cameras
            </button>
          </NavLink>
          <NavLink to="/lenses">
            <button className="hover:text-[#ff4136] transition-all duration-200">
              Lenses
            </button>
          </NavLink>
          <NavLink to="/about">
            <button className="hover:text-[#ff4136] transition-all duration-200">
              About Us
            </button>
          </NavLink>
        </div>

        <div id="navBarItems" className="flex gap-10 w-[30%] items-center">
          <div className="w-[80%]">
            <div class="max-w-md mx-auto">
              <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-[#0C1D37] ">
                <div className="grid place-items-center h-full w-12 text-[#ff4136]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  class="peer h-full w-full outline-none text-sm text-[#0C1D37] pr-2 placeholder-[#0C1D37]"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
          </div>

          <div className="w-fit">
            {" "}
            {loginStatus ? (
              <div className="flex gap-2 items-center border-2 px-6 py-2 border-[#0C1D37] rounded-full hover:bg-[#0C1D37] hover:text-white transition-all duration-200 cursor-pointer">
                <FaUserLarge className="text-[#ff4136]" />
                <p>{firstName}</p>
              </div>
            ) : (
              <NavLink to="/login">
                <button className="border-2 border-[#0C1D37] px-8 py-2 rounded-full flex items-center justify-center gap-2 text-[#0C1D37] hover:bg-[#0C1D37] hover:text-white transition-all duration-200">
                  <FaUserLarge className="text-[#ff4136]" />
                  <span>Login</span>
                </button>
              </NavLink>
            )}
          </div>
        </div>

        <div id="sideBarMenu" className="hidden text-3xl">
          <MdMenu />
        </div>
      </div>
    </div>
  );
}
