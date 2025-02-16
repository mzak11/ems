import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <div>
      <div className="p-10 h-screen bg-gray-100">
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
