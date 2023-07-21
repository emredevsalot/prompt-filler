import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="sticky py-6 top-0 z-10">
      <div className="max-w-7xl sm:px-16 px-6 flex items-center justify-between mx-auto flex-col md:flex-row">
        <h1 className="text-3xl font-bold grid place-content-center mb-2 md:mb-0">
          <Link href="/">Prompt Filler</Link>
        </h1>
        <Link href="/prompts">
          <Button>Go to prompts</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
