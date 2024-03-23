"use client";

import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { UserNav } from "./UserNav";

export default function AppHeader() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-8 py-2">
        <Image
          src={theme === "light" ? logoLight : logoDark}
          alt="aks todo"
          width={40}
          height={40}
        />
        <div className="flex gap-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
