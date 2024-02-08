"use client";

import { AddTodoInput } from "@/components/AddTodoInput";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto pb-8 h-[calc(100vh-80px)] flex flex-col space-y-10 px-8">
      <div>
        <TodoList />
      </div>
    </main>
  );
}
