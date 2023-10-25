import React from "react";
import SearchBox from "./SearchBox";
import CourseSortDropdown from "./dropDownSort";
import CourseTile from "./CourseTile";
import { courseData } from "../../constants/data";

interface CoursesProps {
  toggle: boolean;
}

const Courses: React.FC<CoursesProps> = ({ toggle }) => {
  const paddingLeftClass = toggle ? "pl-80" : "pl-36";

  return (
    <div
      className={`flex flex-col justify-start items-start text-text ${paddingLeftClass} w-full pr-16`}
    >
      <h1 className="text-[40px]">Courses</h1>
      <div className="search flex items-center justify-between w-full">
        <div className="flex flex-row space-x-2">
          <SearchBox />
          <CourseSortDropdown onSortChange={() => {}} />
        </div>
        <button className=" p-3 right-16 bg-accent rounded-lg text-text ml-96">
          NEW COURSE
        </button>
      </div>
      <div className="flex flex-col justify-start items-center pt-4 w-full">
        {courseData.map((course) => (
          <CourseTile key={course.id} title={course.title} status={course.published} />
        ))}   
      </div>
    </div>
  );
};

export default Courses;

// 72 36
