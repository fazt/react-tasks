import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { tasks } from "./tasks.json";
import "./index.css";
import "animate.css/animate.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App title="React Tasks" tasks={tasks} />
  </StrictMode>
);
