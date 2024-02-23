import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  CheckCircledIcon,
  CircleIcon,
  DotsHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { TodoType } from "./data/schema";
import { TodoAddDialog } from "./TodoAddDialog";
import { DeleteTodoAlert } from "../DeleteTodoAlert";
import { useUpdateTodo } from "@/hooks/useTodo";
import { toast } from "sonner";

type TodoItemActionsProps = {
  data: TodoType;
};

export default function TodoItemActions({ data }: TodoItemActionsProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showAddTodo, setShowAddTodo] = useState(false);

  const nextStatus = data.status === "todo" ? "done" : "todo";
  const { trigger } = useUpdateTodo();

  const changeTodoStatus = () => {
    const updatePayload = {
      status: nextStatus,
      _id: data?._id,
    };
    trigger(updatePayload, {
      onSuccess: () => {
        setShowAddTodo(false);
        toast.success(`Status changed to ${nextStatus}`);
      },
    });
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[160px]" side="right">
          <DropdownMenuItem
            className="flex space-x-2 items-center justify-start"
            onSelect={() => setShowAddTodo(true)}
          >
            <Pencil1Icon className="text-gray-500" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex space-x-2 items-center justify-start"
            onSelect={changeTodoStatus}
          >
            {data.status === "done" ? (
              <CircleIcon className="text-blue-600" />
            ) : (
              <CheckCircledIcon className="text-green-600" />
            )}
            <span>Mark as {nextStatus}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex space-x-2 items-center justify-start"
            onSelect={() => setShowDeleteDialog(true)}
          >
            <TrashIcon className="text-red-500 w-4 h-4" />
            <span className="text-red-500">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TodoAddDialog
        isEdit
        setShowAddTodo={setShowAddTodo}
        showAddTodo={showAddTodo}
        initialValue={data}
      />
      <DeleteTodoAlert
        _id={data._id}
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
      />
    </>
  );
}
