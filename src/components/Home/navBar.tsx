import React from "react";
import { BsPersonCircle } from "react-icons/bs";

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center text-text w-screen min-h-fit pt-2 mb-8 pl-16 pr-16">
      <h1 className="md:text-[36px]  sm:text-[22px] pl-20">
        Instructor's Portal
      </h1>
      <div className="flex flex-row items-center pl-4">
        <BsPersonCircle size={30} />
        <span className="pl-3">Person</span>
      </div>
    </div>
  );
};

export default NavBar;
