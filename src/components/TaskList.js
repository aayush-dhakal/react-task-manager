import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskDetail from "./TaskDetail";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return tasks.length ? (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskDetail task={task} key={task.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">
      No tasks to do
      <span role="img" aria-label="smiley">
        &#128512;
      </span>   {/* this span thing is react recommended. search in google for detail */}
      
    </div>
  );
};

export default TaskList;
