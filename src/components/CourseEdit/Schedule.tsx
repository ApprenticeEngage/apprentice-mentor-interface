import React, { useState } from "react";
import { IoPush } from "react-icons/io5";
import useCourseDifficulty from "../../hooks/courseDiffHook";

const Schedule = () => {
  const [setMonth, setMonthDuration] = useCourseDifficulty(0, 12);
  const [setDays, setDaysDuration] = useCourseDifficulty(0, 30);

  return (
    <div className="w-full flex flex-col justify-start items-start text-text">
      <div className="p-12 font-bold">
        <h1 className="text-4xl mb-10">Scheduling</h1>
        <hr className="h-[3px]" />
      </div>

      {/* Expected Completion Time */}
      <h1 className="text-3xl mb-5 px-12 font-semibold">Learning Outcomes</h1>
      <p className="mb-4 text-center text-xl px-12 font-normal">
        Time interval in which the vocational training would be completed?
      </p>
      <div className="flex flex-row w-fit justify-evenly px-12 items-center">
        <input
          placeholder="Months (0 possible too)"
          className="text-accent rounded-lg p-2 grow mr-4"
          type="number"
          value={setMonth}
          onChange={(e) => setMonthDuration(e.target.value)}
        />
        <input
          placeholder="Days"
          className="text-accent rounded-lg p-2 mr-4 grow"
          type="number"
          value={setDays}
          onChange={(e) => setDaysDuration(e.target.value)}
        />

        <div className="hover:cursor-pointer">
          <IoPush size={24} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
