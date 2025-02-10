import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex screen justify-between mt-5 gap-5">
      <div className=" py-6 px-9 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" py-6 px-9 rounded-xl w-[45%] bg-blue-400">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" py-6 px-9 rounded-xl w-[45%] bg-emerald-700">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" py-6 px-9 rounded-xl w-[45%]  bg-amber-300">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
