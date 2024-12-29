import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// const[isactive,setIsactive] = useState(true)
const NavBar = () => {
    const Links = [
        { name: "Home", url: "/"},
        { name: "Movies", url: "/movies" },
        { name: "Series", url: "/series" }

    ]
    return (
        <>

            <div className="">
                <div className="border-b-2 p-3">
                <div className="container ">
                    <div className="flex justify-between items-center">
                        <div className="brand-logo">
                            <h3 className="text-2xl">hr-flickfetch</h3>
                        </div>
                        <div className="flex items-center gap-3">
                            {
                                Links.map(({ name, url }, i) => (
                                    <div className="">
                                        <NavLink  to={url}>{name}</NavLink>

                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>
                </div>
              
            </div>

        </>
    )
}

export default NavBar