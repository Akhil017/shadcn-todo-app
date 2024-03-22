import { auth } from "@/auth";
import TodoList from "@/components/TodoList";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="w-full max-w-7xl mx-auto pb-8 h-[calc(100vh-80px)] flex flex-col space-y-10 px-8 mt-8">
      <div>
        <TodoList />
      </div>
    </main>
  );
}
