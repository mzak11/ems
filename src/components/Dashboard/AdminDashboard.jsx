import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7 bg-gray-100">
      <Header  changeUser={props.changeUser}/>
     <CreateTask/>
     <AllTask/>
    </div>
  );
};

export default AdminDashboard;
