import { priorities } from "@/components/todoTable/data/Data";
import { PriorityType } from "@/components/todoTable/data/schema";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPriority = (findPriority: PriorityType) => {
  return priorities.find((priority) => priority.value === findPriority);
};
