import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      description: description,
    };
    axios
      .post("http://localhost:5050/tasks/add", newTask, {
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

  return (
    <div className="main text-center">
      <h1>Add New Task</h1>
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

export default AddNewTask;
