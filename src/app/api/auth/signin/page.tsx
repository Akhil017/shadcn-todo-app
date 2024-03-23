"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import signInBg from "../../../../../public/signin-bg-2.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/Icons";

function SignIn() {
  return (
    <div className="relative flex items-center justify-center h-[80vh] px-6">
      <div className="absolute -z-10 inset-0">
        <Image
          src={signInBg}
          alt="bg image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <Card className="mx-auto w-full lg:w-[400px]">
        <CardHeader>
          <CardTitle className="text-xl text-center ">
            <div className="flex flex-col items-center justify-center gap-2">
              {`Welcome to Ak's todo list`}
            </div>
          </CardTitle>
          <CardDescription className="text-center">
            Unlock your to-do potential
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button
              variant="outline"
              className="w-full items-center justify-center gap-2 py-5"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <Icons.google className="w-6 h-6" />
              Continue with Google
            </Button>
          </div>
          <div className="grid gap-4 mt-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 py-5"
              onClick={() => signIn("github", { callbackUrl: "/" })}
            >
              <Icons.github className="w-6 h-6 " />
              Continue with GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
