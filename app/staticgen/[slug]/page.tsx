import promptsWithSlug from "@/lib/prompts";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return promptsWithSlug.map((prompt) => ({
    slug: prompt.slug,
  }));
}

const Page = ({ params }: any) => {
  const { slug } = params;
  return <div>{slug}</div>;
};

export default Page;
