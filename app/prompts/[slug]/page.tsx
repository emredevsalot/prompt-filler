import promptsWithSlug from "@/lib/prompts";
import PromptPageContent from "./PromptPageContent";

type Params = {
  params: { slug: string };
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return promptsWithSlug.map((prompt) => ({
    slug: prompt.slug,
  }));
}

const PromptPage = ({ params }: Params) => {
  const { slug } = params;
  const prompt = promptsWithSlug.find((p) => p.slug === slug);

  if (!prompt) return;

  return <PromptPageContent {...prompt} />;
};

export default PromptPage;

// export async function generateMetadata({
//   params: { promptSlug },
// }: Params): Promise<Metadata> {
//   const prompt = prompts.find((p) => p.slug === promptSlug);

//   // Metadata for not found page
//   if (!prompt) {
//     return {
//       title: "Prompt not found",
//     };
//   }

//   return {
//     title: prompt?.name,
//     description: `This is the page of prompt ${prompt?.name}.`,
//   };
// }
