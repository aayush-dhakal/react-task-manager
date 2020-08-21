import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskDetail = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskContext);
  return (
    <li className="tasklist-li">
      <div className="list-title"> {task.title}</div>
      <div className="list-icons">
        <i className="fas fa-edit" onClick={() => findItem(task.id)}></i>
        <i className="fas fa-trash" onClick={() => removeTask(task.id)}></i>
      </div>
    </li>
  );
};

export default TaskDetail;
