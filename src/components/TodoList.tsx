import { TodoItemCard } from "./TodoItemCard";

const TODOS = [
  {
    id: 1,
    todo: "Do something nice for someone",
    completed: true,
    userId: 26,
  },
  { id: 18, todo: "Bake a pie with some friends", completed: false, userId: 1 },
  { id: 19, todo: "Create a compost pile", completed: true, userId: 5 },
  { id: 20, todo: "Take a hike at a local park", completed: true, userId: 43 },
  { id: 28, todo: "Go to the gym", completed: false, userId: 15 },
  { id: 29, todo: "Make own LEGO creation", completed: false, userId: 30 },
  { id: 30, todo: "Take cat on a walk", completed: false, userId: 15 },
];

export default function TodoList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {TODOS.map((todo) => (
        <TodoItemCard key={todo.id} data={todo} />
      ))}
    </div>
  );
}
