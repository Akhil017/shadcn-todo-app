"use client";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
    class: "text-blue-600 border-blue-600",
  },

  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
    class: "text-green-600 border-green-600",
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];
