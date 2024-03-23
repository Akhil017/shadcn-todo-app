"use client";
import { SWRConfig } from "swr";

export default function SWRConsumer({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData: Record<string, any>;
}) {
  return (
    <SWRConfig
      value={{
        fallback: initialData,
      }}
    >
      {children}
    </SWRConfig>
  );
}
