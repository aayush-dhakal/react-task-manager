import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  // or
  //const localJSONData = localStorage.getItem("tasks");
  // const initialState = localJSONData ? JSON.parse(localJSONData) : []; 

  const [tasks, setTasks] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        title,
        id: uuidv4(),
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearTask = () => {
    setTasks([]);
  };

  // find the item that is to be edited
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEditItem(null); // to clearn the input field after successfully updating the task
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearTask,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
