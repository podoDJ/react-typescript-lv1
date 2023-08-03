import React from "react";
import { TodoProps } from "../App";

const TodoList = ({ todos, setTodos, listIsDone }: TodoProps) => {
  const handleTodoDelete = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleTodoUpdate = (id: string): void => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>{listIsDone ? "끝난 일" : "할 일"}</h1>
      {todos
        .filter((todo) => todo.isDone === listIsDone)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.content}</p>
              <p>{todo.isDone.toString()}</p>
              <button onClick={() => handleTodoDelete(todo.id)}>삭제하기</button>
              <button onClick={() => handleTodoUpdate(todo.id)}>{todo.isDone ? "완료하기" : "취소하기"}</button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
