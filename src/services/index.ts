import { AddTodoPayload } from "@/components/todoTable/TodoAddDialog";
import { getSession } from "next-auth/react";
import axios from "axios";
import { redirect } from "next/navigation";

export const todoServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

todoServer.interceptors.request.use(async function (config) {
  const session = await getSession();
  config.headers.Authorization = `Bearer ${session?.user?.accessToken}`;
  return config;
});

todoServer.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.staus === 401) {
      redirect("/api/auth/signin");
    }
  }
);

export async function getTodoList() {
  return todoServer.get("/todo").then((res) => res.data);
}

export async function addTodo(url: string, arg: AddTodoPayload) {
  return await todoServer.post(url, arg).then((res) => res.data);
}

export async function updateTodo(url: string, arg: AddTodoPayload) {
  return await todoServer.put(`${url}/${arg._id}`, arg).then((res) => res.data);
}

export async function deleteTodo(url: string, arg: { _id: string }) {
  return await todoServer.delete(`${url}/${arg._id}`).then((res) => res.data);
}
