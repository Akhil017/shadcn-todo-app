"use client";

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { TodoTableHeader } from "./TodoTableHeader";
import { TodoTableRowActions } from "./TodoTableRowActions";
import { priorities, statuses } from "./data/Data";
import { TodoType } from "./data/schema";

export const columns: ColumnDef<TodoType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <TodoTableHeader column={column} title="" />,
    cell: ({ row }) => <div className="w-10">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "todo",
    header: ({ column }) => <TodoTableHeader column={column} title="Todo" />,
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);
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
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className={cn("flex w-[100px] items-center")}>
          {status.icon && (
            <status.icon
              className={cn("mr-2 h-4 w-4 text-muted-foreground", status.color)}
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
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

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
    cell: ({ row }) => <TodoTableRowActions row={row} />,
  },
];
