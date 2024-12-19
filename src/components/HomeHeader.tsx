import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const HomeHeader = () => {
  return (
    <main
      className=" flex justify-between  items-center p-3 
     max-w-6xl mx-auto"
    >
      <div className=" flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem
          title="address"
          address="/about"
          Icon={BsFillInfoCircleFill}
        />
      </div>
      <div className=" flex gap-1 items-center">
        <span
          className="text-2xl font-bold bg-amber-500 py-1 px-2
         rounded-lg"
        >
          Me&U
        </span>
        <span className=" text-xl hidden sm:inline">Movies</span>
      </div>
    </main>
  );
};

export default HomeHeader;
