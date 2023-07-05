type PromptType = {
  id: number;
  category: string;
  fields: FieldType[];
};

type FieldType = {
  name: string;
  before?: string;
  after?: string;
  type: string;
  options?: { value: string; label: string }[];
};
