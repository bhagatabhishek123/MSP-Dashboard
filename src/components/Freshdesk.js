import React, { useState, useEffect } from "react";
import "../styles/Freshdesk.css";

const initialTasks = {
  open: ["Task1", "Task 2", "Task 3"],
  pending: ["Task 4"],
  resolved: ["Task 6", "Task 7"],
  closed: ["task 11", "task10"],
  waiting_for_customer: ["task 12", "task 24"],
  in_progress: ["task 14", "task40"],
  pending_with_google_support: ["task21", "task42"],
};

const Freshdesk = () => {
  const [open, setopen] = useState(<i class="material-icons">pending</i>);
  const [progress, setProgress] = useState(
    <i class="material-icons">schedule</i>
  );
  const [resolved, setresolved] = useState(
    <i class="material-icons">resolved</i>
  );

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

    if (prevStatus === "open") {
      setProgress(<i class="material-icons">schedule</i>);
    } else if (prevStatus === "pending") {
      setresolved(<i class="material-icons">resolved</i>);
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
        {/* Open column */}
        <div className="col">
          <div
            className="column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "open")}
          >
            <div>
              <h5>Open</h5>
            </div>
            {tasks.open.map((task, index) => (
              <div
                className="list card text-black mb-3"
                key={index}
                style={{ margin: 20 }}
                draggable
                onDragStart={(e) => handleDragStart(e, task, "open")}
              >
                <div className="card-header">
                  {task} {open}
                </div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending column */}
        <div className="col">
          <div
            className="column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "pending")}
          >
            <div>
              <h5>Pending</h5>
            </div>
            {tasks.pending.map((task, index) => (
              <div
                className="list card text-black mb-3"
                key={index}
                style={{ margin: 20 }}
                draggable
                onDragStart={(e) => {
                  handleDragStart(e, task, "pending");
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

        {/* Resolved column */}
        <div className="col">
          <div
            className="column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "resolved")}
          >
            <div>
              <h5>Resolved</h5>
            </div>

            {tasks.resolved.map((task, index) => (
              <div
                className="list card text-black mb-3"
                style={{ margin: 20 }}
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, task, "resolved")}
              >
                <div className="card-header">
                  {task} {resolved}
                </div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closed column */}
        <div className="col">
          <div
            className="column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "closed")}
          >
            <div>
              <h5>Closed</h5>
            </div>

            {tasks.closed.map((task, index) => (
              <div
                className="list card text-black mb-3"
                style={{ margin: 20 }}
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, task, "closed")}
              >
                <div className="card-header">
                  {task} {resolved}
                </div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Waiting for customer column */}
        <div className="col">
          <div
            className="column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "waiting_for_customer")}
          >
            <div>
              <h5>waiting for customer</h5>
            </div>

            {tasks.waiting_for_customer.map((task, index) => (
              <div
                className="list card text-black mb-3"
                style={{ margin: 20 }}
                key={index}
                draggable
                onDragStart={(e) =>
                  handleDragStart(e, task, "waiting_for_customer")
                }
              >
                <div className="card-header">
                  {task} {resolved}
                </div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In progress column */}
        <div className="col">
          <div
            className="column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "in_progress")}
          >
            <div>
              <h5>In progress</h5>
            </div>

            {tasks.in_progress.map((task, index) => (
              <div
                className="list card text-black mb-3"
                style={{ margin: 20 }}
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, task, "in_progress")}
              >
                <div className="card-header">
                  {task} {resolved}
                </div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* google support column */}
        <div className="col">
          <div
            className="column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "pending_with_google_support")}
          >
            <div>
              <h5>Pending with google support</h5>
            </div>

            {tasks.pending_with_google_support.map((task, index) => (
              <div
                className="list card text-black mb-3"
                style={{ margin: 20 }}
                key={index}
                draggable
                onDragStart={(e) =>
                  handleDragStart(e, task, "pending_with_google_support")
                }
              >
                <div className="card-header">
                  {task} {resolved}
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
  );
};
export default Freshdesk;
