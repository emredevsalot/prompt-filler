const Category = {
  Project: "Project", //1000+
  Resume: "Resume", //2000+
  Interview: "Interview", //3000+
  Coding: "Coding", //4000+
  Misc: "Misc", //9000+
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
  slug?: string; //(added dynamically)
};

type FieldType = {
  id?: string;
  name: string;
  type: string;
  before?: string;
  placeholder?: string;
  after?: string;
  options?: { value: string; label: string }[];
};
