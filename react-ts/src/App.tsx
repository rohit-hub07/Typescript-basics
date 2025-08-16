import { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString()
    setTodos([ ...todos, { id, text }]);
  };

  const removeHandler = (todoId: string) => {
    const newTodo = todos.filter((todo: Todo) => {
      return todo.id != todoId;
    });
    setTodos(newTodo);
  }
  return (
    <>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo={removeHandler} />
    </>
  );
}

export default App;
