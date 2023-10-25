import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox: React.FC = () => {
  return (
    <div className="flex flex-row items-center">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-l-md text-accent"
      />
      <button className=" text-white px-4 py-2 rounded-r-md" onClick={() => {}}>
        <IoIosSearch size={24} />
      </button>
    </div>
  );
};

export default SearchBox;
