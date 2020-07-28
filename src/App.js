import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/Todoinput';
import TodoList from './components/TodoList';

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
