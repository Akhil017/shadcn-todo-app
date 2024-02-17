"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon, TableIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { TodoAddDialog } from "./TodoAddDialog";
import { TodoTableFilter } from "./TodoTableFilter";
import { priorities, statuses } from "./data/Data";

interface TodoTableToolbarProps<TData> {
  table: Table<TData>;
  isCardView: boolean;
  setIsCardView: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TodoTableToolbar<TData>({
  table,
  setIsCardView,
  isCardView,
}: TodoTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter todos..."
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
      <div className="flex space-x-4">
        {/* <TodoTableViewOptions table={table} /> */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsCardView((prevVal) => !prevVal)}
        >
          {!isCardView ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <rect width="20" height="12" x="2" y="6" rx="2" />
            </svg>
          ) : (
            <TableIcon />
          )}
        </Button>
        <TodoAddDialog />
      </div>
    </div>
  );
}
