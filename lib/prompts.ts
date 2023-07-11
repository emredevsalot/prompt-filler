// add select to have option to add non-existing option

import slugify from "slugify";

const prompts: PromptType[] = [
  // START_CATEGORY_Project
  {
    id: 1001,
    name: "README file for my project",
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
  {
    id: 1002,
    name: "Commit message for task",
    creditName: "awesome-chatgpt-prompts",
    creditUrl:
      "https://github.com/f/awesome-chatgpt-prompts#act-as-a-commit-message-generator",
    category: "Project",
    pretext:
      "I want you to act as a commit message generator. I will provide you with information about the task, and I would like you to generate an appropriate commit message using the conventional commit format. Do not write any explanations or other words, just reply with the commit message.\n\n",
    fields: [
      {
        name: "Information about task",
        type: "textarea",
        before: "Information about task:\n",
        placeholder:
          "I made a Button component to make it more reusable across the app",
      },
    ],
  },
  // END_CATEGORY_Project
  // START_CATEGORY_Resume
  {
    id: 2001,
    name: "Bullet points for my work experience",
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
    name: "Summary for my resume",
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
      },
    ],
  },
  {
    id: 2003,
    name: "Review and enhance my resume",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Resume",
    pretext:
      "I want you to review my resume and answer the questions below, separate the answers with questions, and try to include examples from my resume in a before-after format;\n- What else can I add to stand out?\n- Is my resume Application Tracking System(ATS) friendly? Are there any more keywords that I can add?\n- Are there any other improvements or edits you can make?\n",
    fields: [
      {
        name: "Job title",
        type: "text",
        before: "I want to apply for",
        placeholder: "Frontend developer",
        after: "jobs.",
      },
      {
        name: "Resume",
        type: "textarea",
        before: "Here's my resume;\n\n",
        placeholder: "Paste resume here",
      },
    ],
  },
  {
    id: 2004,
    name: "Cover letter for job application",
    creditName: "tealhq.com",
    creditUrl:
      "https://www.tealhq.com/post/great-chatgpt-prompts-for-your-resume",
    category: "Resume",
    pretext:
      "Create a cover letter for a job application using my resume and the job description below as a reference. The cover letter should be less than 150 words.",
    fields: [
      {
        name: "Resume",
        type: "textarea",
        before: "Here's my resume;\n\n",
        placeholder: "Paste resume here",
        after: "\n\n",
      },
      {
        name: "Job Description",
        type: "textarea",
        before: "Here's the job description;\n\n",
        placeholder: "Paste job description here",
      },
    ],
  },
  // END_CATEGORY_Resume
  // START_CATEGORY_Interview
  {
    id: 3001,
    name: "How to prepare for this job interview",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Interview",
    pretext:
      "I have a job interview. I will provide you the job description below. How can I prepare for this job interview according to the job description?",
    fields: [
      {
        name: "Job Description",
        type: "textarea",
        before: "Here's the job description;\n\n",
        placeholder: "Paste job description here",
      },
    ],
  },
  {
    id: 3002,
    name: "Technical question for this job interview",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Interview",
    pretext:
      "I have a job interview. I will provide you the job description below. Can you generate a technical interview question according to the job description?",
    fields: [
      {
        name: "Job Description",
        type: "textarea",
        before: "Here's the job description;\n\n",
        placeholder: "Paste job description here",
      },
    ],
  },
  {
    id: 3003,
    name: "Act as an interviewer for this job",
    creditName: "awesome-chatgpt-prompts",
    creditUrl:
      "https://github.com/f/awesome-chatgpt-prompts#act-as-position-interviewer",
    category: "Interview",
    pretext:
      "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions",
    fields: [
      {
        name: "Job title",
        type: "text",
        before: "for the",
        placeholder: "Frontend developer",
        after:
          "position. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers.",
      },
      {
        name: "Job Description",
        type: "textarea",
        before: "\nHere's the job description;\n\n",
        placeholder: "Paste job description here",
        after: "\n\nMy first sentence is “Hi”",
      },
    ],
  },
  // END_CATEGORY_Interview
  // START_CATEGORY_Coding
  {
    id: 4001,
    name: "Debug my code",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Coding",
    pretext:
      "I wrote the code below and i am getting an error, how can I debug it?",
    fields: [
      {
        name: "Code",
        type: "textarea",
        before: "Here's the code;\n\n",
        placeholder: "Paste code here",
        after: "\n\n",
      },
      {
        name: "Error",
        type: "textarea",
        before: "Here's the error;\n\n",
        placeholder: "Paste error here",
        after: "",
      },
    ],
  },
  {
    id: 4002,
    name: "Refactor my code",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Coding",
    pretext:
      "I wrote the code below and I want to refactor it to improve code quality, maintainability and reusability. How can I refactor it?",
    fields: [
      {
        name: "Code",
        type: "textarea",
        before: "Here's the code;\n\n",
        placeholder: "Paste code here",
        after: "\n\n",
      },
    ],
  },
  {
    id: 4003,
    name: "Improve variable names of my code",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Coding",
    pretext:
      "I wrote the code below and I want you to improve variable names to be more readable and self-explanatory.",
    fields: [
      {
        name: "Code",
        type: "textarea",
        before: "Here's the code;\n\n",
        placeholder: "Paste code here",
        after: "\n\n",
      },
    ],
  },
  // END_CATEGORY_Coding
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
  {
    id: 9002,
    name: "Enhance the prompt",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Misc",
    pretext:
      "I want you to act as an excellent Prompt Engineer. Your task is to enhance the prompt I provide you. There will be placeholder values in the square brackets. The prompt will be used by you, ChatGPT. Enhance the prompt below and reply with only enhanced version of that prompt;\n\n",
    fields: [
      {
        name: "Prompt",
        type: "textarea",
        before: '"',
        placeholder: "Paste prompt here",
        after: '"',
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
