"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TodoTableFilter } from "./TodoTableFilter";
import { priorities, statuses } from "./data/Data";
import { TodoTableViewOptions } from "./TodoTableViewOptions";

interface TodoTableToolbarProps<TData> {
  table: Table<TData>;
}

export function TodoTableToolbar<TData>({
  table,
}: TodoTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("todo")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("todo")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <TodoTableFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <TodoTableFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <TodoTableViewOptions table={table} />
    </div>
  );
}
