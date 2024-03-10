import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="relative">
      <div className="flex justify-between px-5 py-5 items-center absolute top-0 left-0 w-full">
        <div>
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>

        {/* menu */}

        <ul className="hidden md:flex text-[#007869] font-normal text-[16px] gap-[10px]">
          <li className="px-2 hover:text-yellow-600  transition duration-300">
            <a href=""> Home</a>
          </li>
          <li className="px-2 hover:text-yellow-600  transition duration-300">
            {" "}
            <a href=""> Our Service</a>
          </li>
          <li className="px-2 hover:text-yellow-600  transition duration-300">
            {" "}
            <a href=""> About Us</a>
          </li>
          <li className="px-2 hover:text-yellow-600 transition duration-300">
            {" "}
            <a href=""> Contact Us</a>
          </li>
        </ul>

        {/* humberger  */}

        <div className="md:hidden z-10 " onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>

        {/* mobile menu */}

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-[40px] right-[20px]  w-[250px] py-10 px-10  font-lexend  bg-white rounded-md z-100 "
          }
        >
          <li
            className="mx-2 mb-4 hover:bg-[#496F41] transition duration-300 px-3"
            onClick={handleClick}
          >
            <a href="#"> Home</a>
          </li>
          <li
            className="mx-2 mb-4 hover:bg-[#496F41] transition duration-300 px-3"
            onClick={handleClick}
          >
            <a href="#about"> Our Service</a>{" "}
          </li>
          <li
            className="mx-2 mb-4 hover:bg-[#496F41] transition duration-300 px-3"
            onClick={handleClick}
          >
            <a href="#skill"> About Us</a>
          </li>
          <li
            className="mx-2 mb-4 hover:bg-[#496F41] transition duration-300 px-3"
            onClick={handleClick}
          >
            <a href="#portfolio"> Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
