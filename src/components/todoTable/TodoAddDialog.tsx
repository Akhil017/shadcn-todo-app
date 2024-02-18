"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddTodo } from "@/hooks/useTodo";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { priorities } from "./data/Data";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type TodoAddDialogProps = {
  showAddTodo: boolean;
  setShowAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
};

const addTodoSchema = z.object({
  todo: z
    .string()
    .min(2, {
      message: "Todo  must be at least 2 characters.",
    })
    .max(100, {
      message: "Username must not be longer than 50 characters.",
    }),
  priority: z.string(),
});

type AddTodoFormValue = z.infer<typeof addTodoSchema>;

export type AddTodoPayload = Partial<AddTodoFormValue> & {
  _id?: string;
};

export function TodoAddDialog({
  showAddTodo,
  setShowAddTodo,
}: TodoAddDialogProps) {
  const { trigger } = useAddTodo();

  const form = useForm<AddTodoFormValue>({
    defaultValues: { priority: "high" },
    resolver: zodResolver(addTodoSchema),
    mode: "onChange",
  });

  function onSubmit(data: AddTodoFormValue) {
    trigger(data, {
      onSuccess: () => {
        setShowAddTodo(false);
        toast.success("Todo has been created");
      },
    });
  }

  return (
    <Dialog open={showAddTodo} onOpenChange={setShowAddTodo}>
      {/* <DialogTrigger asChild>
        <Button size="sm" className="ml-auto h-[30px] flex">
          <PlusIcon className="mr-2 font-bold h-4 w-4" /> Todo
        </Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Todo</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="todo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Todo</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-3 gap-4"
                    >
                      {priorities.map((priorityItem) => (
                        <div key={priorityItem.value}>
                          <RadioGroupItem
                            value={priorityItem.value}
                            id={priorityItem.value}
                            className="peer sr-only"
                            aria-label={priorityItem.label}
                          />
                          <Label
                            htmlFor={priorityItem.value}
                            className="flex items-center justify-start gap-2 rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <priorityItem.icon />
                            {priorityItem.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add Todo</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
