"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { priorities } from "./data/Data";
import { useAddTodo } from "@/hooks/useTodo";
import { toast } from "sonner";

const profileFormSchema = z.object({
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

type AddTodoFormValue = z.infer<typeof profileFormSchema>;

export type AddTodoPayload = Partial<AddTodoFormValue> & {
  _id?: string;
};

type TodoAddFormProps = {
  setShowAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
};

export function TodoAddForm({ setShowAddTodo }: TodoAddFormProps) {
  const { trigger } = useAddTodo();

  const form = useForm<AddTodoFormValue>({
    defaultValues: { priority: "high" },
    resolver: zodResolver(profileFormSchema),
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
  );
}
