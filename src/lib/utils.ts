import { priorities, statuses } from "@/components/todoTable/data/Data";
import { PriorityType, StatusType } from "@/components/todoTable/data/schema";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPriority = (findPriority: PriorityType) => {
  return priorities.find((priority) => priority.value === findPriority);
};

export const getStatus = (findStatus: StatusType) => {
  return statuses.find((status) => status.value === findStatus);
};
