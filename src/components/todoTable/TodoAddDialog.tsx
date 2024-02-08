import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";
import { TodoAddForm } from "./TodoAddForm";

export function TodoAddDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="pop" size="sm" className="ml-auto h-[30px] flex">
          <PlusIcon className="mr-2 font-bold h-4 w-4" /> Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Todo</DialogTitle>
        </DialogHeader>
        <TodoAddForm />
      </DialogContent>
    </Dialog>
  );
}
