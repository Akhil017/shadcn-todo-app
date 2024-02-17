"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircledIcon,
  ClockIcon,
  DotsHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TodoType } from "./data/schema";
import dayjs from "dayjs";
import { cn, getPriority, getStatus } from "@/lib/utils";

type TodoCardItemProps = {
  data: TodoType;
};

export function TodoCardItem({ data }: TodoCardItemProps) {
  const priority = getPriority(data.priority);
  const status = getStatus(data.status);

  return (
    <Card className="w-full">
      <div className="flex justify-end pr-4 pt-2">
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
      </div>
      <CardHeader className="pt-0">
        <div className="mb-2">
          <Badge
            variant="outline"
            className={cn(
              `border border-${status?.color} text-${status?.color}`
            )}
          >
            {status?.label}
          </Badge>
        </div>
        <CardTitle>{data.todo}</CardTitle>
      </CardHeader>
      <CardFooter className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-2">
          {priority?.icon ? <priority.icon /> : null}
          <span>{priority?.label}</span>
        </div>
        <div className="flex items-center justify-start space-x-2">
          <ClockIcon />{" "}
          <span className="text-foreground">
            {dayjs(data.createdAt).format("DD MMM")}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
