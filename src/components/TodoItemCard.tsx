import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
      <CardHeader>
        <CardTitle className="text-sm">{data.todo}</CardTitle>
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
