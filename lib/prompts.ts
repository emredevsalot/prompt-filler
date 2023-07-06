const prompts: PromptType[] = [
  {
    id: 1001,
    category: "resume",
    fields: [
      {
        name: "textarea",
        before: "[area_b]",
        after: "[area_a]",
        type: "textarea",
      },
      { name: "text1", before: "[b1]", after: "[a1]", type: "text" },
      { name: "text2", before: "[b2]", after: "", type: "text" },
      { name: "text3", before: "[b3]", after: "[a3]", type: "text" },
      {
        name: "select1",
        before: "b_select1",
        after: "a_select1",
        type: "select",
        options: [
          { value: "one", label: "one" },
          { value: "two", label: "two" },
          { value: "three", label: "three" },
        ],
      },
      {
        name: "select2",
        before: "b_select2",
        after: "a_select2",
        type: "multiselect",
        options: [
          { value: "one", label: "one" },
          { value: "two", label: "two" },
          { value: "three", label: "three" },
        ],
      },
    ],
  },
  {
    id: 1002,
    category: "resume",
    fields: [
      { name: "text1", before: "[b1]", after: "[a1]", type: "text" },
      { name: "text2", before: "[b2]", after: "", type: "text" },
      { name: "text3", before: "[b3]", after: "[a3]", type: "text" },
    ],
  },
];

export default prompts;
