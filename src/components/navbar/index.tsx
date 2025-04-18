import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#ece7e1] flex justify-between p-[20px] rounded-[20px] text-[20px] font-['ClashDisplay'] font-[700]">
      <div>logo</div>
      <ul className="flex gap-[10px]">
        <li>work</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
