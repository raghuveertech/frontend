import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { taskId } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    const task = {
      title: title,
      description: description,
    };
    axios
      .put(`http://localhost:5050/tasks/${taskId}`, task, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        alert("Something went wrong. Please try again later.");
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5050/tasks/${taskId}`)
      .then((result) => {
        console.log(result.data);
        const taskData = result.data;
        setTitle(taskData.title);
        setDescription(taskData.description);
      })
      .catch((err) => {
        console.log(err.message);
        alert("Something went wrong. Please try again later.");
      });
  }, [taskId]);

  return (
    <div className="main text-center">
      <div className="header">
        <h1>Update Task</h1>
        <Link to={"/"}>
          <button>View All Tasks</button>
        </Link>
      </div>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type={"text"}
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateTask;
