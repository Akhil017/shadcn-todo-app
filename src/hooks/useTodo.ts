import { AddTodoPayload } from "@/components/todoTable/TodoAddForm";
import { TodoType } from "@/components/todoTable/data/schema";
import { API_BASE_URL } from "@/config";
import { addTodo, deleteTodo, getTodoList, updateTodo } from "@/services";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export const useGetTodoList = () => {
  console.log({ API_BASE_URL });
  const { data, error, isLoading } = useSWR(`/todo`, getTodoList);
  return {
    todos: data,
    isLoading,
    isError: error,
  };
};

export const useAddTodo = () => {
  const { trigger, isMutating, error } = useSWRMutation(
    "/todo",
    (url, { arg }: { arg: AddTodoPayload }) => {
      return addTodo(url, arg);
    },
    {
      revalidate: false,
      populateCache: (newTodo: TodoType, todos: TodoType[] | undefined) => {
        return todos ? [...todos, newTodo] : [newTodo];
      },
    }
  );

  return {
    trigger,
    isMutating,
    isError: error,
  };
};

export const useUpdateTodo = () => {
  const { trigger, isMutating, error } = useSWRMutation(
    "/todo",
    (url, { arg }: { arg: AddTodoPayload }) => {
      return updateTodo(url, arg);
    },
    {
      revalidate: false,
      populateCache: (newTodo: TodoType, todos: TodoType[] | undefined) => {
        const filteredTodos = todos?.filter((todo) => todo._id !== newTodo._id);
        return filteredTodos ? [...filteredTodos, newTodo] : [];
      },
    }
  );

  return {
    trigger,
    isMutating,
    isError: error,
  };
};

export const useDeleteTodo = () => {
  const { trigger, isMutating, error } = useSWRMutation(
    "/todo",
    (url, { arg }: { arg: { _id: string } }) => {
      return deleteTodo(url, arg);
    },
    {
      revalidate: false,
      populateCache: (
        newTodo: { success: boolean; _id: string },
        todos: TodoType[] | undefined
      ) => {
        const filteredTodos = todos?.filter((todo) => todo._id !== newTodo._id);
        return filteredTodos ? [...filteredTodos] : [];
      },
    }
  );

  return {
    trigger,
    isMutating,
    isError: error,
  };
};
