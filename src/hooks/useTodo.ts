import { API_BASE_URL } from "@/config";
import useSWR from "swr";

async function fetcher(...args: Parameters<typeof fetch>) {
  return (await fetch(...args)).json();
}

export const useGetTodoList = () => {
  console.log({ API_BASE_URL });
  const { data, error, isLoading } = useSWR(`${API_BASE_URL}/todo`, fetcher);
  return {
    todos: data,
    isLoading,
    isError: error,
  };
};
