"use client";

import TodoCards from "./todoCard/TodoCards";
import { columns } from "./todoTable/Columns";
import { TodoTable } from "./todoTable/TodoTable";
import { TodoType } from "./todoTable/data/schema";

const TODOS: TodoType[] = [
  {
    id: 1,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "medium",
    tags: ["home", "personal"],
    status: "todo",
  },
  {
    id: 2,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "medium",
    tags: ["home", "personal"],
    status: "todo",
  },
  {
    id: 3,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "medium",
    tags: ["home", "personal"],
    status: "done",
  },
  {
    id: 4,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "low",
    tags: ["home", "personal"],
    status: "todo",
  },
  {
    id: 5,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "medium",
    tags: ["home", "personal"],
    status: "done",
  },
  {
    id: 6,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "high",
    tags: ["home", "personal"],
    status: "todo",
  },
  {
    id: 7,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "low",
    tags: ["home", "personal"],
    status: "done",
  },
  {
    id: 7,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "low",
    tags: ["home", "personal"],
    status: "done",
  },
  {
    id: 7,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "low",
    tags: ["home", "personal"],
    status: "done",
  },
  {
    id: 7,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "low",
    tags: ["home", "personal"],
    status: "done",
  },
  {
    id: 7,
    todo: "Do something nice for someone",
    createdat: 1670895695,
    priority: "low",
    tags: ["home", "personal"],
    status: "done",
  },
];

export default function TodoList() {
  return <TodoCards data={TODOS} />;
  return <TodoTable columns={columns} data={TODOS} />;
}
