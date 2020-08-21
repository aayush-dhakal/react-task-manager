import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask, clearTask, editItem, editTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      if (title === "") return alert("Please enter the task first");
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title); // firstly sets the input field with the selected item's title then after we edit it the onChange function will keep updating the title and hence will be modified on saving
    } else {
      setTitle("");
    }
  }, [editItem]); // this hook will only be run if editItem is updated ie when first or new item is selected for editing

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form-input">
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="task-form-buttons">
        <input type="submit" value={editItem ? "Edit Task" : "Add Task"} />
        <input type="button" value="Clear" onClick={clearTask} />
      </div>
    </form>
  );
};

export default TaskForm;
