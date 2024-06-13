import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { FaSignInAlt, FaClipboardList } from "react-icons/fa";
import MobileNavLinks from "./MobileNavLink";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import logo1 from '../../assets/inl-ori.png';
import "./styles.css";

const Navbar5 = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div
      className={`${
        active ? "shadow transition-all bg-white/10 backdrop-blur-sm" : " bg-transparent transition-all"
      } fixed w-full top-0 left-0 z-20 `}
    >
      <div>
        <div
          className={`${
            active ? "transition-all duration-300" : ""
          } mx-auto flex items-center justify-between`}
        >
          <HiMenuAlt1
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setToggle(true)}
          />
          <div className="flex items-center gap-4 px-10 md:w-6/12 md:py-3">
            <img src={logo1} alt="" className="photo mx-auto" />
          </div>
          <div className={`${active ? "border-l-4 border-b-4 border-solid border-white bg-colorBodies3 transition-all" : "transition-all bg-transparent"} md:w-10/12 w-full sm:flex hidden items-center md:static absolute px-10 md:py-5 text-white rounded-bl-full`}>
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
            <li className='list-none cursor-pointer space-x-2'>
              <a href="/login" className="p-2 font-bold text-sm border-2 border-solid rounded-lg border-white hover:bg-white hover:text-colorBodies3 inline-flex items-center">
                <FaSignInAlt className="mr-2"/> Masuk
              </a>
              <a href="/login" className="p-2 font-bold text-sm border-2 border-solid rounded-lg border-white hover:bg-white hover:text-colorBodies3 inline-flex items-center">
                <FaClipboardList className="mr-2"/> Daftar
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

export default Navbar5
