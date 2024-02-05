import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export function AddTodoInput() {
  return (
    <div className="max-w-md w-full mx-auto flex gap-4">
      <Input type="email" placeholder="Email" />
      <Button variant="default">Add Todo</Button>
    </div>
  );
}
