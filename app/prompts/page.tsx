import { Metadata } from "next";
import Link from "next/link";

import prompts from "@/lib/prompts";
import Button from "@/app/components/Button";

export const metadata: Metadata = {
  title: "All Prompts",
  description: `This page includes all the prompts in the "Project", "Resume", "Interview", "Coding", "Misc" categories.`,
};

const Category = {
  Project: "Project", //1000+
  Resume: "Resume", //2000+
  Interview: "Interview", //3000+
  Coding: "Coding", //4000+
  Misc: "Misc", //9000+
};
const categoryValues = Object.values(Category);

const getCategoryItems = (categoryName: string) => {
  return prompts.filter((prompt) => prompt.category === categoryName);
};

const PromptsPage = () => {
  const content = (
    <section className="my-2">
      <h1 className="text-center">All Prompts</h1>
      {categoryValues.map((category) => (
        <div>
          <h2 className="pt-6 pb-2 text-center">{category}</h2>
          <div className="flex flex-wrap justify-center">
            {getCategoryItems(category).map((prompt) => (
              <div className="inline-block pr-4 pb-4" key={prompt.slug}>
                <Link href={`/prompts/${prompt.slug}`}>
                  <Button>{prompt.name}</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );

  return content;
};

export default PromptsPage;
