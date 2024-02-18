import { AddTodoPayload } from "@/components/todoTable/TodoAddDialog";
import { API_BASE_URL } from "@/config";
import axios from "axios";

const todoServer = axios.create({
  baseURL: API_BASE_URL,
});

export async function getTodoList(url: string) {
  console.log({ url });
  return todoServer.get("/todo").then((res) => res.data);
}

export async function addTodo(url: string, arg: AddTodoPayload) {
  console.log({ url, arg });
  return await todoServer.post(url, arg).then((res) => res.data);
}

export async function updateTodo(url: string, arg: AddTodoPayload) {
  console.log({ url, arg });
  return await todoServer.put(`${url}/${arg._id}`, arg).then((res) => res.data);
}

export async function deleteTodo(url: string, arg: { _id: string }) {
  console.log({ url, arg });
  return await todoServer.delete(`${url}/${arg._id}`).then((res) => res.data);
}
