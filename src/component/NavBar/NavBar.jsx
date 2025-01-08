import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
// const[isactive,setIsactive] = useState(true)
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { name: "Home", url: "/" },
    { name: "Movies", url: "/movies" },
    { name: "Series", url: "/series" },
  ];
  return (
    <>
      <div className="opacity-90">
        <div className="border-b-2 p-3">
          <div className="container ">
            <div className="flex justify-between items-center">
              <div className="brand-logo">
                <Link   to = {"/ "}>
               
                  <h3 className="text-xl font-bold text-white">
                    hr-flickfetch
                  </h3>
                </Link>
              </div>

              <div className=" md:flex hidden items-center gap-3">
                {Links.map(({ name, url }, i) => (
                  <div className="" key={i}>
                    <NavLink
                      to={url}
                      className={({ isActive }) =>
                        isActive
                          ? "text-red-500 font-bold transition-all duration-300"
                          : "text-white hover:text-red-500 transition-all duration-300 "
                      }
                    >
                      {name}
                    </NavLink>
                  </div>
                ))}
              </div>

              <div className="md:hidden block ">
                {isOpen ? (
                  <FaX
                    className="text-white  transition-transform duration-300 transform hover:rotate-90"
                    onClick={() => setIsOpen(false)}
                  />
                ) : (
                  <FaBars
                    className="text-white transition-transform duration-300 transform hover:scale-110"
                    onClick={() => setIsOpen(true)}
                  />
                )}
              </div>
            </div>
            <div
              className={`${
                isOpen ? "flex animate-slide-in" : "hidden animate-slide-in"
              } md:hidden flex-col mt-3  gap-3`}
            >
              {Links.map(({ name, url }, i) => (
                <div className="" key={i}>
                  <NavLink
                    to={url}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 font-bold transition-all duration-300"
                        : "text-white hover:text-red-500 transition-all duration-300"
                    }
                  >
                    {name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
