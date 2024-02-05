import { AddTodoInput } from "@/components/AddTodoInput";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto py-8 min-h-screen flex flex-col space-y-10 px-8">
      <AddTodoInput />
      <div>
        <TodoList />
      </div>
    </main>
  );
}
