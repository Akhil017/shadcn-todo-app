"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { TodoAddForm } from "./TodoAddForm";

export function TodoAddDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="ml-auto h-[30px] flex">
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
