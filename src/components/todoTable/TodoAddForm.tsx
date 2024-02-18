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

export type AddTodoFormValue = z.infer<typeof profileFormSchema>;

export function TodoAddForm() {
  const { trigger } = useAddTodo();

  const form = useForm<AddTodoFormValue>({
    defaultValues: { priority: "high" },
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  function onSubmit(data: AddTodoFormValue) {
    trigger(data);
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
                  {/* <div>
                    <RadioGroupItem
                      value="high"
                      id="high"
                      className="peer sr-only"
                      aria-label="High"
                    />
                    <Label
                      htmlFor="high"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      High
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="medium"
                      id="medium"
                      className="peer sr-only"
                      aria-label="Medium"
                    />
                    <Label
                      htmlFor="medium"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Medium
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="low"
                      id="low"
                      className="peer sr-only"
                      aria-label="Low"
                    />
                    <Label
                      htmlFor="low"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Low
                    </Label>
                  </div> */}
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

{
  /* <RadioGroup
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
                        htmlFor="high"
                        className="flex items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        {priorityItem.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup> */
}
