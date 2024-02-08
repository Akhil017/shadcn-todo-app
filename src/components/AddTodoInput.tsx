"use client";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export function AddTodoInput() {
  return (
    <div className="max-w-md w-full mx-auto flex gap-4">
      <Input type="text" placeholder="Todo.." />
      <Button variant="pop">Add Todo</Button>
    </div>
  );
}
