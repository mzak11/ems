import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div>
      <div className="p-10 h-screen bg-[#1C1C1C]">
        <Header/>
        <TaskListNumber/>
        <TaskList/>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
