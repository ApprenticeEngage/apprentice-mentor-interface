import React from "react";
import { IoArrowBackCircleOutline, IoSettings } from "react-icons/io5";

const CourseEdit = () => {
  return (
    <div className="bg-light-bg  overflow-x-clip h-full w-full">
      {/* navbar */}
      <div className="nav bg-dark flex w-full justify-between text-white p-3 pr-5">
        <div className="flex ">
          <div className="flex items-center mr-8">
            <IoArrowBackCircleOutline size={24} />
            <button className="font-light text-[20px]">Back to Courses!</button>
          </div>

          <h1 className="font-bold text-[20px] mr-8">Course Name</h1>
          <div className="bg-[#808080] px-2 ">
            <h1 className="text-white font-extrabold text-center">DRAFT</h1>
          </div>
        </div>

        <IoSettings size={24} />
      </div>

      <div className="mx-16 mt-8 flex flex-row justify-between ">
        <div className="nav m-4  flex flex-col  text-[22px] ">
          <nav className="bg-blue-500 p-4">
            <ul className="flex flex-col justify-start items-start space-y-2 text-text">
              <li>
                <a href="#audience" className=" hover:bg-accent">
                  Audience
                </a>
              </li>
              <li>
                <a href="#schedule" className=" hover:bg-accent">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#curriculum" className=" hover:bg-accent">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#landing-page" className=" hover:bg-accent">
                  Landing Page
                </a>
              </li>
              <li>
                <a href="#pricing" className=" hover:bg-accent">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CourseEdit;
