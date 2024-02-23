import { z } from "zod";

export const todoSchema = z.object({
  _id: z.string(),
  todo: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  status: z.enum(["todo", "done"]),
  createdAt: z.string(),
});

export type TodoType = z.infer<typeof todoSchema>;
export type PriorityType = TodoType["priority"];
export type StatusType = TodoType["status"];
