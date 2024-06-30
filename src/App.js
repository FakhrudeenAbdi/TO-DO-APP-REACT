import React, { useState, useEffect } from 'react';
import Forms from './components/Forms';
import Headers from './components/Headers';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    // You can add your localStorage logic here
  }, []);

  return (
    <div className="container">
      <div className="app-wrapper">
        <Headers />
        <Forms
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
};

export default App;