"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, getPriority, getStatus } from "@/lib/utils";
import { ClockIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { Badge } from "../ui/badge";
import TodoItemActions from "./TodoItemActions";
import { TodoType } from "./data/schema";

type TodoCardItemProps = {
  data: TodoType;
};

const badgeClass: Record<string, string> = {
  done: "bg-green-100 border-green-400 text-green-600",
  todo: "bg-blue-100 border-blue-400 text-blue-600",
};

export function TodoCardItem({ data }: TodoCardItemProps) {
  const priority = getPriority(data.priority);
  const status = getStatus(data.status);

  return (
    <>
      <Card className="w-full">
        <div className="flex items-center justify-between pl-6 pr-4 pt-2 mb-4">
          <Badge
            variant="outline"
            className={cn(`border font-normal h-5`, status?.class)}
          >
            {status?.label}
          </Badge>
          <TodoItemActions data={data} />
        </div>
        <CardHeader className="pt-0">
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
    </>
  );
}
