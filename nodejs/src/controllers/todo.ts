import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODO: Todo[] = [];
export const createTodo: RequestHandler = (req, res) => {
  // const text = (req.body as {text: string}).text;
  const text = (<{ text: string }>req.body).text;

  const newTodo = new Todo(Math.random().toString(), text);

  TODO.push(newTodo);

  res.status(201).json({ message: "Todo created successfully!", newTodo });
};

export const getTodo: RequestHandler = (req, res) => {
  res.status(200).json({
    message: "Todos fetched successfully",
    todos: TODO,
  });
};

export const updateTodo: RequestHandler<{ todoId: string }> = (req, res) => {
  const todoId = req.params.todoId;
  const text = (<{ text: string }>req.body).text;
  const todo = TODO.find((todo: Todo) => todo.id === todoId);
  if (todo) {
    todo.text = text;
  } else {
    throw (err: Error) => console.log("todo doesn't exist: ", err.message);
  }
  res.status(200).json({
    message: "Todo updated successfully",
    todo,
  });
};

export const deleteTodo: RequestHandler<{ todoId: string }> = (req, res) => {
  const todoId = req.params.todoId;
  const todo = TODO.filter((todo: Todo) => todo.id === todoId);
  // console.log("todo: ",todo);

  const index = TODO.indexOf(todo[0]);
  console.log("index: ", index);
  TODO.splice(index, 1);
  res.status(200).json({ message: "Todo deleted!", deleteTodo });
};
