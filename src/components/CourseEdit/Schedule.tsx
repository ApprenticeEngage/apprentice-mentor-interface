import React, { useState } from "react";
import { IoPush } from "react-icons/io5";
import useCourseDifficulty from "../../hooks/courseDiffHook";
import ScheduleSelector from "react-schedule-selector";
import Table from "./Table";
import Map from "./Map";


const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const handleScheduleChange = (newSchedule:any) => {
    setSchedule(newSchedule);
  };
  const [setMonth, setMonthDuration] = useCourseDifficulty(0, 12);
  const [setDays, setDaysDuration] = useCourseDifficulty(0, 30);

  return (
    <div className="w-full flex flex-col justify-start items-start text-text">
      <div className="p-12 font-bold">
        <h1 className="text-4xl mb-10">Scheduling</h1>
        <hr className="h-[3px]" />
      </div>

      {/* Expected Completion Time */}
      <h1 className="text-3xl mb-5 px-12 font-semibold">
        Course Completion Duration
      </h1>
      <p className="mb-4 text-center text-xl px-12 font-normal">
        Time interval in which the vocational training would be completed?
      </p>
      <div className="flex flex-row w-fit mb-12 justify-evenly px-12 items-center">
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

      {/* Weekly Schedule */}
      <h1 className="text-3xl mb-5 px-12 font-semibold">
        Generic Weekly Schedule
      </h1>
      <p className="mb-4 text-center text-xl px-12 font-normal">
        A tentative weekly schedule for your sessions with your apprentices.
        Don't worry you can change it on adhoc basis later!
      </p>
      <div className="px-12 rounded-lg mb-12">
        <Table />
      </div>

      {/* Location */}
      <h1 className="text-3xl mb-5 px-12 font-semibold">
        Location of Instruction
      </h1>
      <p className="mb-4 text-center text-xl px-12 font-normal">
        Where would you be conducting your teaching sessions?
      </p>
      <div className="px-12 rounded-lg mb-12 w-full">
        <Map/>
      </div>
    </div>
  );
};

export default Schedule;
