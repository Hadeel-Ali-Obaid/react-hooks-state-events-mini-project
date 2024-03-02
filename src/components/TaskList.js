import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {/* Map through tasks and render Task component */}
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;