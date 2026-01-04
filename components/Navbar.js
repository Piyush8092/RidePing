"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";

const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false);
    const links=["Home","Features","Why Choose Us","Reviews","Our Plans","FAQs","Contact"];
  return (
   <nav className="bg-[#FFC857]">
    <div className="h-16 items-center flex justify-between" >
     <div className="text-4xl text-black font-semibold px-9">RidePing</div>
       <div className="hidden sm:block">
      {links.map(link => (
  <a
    key={link}
    href="#"
    className="text-[#1F1F1F] text-s px-4 font-bold
               hover:underline underline-offset-2
               decoration-red-500 decoration-2"
  >
    {link}
  </a>
))}

     </div>
     <button  className=" block sm:hidden px-4 text-3xl text-black"onClick={()=>setIsOpen(!isOpen)} ><CiMenuBurger/></button>
    </div>
    <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-black p-2`}>
  <div className="bg-[#FFC857] rounded-lg rounded-bl-[160px] px-10 py-6 space-y-3 shadow-lg">
    <div></div>
    {links.map((link) => (
      <a
        key={link}
        href="#"
        className="block text-right text-[#141313] text-lg font-semibold hover:underline "
      >
        {link}
      </a>
    ))}
  </div>
</div>

   </nav>
  );
};

export default Navbar;
