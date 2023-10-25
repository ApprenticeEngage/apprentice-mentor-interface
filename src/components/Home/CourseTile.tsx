import React from "react";

type CourseTileProps = {
  title: string;
  status: "Draft" | "Published";
};

const CourseTile: React.FC<CourseTileProps> = ({ title, status }) => {
  return (
    <div className="flex items-center bg p-4 justify-between text-white ">
      <div className="bg-temp p-3 rounded-l-md"></div>
      <div className="text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mt-2">
          <span className="mr-2">{status}</span>
          <button className="bg-green-500 text-white px-3 py-1 rounded-md">
            Edit/Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseTile;
