import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="flex screen bg-gray-200 rounded-xl p-5 justify-between mt-5 gap-5">
      <div className=" py-6 px-9 rounded-xl w-[45%] bg-white shadow-2xl border-[1.5px] border-blue-500">
        <h2 className="text-2xl text-center font-bold text-blue-500">{data.taskNumbers.new_task}</h2>
        <h3 className="text-xl  text-center">New Task</h3>
      </div>
      <div className=" py-6 px-9 rounded-xl w-[45%] bg-white shadow-2xl border-[1.5px] border-green-500">
        <h2 className="text-2xl text-center font-bold text-green-500">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl text-center ">Completed Task</h3>
      </div>
      <div className=" py-6 px-9 rounded-xl w-[45%] bg-white shadow-2xl border-[1.5px] border-yellow-500">
        <h2 className="text-2xl text-center font-bold text-yellow-500">{data.taskNumbers.active}</h2>
        <h3 className="text-xl text-center font">Active Task</h3>
      </div>
      <div className=" py-6 px-9 rounded-xl w-[45%]  bg-white shadow-2xl border-[1.5px] border-red-500">
        <h2 className="text-2xl font-bold text-center text-red-500">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl  text-center">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
