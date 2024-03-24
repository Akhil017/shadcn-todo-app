import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { TodoAddDialog } from "./todoTable/TodoAddDialog";

function PlaceholderCard() {
  return (
    <Card className="w-80 border  shadow-sm">
      <CardContent className="flex items-center justify-between gap-4 p-4">
        <div className="w-10 h-10 bg-secondary rounded-md" />
        <div className="flex flex-col flex-1 justify-between gap-2">
          <div className="h-4 bg-secondary rounded-md" />
          <div className="w-[70%] h-4 bg-secondary/50 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyTodo() {
  const [showAddTodo, setShowAddTodo] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-center h-[70vh]">
        <div className="w-80 relative h-64 flex items-end">
          <div className="absolute z-10 top-0 scale-x-90">
            <PlaceholderCard />
          </div>
          <div className="absolute z-20 top-8 scale-x-95">
            <PlaceholderCard />
          </div>
          <div className="absolute z-30 top-16">
            <PlaceholderCard />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="text-sm">Nothing to display</h3>
            <p className="text-gray-500 text-xs">
              Add a todo to being viewing data
            </p>
            <Button
              size="lg"
              className=" flex mt-4"
              onClick={() => setShowAddTodo(true)}
            >
              <PlusIcon className="mr-2 font-bold h-4 w-4" /> Todo
            </Button>
          </div>
        </div>
      </div>
      <TodoAddDialog
        setShowAddTodo={setShowAddTodo}
        showAddTodo={showAddTodo}
      />
    </>
  );
}

export default EmptyTodo;
