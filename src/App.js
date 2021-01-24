import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

const Header = ({ todos }) => {
  return (
    <div class="card-header fw-bolder">You have {todos.length} tasks.</div>
  );
};

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => {
        return (
          <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
        );
      })}
    </ul>
  );
};

const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <li class="list-group-item d-flex justify-content-between">
      {todo.text}
      <button className="badge bg-dark" onClick={() => deleteTodo(index)}>
        X
      </button>
    </li>
  );
};

export default App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="card mx-5 mt-5">
      <TodoForm addTodo={addTodo} />
      <Header todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
