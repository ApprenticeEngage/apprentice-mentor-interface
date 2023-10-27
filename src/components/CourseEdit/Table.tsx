import React from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Table = () => {
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
            <tr>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                Monday
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Starting Time"
                />
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Ending Time"
                />
              </td>
            </tr>
            <tr>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                Tuesday
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Starting Time"
                />
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Ending Time"
                />
              </td>
            </tr>
            <tr>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                Wednesday
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Starting Time"
                />
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Ending Time"
                />
              </td>
            </tr>
            <tr>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                Thursday
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Starting Time"
                />
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Ending Time"
                />
              </td>
            </tr>
            <tr>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                Friday
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Starting Time"
                />
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Ending Time"
                />
              </td>
            </tr>
            <tr>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                Saturday
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Starting Time"
                />
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Ending Time"
                />
              </td>
            </tr>
            <tr>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                Sunday
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Starting Time"
                />
              </td>
              <td className="bg-[#404040] p-2 border border-[#5B5B5B]">
                <TimePicker
                  className="bg-[#7e7878] rounded-xl"
                  label="Ending Time"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </LocalizationProvider>
    </div>
  );
};

export default Table;
