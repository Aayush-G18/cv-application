"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="text-slate-600 text-4xl ">Hello</div>
      <Button >
        <Link href="/dashboard">Main Page</Link>
      </Button>
    </main>
  );
}
