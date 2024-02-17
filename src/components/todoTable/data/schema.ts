import { z } from "zod";

export const todoSchema = z.object({
  _id: z.string(),
  todo: z.string(),
  priority: z.string(),
  status: z.string(),
  createdAt: z.string(),
});

export type TodoType = z.infer<typeof todoSchema>;
