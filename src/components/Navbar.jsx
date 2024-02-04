import React from "react";
import menu from "../../public/Group 2933.png";

function Navbar() {
  return (
    <div className="grid h-[80px] w-screen grid-cols-3 gap-4 bg-[#F05A22]">
      <div className="flex items-center sm:ml-6 ml-1">
        <h1 className="text-xl cols-start font-bold text-white">
          TravelMedia.in
        </h1>
      </div>
      <div className="col-span-2 flex items-center justify-start ml-16">
        <img className="h-12" src={menu} alt="menu" />
      </div>
    </div>
  );
}

export default Navbar;
