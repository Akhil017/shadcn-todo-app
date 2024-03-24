"use client";

import { useGetTodoList } from "@/hooks/useTodo";
import { columns } from "./todoTable/Columns";
import { TodoTableContainer } from "./todoTable/TodoTableContainer";
import Spin from "./Spin";
import EmptyTodo from "./EmptyTodo";

// const TODOS: TodoType[] = [
//   {
//     id: 1,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "medium",
//     tags: ["home", "personal"],
//     status: "todo",
//   },
//   {
//     id: 2,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "medium",
//     tags: ["home", "personal"],
//     status: "todo",
//   },
//   {
//     id: 3,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "medium",
//     tags: ["home", "personal"],
//     status: "done",
//   },
//   {
//     id: 4,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "low",
//     tags: ["home", "personal"],
//     status: "todo",
//   },
//   {
//     id: 5,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "medium",
//     tags: ["home", "personal"],
//     status: "done",
//   },
//   {
//     id: 6,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "high",
//     tags: ["home", "personal"],
//     status: "todo",
//   },
//   {
//     id: 7,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "low",
//     tags: ["home", "personal"],
//     status: "done",
//   },
//   {
//     id: 7,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "low",
//     tags: ["home", "personal"],
//     status: "done",
//   },
//   {
//     id: 7,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "low",
//     tags: ["home", "personal"],
//     status: "done",
//   },
//   {
//     id: 7,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "low",
//     tags: ["home", "personal"],
//     status: "done",
//   },
//   {
//     id: 7,
//     todo: "Do something nice for someone",
//     createdat: 1670895695,
//     priority: "low",
//     tags: ["home", "personal"],
//     status: "done",
//   },
// ];

export default function TodoList() {
  const { todos, isLoading } = useGetTodoList();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Spin />
      </div>
    );

  if (!todos.length) {
    return <EmptyTodo />;
  }

  return <TodoTableContainer columns={columns} data={todos} />;
}
