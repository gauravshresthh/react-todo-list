import React from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap/min.css';
import TodoInput from './components/Todoinput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
