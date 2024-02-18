"use client";

import { Table } from "@tanstack/react-table";
import { TodoCardItem } from "./TodoCardItem";
import { TodoType } from "./data/schema";

type TodoTableCardProps<TData> = {
  table: Table<TData>;
};

export function TodoTableCards<TData>({ table }: TodoTableCardProps<TData>) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {table.getRowModel().rows?.length &&
          table
            .getRowModel()
            .rows.map((row) => (
              <TodoCardItem key={row.id} data={row.original as TodoType} />
            ))}
      </div>
    </>
  );
}
