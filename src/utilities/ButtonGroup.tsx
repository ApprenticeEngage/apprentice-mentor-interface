import React, { useState } from "react";
import { IoRemoveCircle } from "react-icons/io5";

interface AppProps {
  onAddListClick: () => void;
  onAddTestsClick: () => void;
}

const Buttons: React.FC<AppProps> = ({ onAddListClick, onAddTestsClick }) => {
  const [showButtons, setShowButtons] = useState(false);

  const handlePrimaryButtonClick = () => {
    setShowButtons(true);
  };

  return (
    <div>
      {showButtons ? (
        <div className="flex flex-row justify-evenly mt-5 text-text font-normal text-lg items-center">
          <div onClick={() => setShowButtons(false)}>
            <IoRemoveCircle size={24} />
          </div>
          <button
            className="mr-6 ml-3 bg-accent p-2 rounded-lg"
            onClick={onAddListClick}
          >
            Add List
          </button>
          <button
            className=" bg-accent p-2 rounded-lg"
            onClick={onAddTestsClick}
          >
            Add Test
          </button>
        </div>
      ) : (
        <button
          className="mt-5 bg-accent p-2 rounded-lg text-text font-normal text-lg"
          onClick={handlePrimaryButtonClick}
        >
          Add CourseItem
        </button>
      )}
    </div>
  );
};

export default Buttons;
