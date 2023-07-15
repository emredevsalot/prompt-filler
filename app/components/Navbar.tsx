import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="py-6 flex justify-between flex-col md:flex-row sticky top-0">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">Prompt Filler</Link>
      </h1>
      <Link href="/prompts">
        <Button>Go to prompts</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
