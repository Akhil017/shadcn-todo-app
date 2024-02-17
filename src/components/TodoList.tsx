"use client";

import { useGetTodoList } from "@/hooks/useTodo";
import { columns } from "./todoTable/Columns";
import { TodoTableContainer } from "./todoTable/TodoTableContainer";
import Spin from "./Spin";

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
  console.log({ todos, erfs });

  if (isLoading) return <Spin />;

  return <TodoTableContainer columns={columns} data={todos} />;
}
