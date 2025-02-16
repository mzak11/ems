import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState();
  const [taskDate, setTaskDate] = useState();
  const [taskDescription, setTaskDescription] = useState();
  const [assignTo, setAssignTo] = useState();
  const [category, setCategory] = useState();

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      new_task: true,
      failed: false,
      completed: false,
    });
    const data = JSON.parse(localStorage.getItem("employees"));
    console.log(data);

    data.forEach(function (elem) {
      if (assignTo == elem.fname) {
        elem.tasks.push(newTask);

        console.log(elem);
      }
    });

    localStorage.setItem('employees',JSON.stringify(data))

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskDescription("");
    setCategory("");
  };
  return (
    <div className=" mb-5">
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between "
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className=" text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px]"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className=" text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                type="date"
                name=""
                id=""
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                className=" text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                type="text"
                placeholder="employee name "
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className=" text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col item-start">
              <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
              <textarea
                value={taskDescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
                className="w-full h-39 text-sm py-2 mr-20 rounded outline-none bg-transparent border-[1px] border-gray-400"
                cols="40"
                rows="20"
                name="id"
              ></textarea>
            </div>
            <button className="w-full mt-4 text-sm rounded px-5 hover:bg-emerald-600 py-3 bg-emerald-500">
              {" "}
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
