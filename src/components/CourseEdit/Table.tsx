import React, { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Table = () => {
  const [timings, setTimings] = useState({});

  const handleTimeChange = (day, type, time) => {
    // Create a copy of the current timings
    const updatedTimings = { ...timings };
    if (!updatedTimings[day]) {
      updatedTimings[day] = {};
    }
    updatedTimings[day][type] = time;
    console.log(updatedTimings);

    setTimings(updatedTimings);
  };

  return (
    <div className="bg-[#5B5B5B]">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <table className="mx-auto">
          <thead>
            <tr>
              <th className="bg-[#5B5B5B] text-white p-2 border border-[#404040]">
                Weekdays
              </th>
              <th className="bg-[#5B5B5B] text-white p-2 border border-[#404040]">
                Timing Start
              </th>
              <th className="bg-[#5B5B5B] text-white p-2 border border-[#404040]">
                Lesson End
              </th>
            </tr>
          </thead>
          <tbody className="text-white text-lg">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <tr key={day}>
                <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                  {day}
                </td>
                <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                  <TimePicker
                    className="bg-[#7e7878] rounded-xl"
                    label="Starting Time"
                    value={timings[day] && timings[day].start}
                    onChange={(time) => handleTimeChange(day, "start", time)}
                  />
                </td>
                <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                  <TimePicker
                    className="bg-[#7e7878] rounded-xl"
                    label="Ending Time"
                    value={timings[day] && timings[day].end}
                    onChange={(time) => handleTimeChange(day, "end", time)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </LocalizationProvider>
    </div>
  );
};

export default Table;
