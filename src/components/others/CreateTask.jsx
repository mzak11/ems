import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      new_task: true,
      failed: false,
      completed: false,
    };

    let data = JSON.parse(localStorage.getItem("employees")) || [];

    data = data.map((employee) => {
      if (employee.fname === assignTo) {
        return { ...employee, tasks: [...(employee.tasks || []), task] };
      }
      return employee;
    });

    localStorage.setItem("employees", JSON.stringify(data));

    // Reset form fields
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskDescription("");
    setCategory("");
  };

  return (
    <div className="flex justify-center items-center min-h-[470px] bg-white rounded-xl shadow-2xl mt-5">
      <form onSubmit={submitHandler} className="p-8 bg-gray border-[1.5px] border-gray-700 rounded-xl w-full max-w-6xl grid grid-cols-2 gap-6">
        <h2 className="text-2xl font-bold text-center col-span-2 text-emerald-600">Create a New Task</h2>
        
        <div className="flex flex-col gap-5">
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-full p-3 bg-gray-200 border-[1.5px] border-emerald-600 rounded-xl outline-none placeholder-gray-400"
            type="text"
            placeholder="Task Title"
            required
          />
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="w-full p-3 text-gray-400 bg-gray-200 border-[1.5px] border-emerald-600 rounded-xl outline-none"
            type="date"
            required
          />
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="w-full p-3 bg-gray-200 border-[1.5px] border-emerald-600 rounded-xl outline-none placeholder-gray-400"
            type="text"
            placeholder="Assign to (Employee Name)"
            required
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 bg-gray-200 border-[1.5px] border-emerald-600 rounded-xl outline-none placeholder-gray-400"
            type="text"
            placeholder="Category (e.g. Design, Development)"
            required
          />
        </div>
        
        <div className="flex flex-col gap-4">
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full p-3 bg-gray-200 border-[1.5px] border-emerald-600 rounded-xl outline-none placeholder-gray-400 h-48"
            placeholder="Task Description"
            required
          ></textarea>
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 p-3 rounded-xl text-lg transition">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
