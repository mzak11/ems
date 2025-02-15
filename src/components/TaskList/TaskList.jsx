import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      key="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask key={`active-${elem.id}`} />;
        }
        if (elem.new_task) {
          return <NewTask key={`new-${elem.id}`} />;
        }
        if (elem.completed) {
          return <CompleteTask key={`completed-${elem.id}`} />;
        }
        if (elem.failed) {
          return <FailedTask key={`failed-${elem.id}`} />;
        }
        return null; // Ensure all paths return something
      })}
    </div>
  );
};

export default TaskList;
