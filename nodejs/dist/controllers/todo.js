"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODO = [];
const createTodo = (req, res) => {
    // const text = (req.body as {text: string}).text;
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODO.push(newTodo);
    res.status(201).json({ message: "Todo created successfully!", newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res) => {
    res.status(200).json({
        message: "Todos fetched successfully",
        todos: TODO,
    });
};
exports.getTodo = getTodo;
const updateTodo = (req, res) => {
    const todoId = req.params.todoId;
    const text = req.body.text;
    const todo = TODO.find((todo) => todo.id === todoId);
    if (todo) {
        todo.text = text;
    }
    else {
        throw (err) => console.log("todo doesn't exist: ", err.message);
    }
    res.status(200).json({
        message: "Todo updated successfully",
        todo,
    });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    const todo = TODO.filter((todo) => todo.id === todoId);
    // console.log("todo: ",todo);
    const index = TODO.indexOf(todo[0]);
    console.log("index: ", index);
    TODO.splice(index, 1);
    res.status(200).json({ message: "Todo deleted!", deleteTodo: exports.deleteTodo });
};
exports.deleteTodo = deleteTodo;
