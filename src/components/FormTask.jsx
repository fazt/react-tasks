import { useState } from "react";

const FormTask = (props) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    responsible: "",
    priority: "low",
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onNewTask(task);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-light rounded-0 px-1 py-4"
    >
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <span className="material-icons">task</span>
          </span>
          <input
            value={task.title}
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Insert A Task"
            className="form-control rounded-0"
            autoFocus
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <span className="material-icons">person</span>
          </span>
          <input
            value={task.responsible}
            name="responsible"
            onChange={handleChange}
            type="text"
            placeholder="Insert A Reponsible"
            className="form-control rounded-0"
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <span className="material-icons">edit</span>
          </span>
          <textarea
            value={task.description}
            name="description"
            onChange={handleChange}
            type="text"
            placeholder="Insert A Description"
            className="form-control"
          ></textarea>
        </div>
      </div>

      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text rounded-0">
            <span className="material-icons">person</span>
          </span>
          <select
            value={task.priority}
            onChange={handleChange}
            name="priority"
            type="text"
            className="form-control rounded-0"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-success rounded-0 w-100">
        Guardar
      </button>
    </form>
  );
};

export default FormTask;
