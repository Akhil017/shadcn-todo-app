// import { useGetTodoList } from "@/hooks/useTodo";

import { TodoTableContainer } from "./todoTable/TodoTableContainer";
// import Spin from "./Spin";
import { getTodoList } from "@/services";

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

export default async function TodoList() {
  const todos = await getTodoList();

  // if (isLoading)
  //   return (
  //     <div className="flex items-center justify-center h-[80vh]">
  //       <Spin />
  //     </div>
  //   );

  // return <p>Todo list</p>;

  return <TodoTableContainer data={todos} />;
}
