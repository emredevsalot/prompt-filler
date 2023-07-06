import { Metadata } from "next";
import Link from "next/link";

import prompts from "@/lib/prompts";
import Button from "@/app/components/Button";

export const metadata: Metadata = {
  title: "Prompts Page",
  description: "...",
};

const PromptsPage = () => {
  const content = (
    <section className="my-2">
      {prompts.map((prompt) => {
        return (
          <>
            <p key={prompt.id}>
              <Link href={`/prompts/${prompt.id}`}>
                <Button>{prompt.name}</Button>
              </Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
};

export default PromptsPage;
