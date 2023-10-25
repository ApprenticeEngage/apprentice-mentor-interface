import React from "react";
import { BsPersonCircle } from "react-icons/bs";

interface NavBarProps {
  toggle: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggle }) => {
  const paddingLeftClass = toggle ? "pl-72" : "pl-20";
  return (
    <div className="flex flex-row justify-between items-center text-text w-screen min-h-fit pt-2 mb-8 pl-16 pr-16">
      <h1
        className={`md:text-[36px]  sm:text-[22px] ${paddingLeftClass}`}
      >
        Instructor's Portal
      </h1>
      <div className="flex flex-row items-center absolute right-16">
        <BsPersonCircle size={30} />
        <span className="pl-3">Person</span>
      </div>
    </div>
  );
};

export default NavBar;
