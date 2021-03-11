import React, { Component } from "react";

const Tasks = (props) => {
  const taskDelete = () => {
    let deleteAnswer = confirm("Do you want to delete this Task?");
    if (deleteAnswer) {
      props.deleteTask(props.id);
    }
  };

  return (
    <div className="col-md-3 p-2">
      <div className="card bg-dark text-light rounded-0">
        {/* Card Header */}
        <div className="card-header">
          <h5 className="card-title">
            {props.id}.  {props.title}
            <span className="label label-info pull-right">
              {props.priority}
            </span>
          </h5>
        </div>

        {/* Card Body */}
        <div className="card-body">
          <h6>
            <span className="glyphicon glyphicon-user"></span>
            {props.responsible}
          </h6>
          <hr />
          <p className="card-text">{props.description}</p>
        </div>

        {/* Card Footer */}
        <div className="card-footer">
          <button onClick={taskDelete} className="btn btn-danger rounded-0">
            <span className="glyphicon glyphicon-trash"></span>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
