"use client";

import { columns } from "./todoTable/Columns";
import { TodoTable } from "./todoTable/TodoTable";
import { TodoType } from "./todoTable/data/schema";

const TODOS: TodoType[] = [
  {
    id: 1,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: 1,
    tags: ["home", "personal"],
    status: "tood",
  },
];

export default function TodoList() {
  return (
    <div className="grid grid-cols-1">
      <TodoTable columns={columns} data={TODOS} />
    </div>
  );
}
