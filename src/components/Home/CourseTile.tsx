import React from "react";

type CourseTileProps = {
  key: string;
  title: string;
  status: string;
};

const CourseTile: React.FC<CourseTileProps> = ({ key, title, status }) => {
  return (
    <div className="flex bg-card-dark w-full text-white rounded-lg mb-4">
      <div className="banner rounded-lg bg-temp w-2/12"></div>
      <div className="text-center p-4 flex justify-between items-center w-full">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <span className="mr-2 text-sm font-thin">{status}</span>
        </div>
        <div className="mt-2">
          <button className="bg-accent text-white p-2 mb-1 rounded-md">
            Edit/Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseTile;
