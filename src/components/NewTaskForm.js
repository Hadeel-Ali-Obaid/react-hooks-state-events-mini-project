import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskData, setTaskData] = useState({
    text: "",
    category: categories[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(taskData);
    setTaskData({
      text: "",
      category: categories[0]
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={taskData.category} onChange={handleChange}>
          {/* Render option elements for each category */}
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;