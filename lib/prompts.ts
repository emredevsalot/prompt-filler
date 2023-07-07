// "type" to enum
// add select to have option to add non-existing option

import slugify from "slugify";

const prompts: PromptType[] = [
  // START_CATEGORY_Project
  {
    id: 1001,
    name: "Readme creator for your project",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Project",
    pretext:
      "I want you to act as a README.md file generator. I will give you information about my project and you will generate README.md file accordingly.\n\n",
    fields: [
      {
        name: "My main goal with this project is",
        type: "text",
        before: "My main goal with this project is",
        placeholder: "to show my skills as a frontend developer to employers.",
        after: "\n\n",
      },
      {
        name: "The sections I want you to create are",
        type: "multiselect",
        before: "The sections I want you to create are",
        after: "\n\n",
        options: [
          {
            value: "[Why I Created This Project?]",
            label: "[Why I Created This Project?]",
          },
          { value: "[Technologies Used]", label: "[Technologies Used]" },
          { value: "[Quickstart]", label: "[Quickstart]" },
          { value: "[Lessons Learned]", label: "[Lessons Learned]" },
          { value: "[Roadmap]", label: "[Roadmap]" },
        ],
      },
      {
        name: "Information about my project",
        type: "textarea",
        placeholder: "<Project Information>",
        before: "Here's the information about my project:\n",
      },
    ],
  },
  // END_CATEGORY_Project
  // START_CATEGORY_Resume
  {
    id: 2001,
    name: "Bullet points for work experience",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Resume",
    pretext:
      "I want to write bullet points about my work experience to include in my resume.\n\nEach bullet point's structure should be 'Problem, Action and Result', and each of them should start with action verb in the beginning.\n\nHere's my work experience",
    fields: [
      {
        name: "Workplace",
        type: "text",
        before: "at",
      },
      {
        name: "Role",
        type: "text",
        before: "as a",
      },
      {
        name: "Work Experience",
        type: "textarea",
        before: '\n\n"',
        after: '"',
      },
    ],
  },
  {
    id: 2002,
    name: "Generate a summary for resume",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Resume",
    pretext: "Generate a summary section for my resume.",
    fields: [
      {
        name: "Job title",
        type: "text",
        before: "I want to apply for",
        placeholder: "Frontend developer",
        after:
          "jobs, so please generate it emphasizing on why I'm a good fit for the role.\n\n",
      },
      {
        name: "Information",
        type: "textarea",
        before:
          "Here's my relevant information such as skills, work experience, projects, education etc.;\n\n",
        placeholder: "Skills, work experience, projects, education etc.",
        after: "",
      },
    ],
  },
  // END_CATEGORY_Resume
  // START_CATEGORY_Misc
  {
    id: 9001,
    name: "Fields Example",
    category: "Misc",
    pretext: "This is the pretext",
    fields: [
      {
        name: "textarea",
        type: "textarea",
        before: "[textarea_b]",
        after: "[textarea_a]",
      },
      { name: "text1", type: "text", before: "[text_b1]", after: "[text_a1]" },
      { name: "text2", type: "text", before: "[text_b2]" },
      { name: "text3", type: "text", after: "[text_a3]" },
      { name: "text4", type: "text" },
      {
        name: "select1",
        type: "select",
        before: "select_b1",
        after: "select_a1",
        options: [
          { value: "one", label: "one" },
          { value: "two", label: "two" },
          { value: "three", label: "three" },
        ],
      },
      {
        name: "select2",
        type: "multiselect",
        before: "multiselect_b2",
        after: "multiselect_a2",
        options: [
          { value: "one", label: "one" },
          { value: "two", label: "two" },
          { value: "three", label: "three" },
        ],
      },
    ],
  },
  // END_CATEGORY_Misc
];

// Add slugs dynamically

// Create a cache object to store the slug values
const slugCache: { [slug: string]: boolean } = {};

// Function to generate a unique slug
function generateUniqueSlug(name: string): string {
  let slug = slugify(name, {
    lower: true,
    strict: true,
  });

  let count = 1;
  let uniqueSlug = slug;
  while (slugCache[uniqueSlug]) {
    uniqueSlug = `${slug}-${count}`;
    count++;
  }

  slugCache[uniqueSlug] = true; // Mark slug as used
  return uniqueSlug;
}

// Generate the unique slugs for each object in the array
const promptsWithSlug = prompts.map((prompt) => {
  const slug = generateUniqueSlug(prompt.name);
  return {
    ...prompt,
    slug,
  };
});

export default promptsWithSlug;
