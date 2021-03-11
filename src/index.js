import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "animate.css/animate.min.css";

import { tasks } from "./tasks.json";

ReactDOM.render(
  <App title="React Tasks" tasks={tasks} />,
  document.getElementById("root")
);
