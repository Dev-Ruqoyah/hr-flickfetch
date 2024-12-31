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
      <div className="">
        <div className="border-b-2 p-3">
          <div className="container ">
            <div className="flex justify-between items-center">
              <div className="brand-logo">
                <h3 className="text-xl font-bold">hr-flickfetch</h3>
              </div>

              <div className=" md:flex hidden items-center gap-3">
                {Links.map(({ name, url }, i) => (
                  <div className="" key={i}>
                    <NavLink to={url} className={({isActive})=>isActive?"text-red-700":"text-black"}>{name}</NavLink>
                  </div>
                ))}
              </div>

              <div className="md:hidden block ">
                {isOpen ? (
                  <FaX onClick={() => setIsOpen(false)} />
                ) : (
                  <FaBars onClick={() => setIsOpen(true)} />
                )}
              </div>
             
            </div>
            <div
                className={`${
                  isOpen ? "flex" : "hidden"
                } md:hidden flex-col mt-3  gap-3`}
              >
                {Links.map(({ name, url }, i) => (
                  <div className="" key={i}>
                    <NavLink to={url} className={({isActive})=>isActive?"text-red-500":"text-black"}>{name}</NavLink>
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
