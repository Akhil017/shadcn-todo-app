import { AddTodoFormValue } from "@/components/todoTable/TodoAddForm";
import { TodoType } from "@/components/todoTable/data/schema";
import { API_BASE_URL } from "@/config";
import axios from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { toast } from "sonner";

const todoServer = axios.create({
  baseURL: API_BASE_URL,
});

async function getTodoList(url: string) {
  console.log({ url });
  return todoServer.get("/todo").then((res) => res.data);
}

export const useGetTodoList = () => {
  console.log({ API_BASE_URL });
  const { data, error, isLoading } = useSWR(`/todo`, getTodoList);
  return {
    todos: data,
    isLoading,
    isError: error,
  };
};

async function addTodo(url: string, arg: AddTodoFormValue) {
  console.log({ url, arg });
  return await todoServer.post(url, arg).then((res) => res.data);
}

export const useAddTodo = () => {
  const { trigger, isMutating, error } = useSWRMutation(
    "/todo",
    (url, { arg }: { arg: AddTodoFormValue }) => {
      return addTodo(url, arg);
    },
    {
      revalidate: false,
      populateCache: (newTodo: TodoType, todos: TodoType[] | undefined) => {
        return todos ? [...todos, newTodo] : [newTodo];
      },
      onSuccess: () => {
        toast.success("Todo has been created");
      },
    }
  );

  return {
    trigger,
    isMutating,
    isError: error,
  };
};
