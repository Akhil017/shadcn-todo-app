"use client";

import Spin from "@/components/Spin";
import TodoList from "@/components/TodoList";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Spin />
      </div>
    );
  }

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="w-full max-w-7xl mx-auto pb-8 h-[calc(100vh-90px)] flex flex-col space-y-10 px-8 mt-8">
      <div>
        <TodoList />
      </div>
    </main>
  );
}
