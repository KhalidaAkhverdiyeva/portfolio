import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202]  text-[#ECE7E1] justify-center text-[12px] font-['Satoshi-Regular'] px-4 py-6 flex flex-col  items-center rounded-t-2xl">
      <div className="mb-2 md:mb-0 text-center md:text-left">
        © {currentYear} Khalida | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
