import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "Brush your teeth", done: true },
    { text: "Build a project", done: false },
    { text: "Go to the gym", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const todo_left = todos.filter((todo) => !todo.done).length;

  const pluralize = (count, singular, plural) => {
    return `${count} ${count === 1 ? singular : plural}`;
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "active") return !todo.done;
    if (activeFilter === "completed") return todo.done;
    return true;
  });

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newTodo.trim() !== "") {
                setTodos([...todos, { text: newTodo, done: false }]);
                setNewTodo("");
              }
            }}
          >
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
          </form>
        </header>

        <section hidden={todos.length === 0} className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={todo_left === 0}
            onChange={() =>
              setTodos(todos.map((todo) => ({ ...todo, done: todo_left !== 0 })))
            }
          />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {filteredTodos.map((todo, index) => (
              <li key={index} className={todo.done ? "completed" : ""}>
                <div className="view">
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={todo.done}
                    onChange={() =>
                      setTodos(
                        todos.map((t, i) =>
                          i === index ? { ...t, done: !t.done } : t
                        )
                      )
                    }
                  />
                  <label>{todo.text}</label>
                  <button
                    className="destroy"
                    onClick={() => setTodos(todos.filter((t, i) => i !== index))}
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer hidden={todos.length === 0} className="footer">
          <span className="todo-count">{pluralize(todo_left, "item", "items")} left</span>
          <ul className="filters">
            {["all", "active", "completed"].map((filter) => (
              <li key={filter}>
                <a
                  href="#/"
                  className={activeFilter === filter ? "selected" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button
            hidden={todos.filter((todo) => todo.done).length === 0}
            className="clear-completed"
            onClick={() => setTodos(todos.filter((todo) => !todo.done))}
          >
            Clear completed
          </button>
        </footer>
      </section>
    </>
  );
}

export default App;