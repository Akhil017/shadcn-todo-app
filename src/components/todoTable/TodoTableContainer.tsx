"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { TodoTableToolbar } from "./TodoTableToolabr";
import { TodoTablePagination } from "./TodoTablePagination";
import { TodoTableCard } from "./TodoTableCard";
import { TodoTable } from "./TodoTable";
import { cn } from "@/lib/utils";

interface TodoTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function TodoTableContainer<TData, TValue>({
  columns,
  data,
}: TodoTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isCardView, setIsCardView] = React.useState(true);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const renderTableBody = () => {
    if (!table.getRowModel().rows?.length) {
      return (
        <TableBody>
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      );
    } else if (isCardView) {
      return <TodoTableCard table={table} />;
    } else {
      return <TodoTable table={table} />;
    }
  };

  return (
    <div className="space-y-4">
      <TodoTableToolbar
        table={table}
        setIsCardView={setIsCardView}
        isCardView={isCardView}
      />
      <div className={cn("rounded-md ", { border: !isCardView })}>
        <Table>{renderTableBody()}</Table>
      </div>
      <TodoTablePagination table={table} />
    </div>
  );
}
