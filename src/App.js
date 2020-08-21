import React from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

function App() {
  return (
    <div className="App">
      <div className="task-manager">
        <TaskContextProvider>
          <Header />
          <TaskForm />
          <TaskList />
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
