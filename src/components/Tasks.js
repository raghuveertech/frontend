import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5050/tasks")
      .then((result) => {
        const tasks = result.data;
        if (!tasks || tasks.length === 0) {
          setTasks([]);
          setMessage("No To-Do Items To Display");
        } else {
          setTasks(result.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setMessage("Something went wrong. Please try again later.");
      });
  }, []);

  const deleteTask = (taskId) => {
    axios
      .delete(`http://localhost:5050/tasks/${taskId}`)
      .then((result) => {
        setTasks(result.data);
        toast("Task Deleted!");
      })
      .catch((err) => {
        console.log(err.message);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="main text-center">
      <div className="header">
        <h1>Tasks</h1>
        <Link to={"/add-new-task"}>
          <button>Add New Task</button>
        </Link>
      </div>
      <ul className="tasks-list">
        {tasks.length === 0 && <p className="no-result">{message}</p>}

        {tasks.length !== 0 &&
          tasks.map((task) => {
            return (
              <li key={task._id}>
                {task.title}{" "}
                <Link to={`/task/${task._id}`}>
                  <button>Edit</button>
                </Link>{" "}
                <button onClick={() => deleteTask(task._id)}>Delete</button>{" "}
              </li>
            );
          })}
      </ul>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Tasks;
