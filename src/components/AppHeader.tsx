"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";
import { useTheme } from "next-themes";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

export default function AppHeader() {
  const { theme } = useTheme();

  const session = useSession();
  console.log({ session });

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
          <Button variant="ghost" size="icon" onClick={() => signOut()}>
            <ExitIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          </Button>
        </div>
      </div>
    </header>
  );
}
