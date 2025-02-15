import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({data}) => {
  // console.log(data)
  return (
    <div>
      <div className="p-10 h-screen bg-[#1C1C1C]">
        <Header data={data}/>
        <TaskListNumber data={data}/>
        <TaskList data={data}/>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
