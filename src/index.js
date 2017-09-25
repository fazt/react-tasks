import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { tasks } from './tasks.json';


ReactDOM.render(
  <App title="RTasks" tasks={tasks}/>,
  document.getElementById('root')
);
