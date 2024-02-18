"use client";

import { cn, getPriority, getStatus } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import TodoItemActions from "./TodoItemActions";
import { TodoTableHeader } from "./TodoTableHeader";
import { TodoType, todoSchema } from "./data/schema";

export const columns: ColumnDef<TodoType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <TodoTableHeader column={column} title="" />,
    cell: ({ row }) => <div className="w-10">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "todo",
    header: ({ column }) => <TodoTableHeader column={column} title="Todo" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("todo")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <TodoTableHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = getStatus(row.getValue("status"));

      if (!status) {
        return null;
      }

      return (
        <div className={cn("flex w-[100px] items-center")}>
          {status.icon && (
            <status.icon
              className={cn(`mr-2 h-4 w-4 text-muted-foreground`, status.class)}
            />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <TodoTableHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = getPriority(row.getValue("priority"));

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <TodoItemActions data={todoSchema.parse(row.original)} />;
    },
  },
];
