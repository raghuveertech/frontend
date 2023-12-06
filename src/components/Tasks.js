import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/tasks/").then((result) => {
      setTasks(result.data);
    });
  }, []);

  return (
    <div className="main text-center">
      <div className="header">
        <h1>Tasks</h1>
        <Link to={"/add-new-task"}>
          <button>Add New Task</button>
        </Link>
      </div>
      <ul className="tasks-list">
        {tasks.map((task) => {
          return (
            <li>
              {task.title} <button>Edit</button> <button>Delete</button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
