import React, { Component } from 'react';

class Tasks extends Component{
  constructor (props) {
    super(props);
    this.taskDelete = this.taskDelete.bind(this);
  }

  taskDelete(){
    let deleteAnswer = confirm('Do you want to delete this Task?');
    if (deleteAnswer) {
      this.props.deleteTask(this.props.id);
    }
  }


  render() {
    return(
      <div className="col-md-3">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h5 className="panel-title">
              {this.props.id} - {this.props.title}
              <span className="label label-info pull-right">
                {this.props.priority}
              </span>
            </h5>
          </div>
          <div className="panel-body">
            <h6>
              <span className="glyphicon glyphicon-user"></span>
              {this.props.responsible}
            </h6>
            <hr/>
            {this.props.description}
          </div>
          <div className="panel-footer">
            <button
              onClick={this.taskDelete}
              className="btn btn-danger">
              <span className="glyphicon glyphicon-trash"></span>
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Tasks;
