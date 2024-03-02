import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const filterTasks = (category) => {
    if (category === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTasks(filteredTasks);
    }
  };

  const addTask = (newTask) => {
    const task = {
      text: newTask.text,
      category: newTask.category
    };
    setTasks([...tasks, task]);
  };

  const uniqueCategories = [...new Set(CATEGORIES)];

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={[...uniqueCategories]} filterTasks={filterTasks} />
      {/* Pass categories and addTask function as props */}
      <NewTaskForm categories={uniqueCategories} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";

// function App() {
//   const [allTasks, setAllTasks] = useState(TASKS);
//   const [filteredTasks, setFilteredTasks] = useState(TASKS); // Initially, both allTasks and filteredTasks are the same

//   const deleteTask = (taskIndex) => {
//     const updatedAllTasks = allTasks.filter((task, index) => index !== taskIndex);
//     setAllTasks(updatedAllTasks);

//     // Update filteredTasks if the currently selected category is "All"
//     if (filteredTasks === allTasks) {
//       setFilteredTasks(updatedAllTasks);
//     }
//   };

//   const filterTasks = (category) => {
//     if (category === "All") {
//       setFilteredTasks(allTasks);
//     } else {
//       const filteredTasks = allTasks.filter((task) => task.category === category);
//       setFilteredTasks(filteredTasks);
//     }
//   };

//   const addTask = (newTask) => {
//     const task = {
//       text: newTask.text,
//       category: newTask.category
//     };
//     setAllTasks([...allTasks, task]);

//     // Update filteredTasks if the currently selected category is "All"
//     if (filteredTasks === allTasks || newTask.category === "All") {
//       setFilteredTasks([...allTasks, task]);
//     }
//   };

//   const uniqueCategories = [...new Set(CATEGORIES)];

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={[...uniqueCategories, "All"]} filterTasks={filterTasks} />
//       <NewTaskForm categories={uniqueCategories} onTaskFormSubmit={addTask} />
//       <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
//     </div>
//   );
// }

// export default App;