import promptsWithSlug from "@/lib/prompts";
import PromptPageContent from "./PromptPageContent";
import { Metadata } from "next";

type Params = {
  params: { slug: string };
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return promptsWithSlug.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = params;
  const prompt = promptsWithSlug.find((p) => p.slug === slug);

  // Metadata for not found page
  if (!prompt) {
    return {
      title: "Prompt Filler",
    };
  }

  return {
    title: prompt?.name + " prompt for ChatGPT",
    description: `This is the page of prompt ${prompt?.name}. Easily fill the prompt and copy to use in ChatGPT.`,
  };
}

const PromptPage = ({ params }: Params) => {
  const { slug } = params;
  const prompt = promptsWithSlug.find((p) => p.slug === slug);

  if (!prompt) return;

  return <PromptPageContent {...prompt} />;
};

export default PromptPage;
