import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Delete } from "lucide-react";

type TodoListProps = {
  items: { id: string; text: string }[];
  onRemoveTodo: (todoId: string) => void;
};

const TodoList: React.FC<TodoListProps> = (props) => {
  // console.log(props.items);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 w-full max-w-3xl mx-auto">
      {props.items.map((todo) => (
        <Card
          className="flex flex-col justify-between p-4 min-h-[80px]"
          key={todo.id}
        >
          <CardHeader className="flex flex-row items-center justify-between p-0 pb-2">
            <CardTitle className="truncate text-base">{todo.text}</CardTitle>
            <Button onClick={() => props.onRemoveTodo(todo.id)} className="h-8 w-8 ml-2" variant="destructive" size="icon">
              <Delete />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
