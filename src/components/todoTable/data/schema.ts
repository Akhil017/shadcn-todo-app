import { z } from "zod";

export const todoSchema = z.object({
  _id: z.number(),
  todo: z.string(),
  priority: z.string(),
  status: z.string(),
  createdAt: z.number(),
});

export type TodoType = z.infer<typeof todoSchema>;
