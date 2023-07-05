import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-6 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">prompt-project</Link>
      </h1>
    </nav>
  );
};

export default Navbar;
