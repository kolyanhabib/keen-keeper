import { useState } from "react";

import { ImStatsDots } from "react-icons/im";
import { LuClock4 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import MyNavLink from "./MyNavLink";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow relative z-50">
      <div className="flex justify-between items-center px-4 py-3 container mx-auto">
      
        <h1 className="font-bold text-2xl text-[#1F2937]">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </h1>

      
        <ul className="hidden md:flex items-center font-medium text-[16px] gap-6">
          <li>
            <MyNavLink to="/">
              <RiHome2Line size={20} /> Home
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/timeline">
              <LuClock4 size={20} /> Timeline
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/stats">
              <ImStatsDots size={20} /> Stats
            </MyNavLink>
          </li>
        </ul>

        
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl text-[#1F2937] cursor-pointer"
        >
          <FiMenu />
        </button>
      </div>

      
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40"
        ></div>
      )}

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="flex items-center justify-between px-6 py-4 shadow">
          <h1 className="font-bold text-xl text-[#1F2937]">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </h1>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-gray-600 hover:text-black cursor-pointer"
          >
            <FiX />
          </button>
        </div>


        <ul className="flex flex-col gap-3 px-4 py-6 font-medium text-[16px]">
          <li onClick={() => setOpen(false)}>
            <MyNavLink to="/">
              <RiHome2Line size={20} /> Home
            </MyNavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <MyNavLink to="/timeline">
              <LuClock4 size={20} /> Timeline
            </MyNavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <MyNavLink to="/stats">
              <ImStatsDots size={20} /> Stats
            </MyNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
