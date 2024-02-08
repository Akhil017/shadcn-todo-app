import { z } from "zod";

export const todoSchema = z.object({
  id: z.number(),
  todo: z.string(),
  createdat: z.number(),
  tags: z.array(z.string()),
  status: z.string(),
  priority: z.string(),
});

export type TodoType = z.infer<typeof todoSchema>;
