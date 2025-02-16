import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className=" p-6 shadow-2xl bg-white rounded-xl mt-5">
      <div className="overflow-x-auto rounded border-[1.5px]">
        <table className="w-full  text-gray-700 font-semibold">
          <thead>
            <tr className="bg-emerald-600 text-white text-lg">
              <th className="p-3 border border-emerald-400">Employee Name</th>
              <th className="p-3 border border-emerald-400">New Task</th>
              <th className="p-3 border border-emerald-400">Active Task</th>
              <th className="p-3 border border-emerald-400">Completed</th>
              <th className="p-3 border border-emerald-400">Failed</th>
            </tr>
          </thead>
          <tbody>
            {authData.employees.map((elem, idx) => (
              <tr
                key={idx}
                className="text-center border border-emerald-400 hover:bg-gray-200 transition"
              >
                <td className="p-3 border border-emerald-400">{elem.fname}</td>
                <td className="p-3 border border-emerald-400 text-blue-400">{elem.taskNumbers.new_task}</td>
                <td className="p-3 border border-emerald-400 text-yellow-400">{elem.taskNumbers.active}</td>
                <td className="p-3 border border-emerald-400 text-green-400">{elem.taskNumbers.completed}</td>
                <td className="p-3 border border-emerald-400 text-red-400">{elem.taskNumbers.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
