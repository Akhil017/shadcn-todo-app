"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CheckCircledIcon,
  DotsHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { todoSchema } from "./data/schema";

interface TodoTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function TodoTableRowActions<TData>({
  row,
}: TodoTableRowActionsProps<TData>) {
  const task = todoSchema.parse(row.original);

  return (
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
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem className="flex space-x-2 items-center justify-start">
          <Pencil1Icon className="text-gray-500" />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex space-x-2 items-center justify-start">
          <CheckCircledIcon className="text-green-600" />
          <span>Mark as Done</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex space-x-2 items-center justify-start">
          <TrashIcon className="text-red-500 w-4 h-4" />
          <span className="text-red-500">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
