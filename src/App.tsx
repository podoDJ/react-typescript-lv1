import React, { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export interface TodoProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  listIsDone: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <Input todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
      <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
    </>
  );
};

export default App;
