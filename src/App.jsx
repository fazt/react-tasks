import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks);

  const addNewTask = (newTask) =>
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const renderTasks = () =>
    tasks.map((task, i) => (
      <TaskCard key={i} {...task} deleteTask={deleteTask} />
    ));

  return (
    <div className="App">
      <Navbar title={props.title} tasks={tasks} />

      <div className="container py-5">
        <div className="row">
          <div className="col-sm-3">
            <img src={logo} alt="React Tasks App" className="App-logo" />
            <TaskForm onNewTask={addNewTask} tasks={tasks} />
          </div>
          <div className="col-sm-9">
            <div className="row">{renderTasks()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
