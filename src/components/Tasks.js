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

  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:5050/tasks/${taskId}`).then((result) => {
      setTasks(result.data);
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
        {tasks.map((task) => {
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
    </div>
  );
};

export default Tasks;
