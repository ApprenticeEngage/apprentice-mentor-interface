import React, { useState } from "react";
import { IoArrowBackCircleOutline, IoSettings } from "react-icons/io5";
import Audience from "../components/CourseEdit/Audience";
import { jsx } from "@emotion/react";
import Schedule from "../components/CourseEdit/Schedule";


const CourseEdit = () => {
  const [selectedSection, setSelectedSection] = useState(""); // State to keep track of the selected section

  // Function to handle the section click
  const handleSectionClick = (section:jsx) => {
    setSelectedSection(section);
  };

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
        <div className="nav m-4 mr-3 flex flex-col text-[22px]">
          <nav className="bg-blue-500 p-5">
            <ul className="flex flex-col justify-start items-start space-y-2 text-text">
              <li>
                <a
                  href="#audience"
                  className={`p-1 ${
                    selectedSection === "audience" ? "bg-accent" : ""
                  } font-semibold hover:bg-accent`}
                  onClick={() => handleSectionClick("audience")}
                >
                  Audience
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className={`p-1 ${
                    selectedSection === "schedule" ? "bg-accent" : ""
                  } font-semibold hover:bg-accent`}
                  onClick={() => handleSectionClick("schedule")}
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  className={`p-1 ${
                    selectedSection === "curriculum" ? "bg-accent" : ""
                  } font-semibold hover:bg-accent`}
                  onClick={() => handleSectionClick("curriculum")}
                >
                  Curriculum
                </a>
              </li>
              <li>
                <a
                  href="#landing-page"
                  className={`p-1 ${
                    selectedSection === "landing-page" ? "bg-accent" : ""
                  } font-semibold hover:bg-accent `}
                  onClick={() => handleSectionClick("landing-page")}
                >
                  LandingPage
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className={`p-1 ${
                    selectedSection === "pricing" ? "bg-accent" : ""
                  } font-semibold hover:bg-accent `}
                  onClick={() => handleSectionClick("pricing")}
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full bg-primary ml-2 shadow-xl mb-10">
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default CourseEdit;
