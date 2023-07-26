import Link from "next/link";
import Button from "./components/Button";

const Home = () => {
  const features = [
    {
      emoji: "💾",
      title: "Save Reusable Fields",
      description:
        "Efficiently store and retrieve reusable fields in local storage.",
    },
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
      <section className="my-12 px-4 text-center lg:my-32">
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
      {/* HOW IT WORKS SECTION */}
      <section className="my-14 text-center flex flex-col">
        <h2 className=" font-semibold mb-4">How It Works?</h2>
        <dl className="mt-10 max-w-xl space-y-6 flex flex-col self-center">
          <div>
            <dt className="inline font-semibold">1) Select Your Prompt: </dt>
            <dd className="inline">
              Select any prompt from <Link href={"/prompts"}>prompts</Link>{" "}
              page.
            </dd>
          </div>
          <div>
            <dt className="inline font-semibold">2) Fill in the Fields: </dt>
            <dd className="inline">
              Once you've selected a prompt, personalize it by filling the
              fields according to your needs.
            </dd>
          </div>
          <div>
            <dt className="inline font-semibold">3) Copy and Use: </dt>
            <dd className="inline">
              With your prompt fully customized, it's now time to put it to use.
              Simply copy the finalized prompt to your clipboard, and you're all
              set!
            </dd>
          </div>
        </dl>
      </section>
      {/* HOW TO CONTRIBUTE SECTION */}
      <section className="my-14 text-center flex flex-col">
        <h2 className=" font-semibold mb-4">How to Contribute?</h2>
        <dl className="mt-10 max-w-xl space-y-6 flex flex-col self-center">
          <div>
            <dt className="inline font-semibold">1) Github: </dt>
            <dd className="inline">
              You can add or enhance prompts through Github. Check{" "}
              <Link
                href="https://github.com/emredevsalot/prompt-filler/blob/master/CONTRIBUTING.md"
                target="_blank"
              >
                CONTRIBUTING.md
              </Link>
            </dd>
          </div>
          <div>
            <dt className="inline font-semibold">2) E-mail: </dt>
            <dd className="inline">
              If you don't use Github, you can{" "}
              <Link href="mailto:emredevsalot@gmail.com" target="_blank">
                send an e-mail to emredevsalot@gmail.com
              </Link>{" "}
              to propose new prompts or give feedback.
            </dd>
          </div>
          <div>
            <dt className="inline font-semibold">3) Spread the Word: </dt>
            <dd className="inline">
              If you find "PromptFiller" useful and believe in its potential,
              share it with your friends, colleagues, and on social media. By
              spreading the word, you contribute to a larger user base and
              foster a thriving community around the app.
            </dd>
          </div>
        </dl>
      </section>
      {/* FEATURES SECTION */}
      <section className="my-14">
        <h2 className="text-center mb-4">Features</h2>
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
      </section>
    </>
  );
};

export default Home;
