"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  useTheme
} from "next-themes";

export default function Home() {
  useTheme("dark")
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="text-slate-600 text-4xl ">Hello</div>
      <Button className="">
        <Link href="/dashboard">Main Page</Link>
      </Button>
    </main>
  );
}
