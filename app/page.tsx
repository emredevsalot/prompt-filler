import Link from "next/link";
import Button from "./components/Button";

const Home = () => {
  return (
    <>
      <div className="h-24 flex justify-center items-center">
        <Link href="/prompts">
          <Button>Go to prompts</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
