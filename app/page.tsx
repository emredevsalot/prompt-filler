import Link from "next/link";
import Button from "./components/Button";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-12 px-4 text-center lg:py-32 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Prompt Filler
        </h1>
        <p className="mb-8 text-lg lg:text-xl sm:px-16 xl:px-48">
          Simplify the process of generating and completing prompts for ChatGPT,
          save time and effort in crafting engaging and effective prompts for
          various purposes.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link href="/prompts">
            <Button>Go to prompts</Button>
          </Link>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <section className="py-8 px-4 text-center text-lg lg:text-xl lg:py-16 lg:px-12">
        <p>
          <span className="font-extrabold">
            ⚡️ Streamlined Prompt Generation:{" "}
          </span>
          Effortlessly generate prompts with ease.
        </p>
        <p>
          <span className="font-extrabold">🌟 User-Friendly Interface: </span>
          Intuitive and easy-to-use interface.
        </p>
        <p>
          <span className="font-extrabold">
            🗂️ Versatile Prompt Categories:{" "}
          </span>
          Wide range of prompt categories.
        </p>
        <p>
          <span className="font-extrabold">⏱️ Time-Saving Efficiency: </span>
          Boost productivity and save time.
        </p>
        <p>
          <span className="font-extrabold">🎨 Enhanced Creativity: </span>
          Unleash your creativity and imagination.
        </p>
      </section>
    </>
  );
};

export default Home;
