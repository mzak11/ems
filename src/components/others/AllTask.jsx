import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  // console.log(authData.employees);

  return (
    <div className="p-5 bg-[#1c1c1c]  rounded h-60 ">
      <div className="bg-red-400 mb-2 py-2   flex justify-between rounded text-center ">
        <h2 className=" text-xl font-medium w-1/5">Employee Name</h2>
        <h3 className=" text-xl font-medium w-1/5">New Task</h3>
        <h3 className=" text-xl font-medium w-1/5">Active Task</h3>
        <h5 className=" text-xl font-medium w-1/5">Completed</h5>
        <h5 className=" text-xl font-medium w-1/5">Failed</h5>
      </div>

      <div id="allTask" className="h-[80%] overflow-auto">
        {" "}
        {authData.employees.map((elem,idx) => {
          return (
            <div key={idx} className="border border-red-100 mb-2 py-2 px-4 flex justify-between rounded text-center gap-20">
              <h2 className=" w-1/5 rounded-2xl">{elem.fname}</h2>
              <h3 className="text-xl font-medium !text-blue-600 w-1/5 rounded-2xl">
                {elem.taskNumbers.new_task}
              </h3>
              <h5 className="text-xl font-medium !text-yellow-500 w-1/5 rounded-2xl">
                {elem.taskNumbers.active}
              </h5>
              <h5 className="text-xl font-medium !text-white w-1/5 rounded-2xl ">
                {elem.taskNumbers.completed}
              </h5>
              <h5 className="text-xl font-medium !text-red-600 w-1/5 rounded-2xl">
                {elem.taskNumbers.failed }
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
