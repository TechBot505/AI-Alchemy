"use client";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Bot } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <div className="flex gap-2 items-center">
          <Link href="/">
            <Bot size={40} />
          </Link>
          <span className="font-bold text-lg">AI Alchemy</span>
        </div>
        <div className="flex max-lg:ml-auto space-x-5">
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <ModeToggle />
            <UserButton />
          </Authenticated>
        </div>
      </div>
    </header>
  );
};

export default Header;
