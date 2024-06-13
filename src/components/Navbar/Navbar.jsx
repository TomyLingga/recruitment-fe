import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLink";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import "./styles.css";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : "bg-white"
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container mx-auto flex items-center justify-between px-2`}
        >
          <HiMenuAlt1
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setToggle(true)}
          />
          <div className="flex items-center gap-4">
            <img src="inl-ori.png" alt="" className="photo" />
            {/* <div className="text-xl text-Teal uppercase tracking-wide font-bold">
            </div> */}
          </div>
          <div className="md:w-auto w-full sm:flex hidden items-center md:static absolute px-5">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
            <li className='list-none cursor-pointer mr-8'>
              <a href="/login" className="py-3 px-3 font-bold text-sm border border-solid rounded-lg border-gray-500">
                Register / Login
              </a>
            </li>
          </div>
          
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex md:flex-row flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <li className='list-none cursor-pointer mr-8'>
                <a href="/login" className="py-3 px-3 font-bold bg-Teal text-sm border-2 rounded-lg border-white hover:bg-white hover:text-Teal">
                  Register / Login
                </a>
              </li>
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
