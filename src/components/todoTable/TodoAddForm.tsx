"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

const profileFormSchema = z.object({
  todo: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  priority: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function TodoAddForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
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
                  className="flex flex-row space-x-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md px-4 py-2.5 flex-1 hover:bg-muted">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">high</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md px-4 py-2.5 flex-1 hover:bg-muted">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">medium</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md px-4 py-2.5 flex-1 hover:bg-muted    ">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">low</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="pop">
          Add Todo
        </Button>
      </form>
    </Form>
  );
}
