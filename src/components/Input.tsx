import React, { useState } from "react";
import { TodoProps } from "../App";
import { nanoid } from "nanoid";

export type TodoInputProps = Omit<TodoProps, "listIsDone">;

const Input = ({ todos, setTodos }: TodoInputProps) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const isDone: boolean = false;

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  const handleTodoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      content,
      isDone,
    };
    setTodos([...todos, newTodo]);
    onReset();
  };

  const onReset: () => void = () => {
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleTodoSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleTitleChange} />
      <label>Content</label>
      <input value={content} onChange={handleContentChange} />
      <button>등록하기</button>
    </form>
  );
};

export default Input;
