# Contributing to PromptFiller

We appreciate your interest in contributing to this project! Your contributions will help users save time, overcome writer's block, and confidently communicate their ideas with ease.

To ensure a smooth and organized contribution process, please follow the guidelines below:

## Getting Started

To contribute to PromptFiller, you'll need to have Node.js installed on your system. Once you have Node.js set up, follow these steps:

1. Fork the "PromptFiller" repository to your GitHub account.
2. Clone the forked repository to your local machine using

```console
git clone https://github.com/<your-github-username>/prompt-filler.git
```

3. Install project dependencies by running

```console
npm install
```

4. Create a new branch for your contribution.
5. You're now ready to add new prompts to the app!

## Adding Prompts

"PromptFiller" allows users to add new prompts across various categories. To create a new prompt, follow these steps:

1. Navigate to the `lib/prompts.ts` file in the repository.
2. Create a new prompt using the `PromptType`:

```typescript
type PromptType = {
  id: number;
  name: string;
  creditName?: string;
  creditUrl?: string;
  category: CategoryType;
  pretext?: string;
  fields: FieldType[];
  slug?: string;
};
```

- **id**: A unique numerical ID for the prompt.
  - Each category has a starting number(see `types.d.ts`), add your prompt after the last prompt in the corresponding category with the next id number.(eg. If the last prompt in the `Project` category has the id **1015**, your prompt in the same category will be below it and have id **1016**.)
  - Ids are not being used actively right now, just in case we need it in the future.
- **name**: The name of the prompt.
- **creditName** (optional): Your name or the author's name for the prompt.
- **creditUrl** (optional): A URL to the author's profile or GitHub repository.
- **category**: The category of the prompt. You can see the categories in the `types.d.ts` file.
- **pretext** (optional): Any additional context or information you want to provide before the prompt fields.
- **fields**: An array of `FieldType` objects, defining the fields for the prompt. You can find the field type down below.
- **slug** (optional): It's added dynamically, you don't have to add it.

```typescript
type FieldType = {
  id?: string;
  name: string;
  type: string;
  before?: string;
  placeholder?: string;
  after?: string;
  options?: { value: string; label: string }[];
};
```

- **id** (optional): Used only if it is a field to save to local storage for reusability. (See at the top of the `lib/prompts.ts` file. You can use predefined fields in your prompt.(`"projectInformationField", "resumeField", "jobDescriptionField", "codeSnippetField"`))
- **name**: The name of the field.
- **type**: The type of field. Choose from "text", "textarea", "select" or "multiselect".
- **before** (optional): Text to display before the user input for the field.
- **placeholder** (optional): Placeholder text for the user input.
- **after** (optional): Text to display after the user input for the field.
- **options** (optional, for "multiselect" type only): An array of objects representing the selectable options and their labels.
- **You can see the example with fields in `lib/prompts.ts` "Fields Example" prompt(Search for name or 9001).**

3. Save your changes to `lib/prompts.ts`.

## Submitting Your Contribution

Once you have added a new prompt or made any other improvements, it's time to submit your contribution:

- Commit your changes using descriptive commit messages.
  - `add <id>: "<prompt_name>"`
  - Example: `add 4006: "Comment for my code"`
- Push your changes to your forked repository.
- Create a pull request (PR) from your fork to the main "PromptFiller" repository.
- In the PR description, provide a brief overview of your changes and the purpose of the new prompt.
- Submit the pull request.
- Your contribution will be reviewed by the maintainers, and any necessary feedback will be provided. Once approved, your prompt will be added to the app, and you will be credited as the author.
