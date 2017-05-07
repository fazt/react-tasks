import React, { Component } from 'react';

class FormTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      responsible: '',
      priority: 'low'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    console.log(e.target.name);
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    let task = this.state;
    this.props.onNewTask(task);
  }
  render() {
    return(
        <form onSubmit={this.handleSubmit} className="form-task">
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-pencil"></i>
              </span>
              <input
                value={this.state.title}
                name="title"
                onChange={this.handleChange}
                type="text"
                placeholder="Insert A Task"
                className="form-control"/>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-user"></i>
              </span>
              <input
                value={this.state.responsible}
                name="responsible"
                onChange={this.handleChange}
                type="text"
                placeholder="Insert A Reponsible"
                className="form-control"/>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-list-alt"></i>
              </span>
              <textarea
                value={this.state.description}
                name="description"
                onChange={this.handleChange}
                type="text"
                placeholder="Insert A Description"
                className="form-control"></textarea>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-flag"></i>
              </span>
              <select
                value={this.state.priority}
                onChange={this.handleChange}
                name="priority"
                type="text"
                className="form-control">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
            </div>
          </div>

          <input type="submit" className="btn btn-block btn-success"/>
        </form>
    )
  }
}

export default FormTask;
