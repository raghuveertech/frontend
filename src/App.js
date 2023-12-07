import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddNewTask from "./components/AddNewTask";
import Tasks from "./components/Tasks";
import UpdateTask from "./components/UpdateTask";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Tasks />}></Route>
        <Route path="/add-new-task" element={<AddNewTask />}></Route>
        <Route path="/task/:taskId" element={<UpdateTask />}></Route>
      </Routes>
    </>
  );
};

export default App;
