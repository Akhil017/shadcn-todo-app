import { AddTodoInput } from "@/components/AddTodoInput";
import { CustomButtons } from "@/components/CustomButton";
import TodoList from "@/components/TodoList";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto pb-8 min-h-screen flex flex-col space-y-10 px-8">
      <AddTodoInput />
      <div>
        <TodoList />
      </div>
    </main>
  );
}
