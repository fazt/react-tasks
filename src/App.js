import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'

import Task from './components/Task';
import FormTask from './components/FormTask';

class App extends Component {
  constructor(props){
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.onNewTask = this.onNewTask.bind(this);
    this.state = {
      tasks: this.props.tasks,
      title: 'RTasks'
    };
  }

  onNewTask(task){
    var newTaskId = this.state.tasks.length + 1;
    task.id = newTaskId;
    this.state.tasks.push(task);
    this.setState({
      tasks: this.state.tasks
    });
  }

  deleteTask(id) {
    var newTasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    console.log(newTasks);

    this.setState({
      tasks: newTasks
    });
  }

  render() {
    var tasks = this.state.tasks.map( (task, i) => {
      return (
        <Task
          key={i}
          {...task}
          deleteTask={this.deleteTask}
        />);
    });

    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">
                {this.state.title}
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <a href="#">Tasks
                  <span className="badge">
                    {this.state.tasks.length}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={logo} alt=""/>
              <FormTask onNewTask={this.onNewTask}/>
            </div>
            <div className="col-sm-10">
              {tasks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
