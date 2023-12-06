import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddNewTask from "./components/AddNewTask";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Tasks />}></Route>
        <Route path="/add-new-task" element={<AddNewTask />}></Route>
      </Routes>
    </>
  );
};

export default App;
