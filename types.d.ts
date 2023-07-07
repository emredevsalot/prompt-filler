const Category = {
  Project: "Project", //1000+
  Resume: "Resume", //2000+
  Misc: "Misc", //9999
} as const;
type CategoryType = (typeof Category)[keyof typeof Category];

type PromptType = {
  id: number;
  name: string;
  creditName?: string;
  creditUrl?: string;
  category: CategoryType;
  pretext?: string;
  fields: FieldType[];
};

type FieldType = {
  name: string;
  type: string;
  before?: string;
  placeholder?: string;
  after?: string;
  options?: { value: string; label: string }[];
};
