import Link from "next/link";
import Button from "./components/Button";

const Home = () => {
  const features = [
    {
      emoji: "⚡️",
      title: "Streamlined Prompt Generation",
      description: "Effortlessly generate prompts with ease.",
    },
    {
      emoji: "🌟",
      title: "User-Friendly Interface",
      description: "Intuitive and easy-to-use interface.",
    },
    {
      emoji: "🗂️",
      title: "Versatile Prompt Categories",
      description: "Wide range of prompt categories.",
    },
    {
      emoji: "⏱️",
      title: "Time-Saving Efficiency",
      description: "Boost productivity and save time.",
    },
    {
      emoji: "🎨",
      title: "Enhanced Creativity",
      description: "Unleash your creativity and imagination.",
    },
  ];

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
          <div className="flex items-center justify-center">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=emredevsalot&repo=prompt-filler&type=star&count=true&size=large"
              width="110"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <div className="my-8">
        <h2 className="text-2xl text-center font-semibold mb-4">Features</h2>
        <div className="flex flex-wrap justify-center w-full">
          {features.map((feature, index) => (
            <div key={index} className="w-full p-6 border sm:w-1/2 lg:w-1/3">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">{feature.emoji}</span>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
