import React, { useState } from "react";
import "../styles/Freshdesk.css";

const initialTasks = {
  todo: ["Task 1", "Task 2", "Task 3"],
  inProgress: ["Task 4"],
  done: ["Task 6", "Task 7"],
};

const Freshdesk = () => {
  const [todo, setTodo] = useState(<i class="material-icons">pending</i>);
  const [progress, setProgress] = useState(
    <i class="material-icons">schedule</i>
  );
  const [done, setDone] = useState(<i class="material-icons">done</i>);

  const [tasks, setTasks] = useState(initialTasks);

  const handleDragStart = (e, task, status) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("status", status);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const task = e.dataTransfer.getData("task");
    const prevStatus = e.dataTransfer.getData("status");

    if (prevStatus === "todo") {
      setProgress(<i class="material-icons">schedule</i>);
    } else if (prevStatus === "inProgress") {
      setDone(<i class="material-icons">done</i>);
    }
    if (prevStatus !== status) {
      const newTasks = { ...tasks };
      const taskIndex = newTasks[prevStatus].indexOf(task);
      newTasks[prevStatus].splice(taskIndex, 1);
      newTasks[status].push(task);
      setTasks(newTasks);
    }
  };
  return (
    <div className="freshdesk-body">
      <nav className="navbar">
        <span className="navbar-brand mb-0 h1">Kanban Board</span>
      </nav>
      <div className="freshdesk-dashboard container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div
              className="column"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, "todo")}
            >
              <div>
                <h2>Open</h2>
              </div>
              {tasks.todo.map((task, index) => (
                <div
                  className="list card text-black mb-3"
                  key={index}
                  style={{ margin: 20 }}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, "todo")}
                >
                  <div className="card-header">
                    {task} {todo}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="column"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, "inProgress")}
            >
              <div>
                <h2>In Progress</h2>
              </div>
              {tasks.inProgress.map((task, index) => (
                <div
                  className="list card text-black mb-3"
                  key={index}
                  style={{ margin: 20 }}
                  draggable
                  onDragStart={(e) => {
                    handleDragStart(e, task, "inProgress");
                  }}
                >
                  <div className="card-header">
                    {task} {progress}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="column"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, "done")}
            >
              <div>
                <h2>Resolved</h2>
              </div>

              {tasks.done.map((task, index) => (
                <div
                  className="list card text-black mb-3"
                  style={{ margin: 20 }}
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, "done")}
                >
                  <div className="card-header">
                    {task} {done}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Freshdesk;
