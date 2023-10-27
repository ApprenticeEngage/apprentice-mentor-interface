import React from "react";

const Table = () => {
  return (
    <div className="bg-[#5B5B5B]">
      <table className="mx-auto">
        <thead>
          <tr>
            <th className="bg-[#404040] text-white p-2 border border-[#5B5B5B]">
              Weekdays
            </th>
            <th className="bg-[#404040] text-white p-2 border border-[#5B5B5B]">
              Timings
            </th>
          </tr>
        </thead>
        <tbody className="text-white text-lg">
          <tr>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">Monday</td>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">
              8:00 AM
            </td>
          </tr>
          <tr>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">
              Tuesday
            </td>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">
              9:00 AM
            </td>
          </tr>
          <tr>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">
              Wednesday
            </td>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">
              10:00 AM
            </td>
          </tr>
          <tr>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">
              Thursday
            </td>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">
              11:00 AM
            </td>
          </tr>
          <tr>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">Friday</td>
            <td className="bg-[#5B5B5B] p-2 border border-[#5B5B5B]">
              12:00 PM
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
