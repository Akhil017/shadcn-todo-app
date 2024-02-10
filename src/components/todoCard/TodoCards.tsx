import React from "react";
import { TodoCardItem } from "./TodoCardItem";
import { TodoType } from "../todoTable/data/schema";

type TodoCardProps = {
  data: TodoType[];
};

export default function TodoCards({ data }: TodoCardProps) {
  if (!data.length) return <p>no data</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.map((todo) => (
        <TodoCardItem key={todo.id} data={todo} />
      ))}
    </div>
  );
}
