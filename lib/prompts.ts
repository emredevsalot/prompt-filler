// "type" to enum
// add select to have option to add non-existing option

const prompts: PromptType[] = [
  {
    id: 1001,
    name: "Readme creator for your project",
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
    name: "Bullet points for work experience",
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
    id: 9999,
    name: "Fields",
    category: "Misc",
    pretext: "This is the pretext",
    fields: [
      {
        name: "textarea",
        type: "textarea",
        before: "[area_b]",
        after: "[area_a]",
      },
      { name: "text1", type: "text", before: "[b1]", after: "[a1]" },
      { name: "text2", type: "text", before: "[b2]", after: "" },
      { name: "text3", type: "text", before: "[b3]", after: "[a3]" },
      {
        name: "select1",
        type: "select",
        before: "b_select1",
        after: "a_select1",
        options: [
          { value: "one", label: "one" },
          { value: "two", label: "two" },
          { value: "three", label: "three" },
        ],
      },
      {
        name: "select2",
        type: "multiselect",
        before: "b_select2",
        after: "a_select2",
        options: [
          { value: "one", label: "one" },
          { value: "two", label: "two" },
          { value: "three", label: "three" },
        ],
      },
    ],
  },
];

export default prompts;
