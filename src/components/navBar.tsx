import React from "react";
import { BsPersonCircle } from "react-icons/bs";

const NavBar: React.FC = () => {
  return (
    <div className="w-screen mb-8">
      <div className="flex flex-row justify-end items-center text-text w-screen min-h-fit p-3 pr-8 font-">
        <h1 className="absolute text-[36px] top-3/12 left-1/2 transform -translate-x-1/2 p-4">
          Instructor's Portal
        </h1>
        <div className="flex flex-row items-center">
          <BsPersonCircle size={30} />
          <text className="pl-3">Person</text>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
