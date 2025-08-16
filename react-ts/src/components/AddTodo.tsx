import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps ={
  onAddTodo: (todoText: string) => void;
}

export const AddTodo = ({onAddTodo}: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {

    setText(event.target.value);
  }

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex mt-10">
      <Input onChange={changeEventHandler} className="w-auto mr-5" type="text" value={text} placeholder="Write a new todo..." />
      <Button type="submit">Add todo</Button>
    </form>
  );
};
