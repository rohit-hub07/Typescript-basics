"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controllers/todo");
const router = express_1.default.Router();
router.route("/").post(todo_1.createTodo);
router.route("/").get(todo_1.getTodo);
router.route("/:todoId").patch(todo_1.updateTodo);
router.route("/:todoId").delete(todo_1.deleteTodo);
exports.default = router;
