import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "./button";

const Navbar = () => {
  return (
    <nav className="sticky py-6 top-0 z-10 bg-background">
      <div className="container flex items-center justify-between flex-col md:flex-row">
        <h1 className="text-3xl font-bold mb-2 md:mb-0">
          {process.env.NODE_ENV === "production" ? (
            <Link href="https://emredevsalot.github.io/prompt-filler/">
              Prompt Filler
            </Link>
          ) : (
            <Link href="/">Prompt Filler</Link>
          )}
        </h1>
        <div className="flex items-center gap-4">
          <Link href="/prompts">
            <Button variant={"outline"}>Go to prompts</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
