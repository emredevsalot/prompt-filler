import { Metadata } from "next";
import Link from "next/link";

import prompts from "@/lib/prompts";
import Button from "@/app/components/Button";

export const metadata: Metadata = {
  title: "Prompts Page",
  description: "...",
};

const Category = {
  Project: "Project", //1000+
  Resume: "Resume", //2000+
  Interview: "Interview", //3000+
  Misc: "Misc", //9000+
};
const categoryValues = Object.values(Category);

const getCategoryItems = (categoryName: string) => {
  return prompts.filter((prompt) => prompt.category === categoryName);
};

const PromptsPage = () => {
  const content = (
    <section className="my-2">
      {categoryValues.map((category) => (
        <div>
          <div className="text-3xl py-2">{category}</div>
          {getCategoryItems(category).map((prompt) => (
            <div className="inline-block pr-4 pb-4" key={prompt.slug}>
              <Link href={`/prompts/${prompt.slug}`}>
                <Button>{prompt.name}</Button>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </section>
  );

  return content;
};

export default PromptsPage;
