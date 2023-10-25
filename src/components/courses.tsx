import React from "react";
import SearchBox from "./SearchBox";

interface CoursesProps {
  toggle: boolean;
}

const Courses: React.FC<CoursesProps> = ({ toggle }) => {
  const paddingLeftClass = toggle ? "pl-80" : "pl-36";

  return (
    <div className={`flex flex-col justify-start items-start text-text ${paddingLeftClass}`}>
      <h1 className="text-[40px]">Courses</h1>
      <div className="flex flex-col justify-start items-center pt-4">
        <SearchBox/>
      </div>
    </div>
  );
};

export default Courses;

// 72 36
