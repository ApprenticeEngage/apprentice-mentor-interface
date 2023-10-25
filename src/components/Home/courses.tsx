import React from "react";
import SearchBox from "./SearchBox";
import CourseSortDropdown from "./dropDownSort";
import CourseTile from "./CourseTile";

interface CoursesProps {
  toggle: boolean;
}

const Courses: React.FC<CoursesProps> = ({ toggle }) => {
  const paddingLeftClass = toggle ? "pl-80" : "pl-36";

  return (
    <div
      className={`flex flex-col justify-start items-start text-text ${paddingLeftClass} `}
    >
      <h1 className="text-[40px]">Courses</h1>
      <div className="search flex items-center justify-between">
        <div className="flex flex-row space-x-2">
          <SearchBox />
          <CourseSortDropdown onSortChange={() => {}} />
        </div>
        <button className="absolute p-3 right-16 bg-accent rounded-lg text-text ml-96">NEW COURSE</button>
      </div>
      <div className="flex flex-col justify-start items-center pt-4">
        <CourseTile title="Vocation" status="Published"></CourseTile>
      </div>
    </div>
  );
};

export default Courses;

// 72 36
