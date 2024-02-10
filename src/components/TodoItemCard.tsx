"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";

type TodoItemType = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type TodoItemCardProps = {
  data: TodoItemType;
};

export function TodoItemCard({ data }: TodoItemCardProps) {
  return (
    <Card className="w-full transform transition duration-300 hover:scale-105">
      <CardHeader className="flex">
        <CardTitle className="text-sm">{data.todo}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <DotsHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mark as unread</DropdownMenuItem>
            <DropdownMenuItem>Star thread</DropdownMenuItem>
            <DropdownMenuItem>Add label</DropdownMenuItem>
            <DropdownMenuItem>Mute thread</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between py-0 pb-4">
        <div>
          {data.completed ? (
            <Badge
              variant="outline"
              className="border border-green-500 bg-green-100 text-green-500 text-[10px]"
            >
              Done
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="border border-orange-500 bg-orange-100 text-orange-500 text-[10px]"
            >
              Pending
            </Badge>
          )}
        </div>
        <Button size="sm" variant="outline">
          Deploy
        </Button>
      </CardFooter>
    </Card>
  );
}
