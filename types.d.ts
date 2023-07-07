const Category = {
  Project: "Project",
  Resume: "Resume",
  Misc: "Misc",
} as const;
type CategoryType = (typeof Category)[keyof typeof Category];

type PromptType = {
  name: string;
  creditName?: string;
  creditUrl?: string;
  category: CategoryType;
  pretext?: string;
  fields: FieldType[];
  //slug: string; (added dynamically)
};

type FieldType = {
  name: string;
  type: string;
  before?: string;
  placeholder?: string;
  after?: string;
  options?: { value: string; label: string }[];
};
