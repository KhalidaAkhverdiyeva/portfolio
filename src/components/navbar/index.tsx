import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#ece7e1] font-['ClashDisplay'] text-[#020202] font-[700] m-[20px] flex justify-between p-[15px] rounded-[20px] text-[22px] ">
      <div className="text-[24px] ">
        /khalida.
       
      </div>
      <ul className="flex gap-[20px]">
        <li className="hover:line-through cursor-pointer">work</li>
        <li className="hover:line-through cursor-pointer">about </li>
        <li className="hover:line-through cursor-pointer">contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
