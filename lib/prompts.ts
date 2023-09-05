import slugify from "slugify";

//#region Fields to save to localStorage and their ids
export const localStorageFieldIds = [
  "projectInformation",
  "resume",
  "jobDescription",
  "codeSnippet",
];
const projectInformationField: FieldType = {
  id: "projectInformation",
  name: "Project Information",
  type: "textarea",
  placeholder: "Project Information",
  before: "Here's the information about my project:\n",
};
const resumeField: FieldType = {
  id: "resume",
  name: "Resume",
  type: "textarea",
  before: "Here's my resume;\n\n",
  placeholder: "Paste resume here",
  after: "\n\n",
};
const jobDescriptionField: FieldType = {
  id: "jobDescription",
  name: "Job Description",
  type: "textarea",
  before: "Here's the job description;\n\n",
  placeholder: "Paste job description here",
};
const codeSnippetField: FieldType = {
  id: "codeSnippet",
  name: "Code Snippet",
  type: "textarea",
  before: "Here's the code;\n\n",
  placeholder: "Paste code here",
  after: "\n\n",
};
//#endregion Project

const prompts: PromptType[] = [
  //#region Project
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
      projectInformationField,
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
  {
    id: 1003,
    name: "Architecture for project",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Project",
    pretext:
      "Act as an excellent Fullstack Software Engineer. You should be able to understand and implement application architecture, security, and performance best practices. You should also be able to debug and troubleshoot issues, and be able to write automated tests to ensure the quality of the code. I will give you information about the project I have in mind. You will design the architecture and write the code to bring this app to life.\n\n",
    fields: [
      {
        name: "Technologies I want to use",
        type: "text",
        before: "Technologies I want to use: ",
        placeholder: "React, NextJS, Typescript, Tailwind",
        after: "\n\n",
      },
      projectInformationField,
    ],
  },
  //#endregion Project
  //#region Resume
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
        id: "jobTitle",
        type: "text",
        before: "I want to apply for",
        placeholder: "Frontend developer",
        after:
          "jobs, so please generate it emphasizing on why I'm a good fit for the role.\n\n",
      },
      {
        name: "Information",
        id: "information",
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
      resumeField,
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
    fields: [resumeField, jobDescriptionField],
  },
  {
    id: 2005,
    name: "Job description keywords",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Resume",
    pretext: `Act as an expert Chief Human Resources Officer at a tech company.

You are using an Application Tracking System that filters top 10% job applicants according to the match with their resume and the job description. Your job is to find all the relevant keywords and phrases about the given job description according to the rules below:
Rules:
- Only the keywords and phrases that can be found in a resume.
- Don't include company name.
- Give me only the keywords.
- Format of your response should be a single sentence.(Example: keyword1, keyword2, keyword3, keyword4)\n\n`,
    fields: [jobDescriptionField],
  },
  {
    id: 2006,
    name: "Optimize resume according to job description",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Resume",
    pretext: `Act as an expert at creating ATS-friendly resumes. You will receive keywords and a resume. Your task is to incorporate keywords to the sections, according to the rules below:

- Ensure that the keywords are seamlessly woven into the resume sections while maintaining a handmade and personalized touch, reflecting my unique skills and experiences.
- Exact match is very important.
- Don't put the same keyword more than twice.
- Keep "skills" section as a list separated with commas.
- Show the added keywords as bold text.\n\n`,
    fields: [
      {
        name: "Keywords",
        placeholder: "Keywords used in the job description",
        type: "textarea",
        before: "Keywords:\n\n",
        after: "\n\n",
      },
      resumeField,
    ],
  },
  //#endregion Resume
  //#region Interview
  {
    id: 3001,
    name: "How to prepare for this job interview",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Interview",
    pretext:
      "I have a job interview. I will provide you the job description below. How can I prepare for this job interview according to the job description?",
    fields: [jobDescriptionField],
  },
  {
    id: 3002,
    name: "Technical question for this job interview",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Interview",
    pretext:
      "I have a job interview. I will provide you the job description below. Can you generate a technical interview question according to the job description?",
    fields: [jobDescriptionField],
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
        after: `position.\n\n I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. 
          
        After I give you an answer, you will give review it regarding how clear it is and explain what I could do to improve it using a language compatible with my seniority level. Do not mention that you will review my answer.
          
        Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is “Hi”`,
      },
      jobDescriptionField,
    ],
  },
  //#endregion Interview
  //#region Coding
  {
    id: 4001,
    name: "Debug my code",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Coding",
    pretext:
      "Act as an excellent Fullstack Software Engineer. You should be able to understand and implement application architecture, security, and performance best practices. You should also be able to debug and troubleshoot issues, and be able to write automated tests to ensure the quality of the code. I wrote the code below and I am getting an error, how can I debug it?",
    fields: [
      codeSnippetField,
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
      "Act as an excellent Fullstack Software Engineer. You should be able to understand and implement application architecture, security, and performance best practices. You should also be able to debug and troubleshoot issues, and be able to write automated tests to ensure the quality of the code. I wrote the code below and I want to refactor it to improve code quality, maintainability and reusability. How can I refactor it?",
    fields: [codeSnippetField],
  },
  {
    id: 4003,
    name: "Improve variable names of my code",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Coding",
    pretext:
      "Act as an excellent Fullstack Software Engineer. You should be able to understand and implement application architecture, security, and performance best practices. You should also be able to debug and troubleshoot issues, and be able to write automated tests to ensure the quality of the code. I wrote the code below and I want you to improve variable names to be more readable and self-explanatory.",
    fields: [codeSnippetField],
  },
  {
    id: 4004,
    name: "Generate Tailwind CSS component",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Coding",
    pretext:
      "Act as a proficient Tailwind CSS expert. Your task is to skillfully create efficient and responsive web interfaces using the wide array of Tailwind CSS components. You have the ability to understand the section requirements provided and effectively translate them into a visually appealing reality. Your expertise in Tailwind CSS allows you to craft web sections with precision and finesse. I will give you information about the component I want to create. You will generate that component for me.",
    fields: [
      {
        name: "Component information",
        type: "textarea",
        before: "Here's the component information;\n\n",
        placeholder:
          "I want to create a 'Features' component for my app. Each feature has an emoji, a title and a short description.",
      },
      {
        name: "Rules",
        type: "multiselect",
        before: "\n\nRules:",
        options: [
          {
            value: "\n-Just give the tailwind component to paste",
            label: "Just give the tailwind component to paste",
          },
          {
            value: "\n-Don't include text color or background color",
            label: "Don't include text color or background color",
          },
          {
            value: "\n-Turn <class> into <className>",
            label: "Turn <class> into <className>",
          },
          {
            value:
              "\n-I have a container to wrap the component, so use full width and height",
            label:
              "I have a container to wrap the component, so use full width and height",
          },
        ],
      },
    ],
  },
  {
    id: 4005,
    name: "Explain code snippet or concept to me simply",
    creditName: "Gabriel Mendonca",
    creditUrl: "https://flowgpt.com/prompt/d3tOZt2SUjsPqalk0LpM6",
    category: "Coding",
    pretext: `You are now MetaGPT, your job is to use a creative and intuitive analogy to explain a piece of code to me. Whenever I post a code snippet here or a problem, you will illustrate the problem with a very creative analogy comparing it with real world objects. You can then walk me through how to solve the problem, or how the current code solves the problem, using the elements of your analogy to help with your explanation.

      Don't forget to illustrate your explanations with easily understandable analogies whenever you think it will add value to the explanation. Make sure to teach this stuff as the world's greatest teachers would. Assume the person you are teaching too is not that smart, so like, find an illustrative way to explain it to them.`,
    fields: [
      {
        name: "Code snippet or concept",
        type: "textarea",
        before: "\n\nHere's the thing I want to learn about:\n\n",
        placeholder: "useState hook in React JS",
      },
    ],
  },
  {
    id: 4006,
    name: "Comment for my code",
    creditName: "I hate breakfast",
    creditUrl: "https://flowgpt.com/prompt/-g04TdJ4CRgRleXk2Rx79",
    category: "Coding",
    pretext: `Act as an excellent Fullstack Software Engineer. You should be able to understand and implement application architecture, security, and performance best practices. You should also be able to debug and troubleshoot issues, and be able to write automated tests to ensure the quality of the code.

    I will provide a piece of code. You will attach comments onto the code at the right place when necessary.`,
    fields: [
      {
        name: "Rules",
        type: "multiselect",
        before: "\n\nThe comment should follow the rules below:",
        options: [
          {
            value: "\n-Comments should not duplicate the code.",
            label: "Comments should not duplicate the code.",
          },
          {
            value: "\n-Good comments do not excuse unclear code.",
            label: "Good comments do not excuse unclear code.",
          },
          {
            value:
              "\n-If you can't write a clear comment, point it out to me as [Warning]",
            label:
              "If you can't write a clear comment, point it out to me as [Warning]",
          },
          {
            value: "\n-Only comment on the function level or on complex logic",
            label: "Only comment on the function level or on complex logic",
          },
          {
            value: "\n-Explain unidiomatic code in comments.",
            label: "Explain unidiomatic code in comments.",
          },
          {
            value: "\n-Use comments to mark incomplete implementations.",
            label: "Use comments to mark incomplete implementations.",
          },
          {
            value: "\n-Do not comment on clear code",
            label: "Do not comment on clear code",
          },
        ],
      },
      codeSnippetField,
    ],
  },
  //#endregion Coding
  //#region Misc
  {
    id: 9001,
    name: "Fields Example",
    creditName: "emredevsalot",
    creditUrl: "https://github.com/emredevsalot",
    category: "Misc",
    pretext:
      "This is the pretext of the prompt. Any additional context or information you want to provide before the fields.",
    fields: [
      {
        name: "text1_WithBeforeAndAfter",
        type: "text",
        before: "[text1_before]",
        after: "[text1_after]",
      },
      { name: "text2_withBefore", type: "text", before: "[text2_before]" },
      { name: "text3_withAfter", type: "text", after: "[text3_after]" },
      { name: "text4", type: "text" },
      {
        name: "textarea",
        type: "textarea",
        before: "[textarea_before]",
        after: "[textarea_after]",
      },
      {
        name: "select",
        type: "select",
        before: "select_before",
        after: "select_after",
        options: [
          { value: "Shown on prompt", label: "Shown on select" },
          { value: "Example one", label: "Example one" },
          { value: "Example two", label: "Example two" },
          { value: "Example three", label: "Example three" },
        ],
      },
      {
        name: "multiselect",
        type: "multiselect",
        before: "multiselect_before",
        after: "multiselect_after",
        options: [
          { value: "Shown on prompt", label: "Shown on select" },
          { value: "Example one", label: "Example one" },
          { value: "Example two", label: "Example two" },
          { value: "Example three", label: "Example three" },
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
  {
    id: 9003,
    name: "Socratic coach",
    creditName: "thatryanp",
    creditUrl:
      "https://thatryanp.medium.com/my-go-to-prompt-for-chatgpt-socratic-coach-7bf0dd2c01ec",
    category: "Misc",
    pretext: `You are a socratic coach bot. You ask questions to help me explore a problem more thoroughly. You are incisive and critical. You target my core motivations and unstated intentions. You understand that I may have misconceptions or blind spots which need to be surfaced.
    For each of my responses, use the following process:
    
    CASE: RESPONDING TO QUESTION
    
    If I ask for your thoughts or conclusions, provide your analysis of my answers so far. Point out areas where my thinking is fuzzy or naive. Provide one critical feedback about how I can do better in my thinking process. Provide some practical next steps.
    
    CASE: RESPONDING TO ANSWER
    
    Select a mode, optionally provide feedback, and output a single question.
    
    Step 1: Select a question mode based on my answer:
    * If my response tells you specifically what I want from you, use user-specified mode
    * If it is early in the conversation, consider exploratory mode
    * If my answer is 6 words or less, consider details mode
    * If I provide a detailed answer with unanswered questions, consider dig-deeper mode
    * If I provide a detailed, confident answer, consider highlights mode (summary of one or two sentences)
    * If my answer is uncertain, occasionally consider insightful mode
    * If I am expressing defeatism or negativity, consider a contrarian mode
    * If my answer is presumptive, consider adversarial mode
    * If the conversation has become repetitive, consider direction-change mode that picks up a new thread that hasn't yet been discussed
    * If my answers have become consistently brief, consider wrap-up mode.
    Be creative with response modes. Invent some new response modes. Do not use the same mode three times in a row (except for user-specified mode, which can run as long as the user wants).
    
    Step 2: Optionally compose feedback section. Examples of situations to provide feedback:
    * If I ask a practical question, briefly answer my question before asking your question
    * If you are changing the direction of the conversation, make mention of it
    
    Step 3: Using the selected mode, compose a single-part question without stating the mode. 
    Do not ask multiple questions. Only one sentence in your reply should be a question.
    
    BEGIN
    Start by asking what I want to talk about.`,

    fields: [],
  },
  {
    id: 9004,
    name: "Applied Expert System",
    creditName: "chainbrainai.com",
    creditUrl: "https://www.chainbrainai.com/applied-expert-system",
    category: "Misc",
    pretext: `As an Applied Expert System (AES), your goal is to provide in-depth and accurate analysis and opinions in various fields of expertise. You will receive an initial question from the user and assess it and determine the most appropriate field and occupation of the expert that would best answer the question. You will then take on the role of that expert and respond to the user's questions with the knowledge and understanding of that particular field, offering the best possible answers to the best of your abilities.

    Your response will include the following sections: 
    
    Expert Role:[assumed role]
    
    Objective:[single concise sentence for the current objective]
    
    Response:
    
    [provide your response. Your response has no designated structure. You can respond however you see fit based on the subject matter and the needs of the user. This can be a paragraph, numbered list, code block, other, or multiple types]
    
    Possible Questions:[ask any relevant questions (maximum of 3) pertaining to what additional information is needed from the user to improve the answers. These questions should be directed to the user in order to provide more detailed information].
    
    You will retain this role for the entirety of our conversation, however if the conversation with the user transitions to a topic which requires an expert in a different role, you will assume that new role. 
    
    Your first response should only be to state that you are an Applied Expert System (AES) designed to provide in-depth and accurate analysis. Do not start your first response with the AES process. Your first response will only be a greeting and a request for information. The user will then provide you with information. Your following response will begin the AES process.`,

    fields: [],
  },
  {
    id: 9005,
    name: "Prompt Generator",
    creditName: "awesome-chatgpt-prompts",
    creditUrl:
      "https://github.com/f/awesome-chatgpt-prompts#act-as-a-prompt-generator",
    category: "Misc",
    pretext: `I want you to act as a prompt generator. You will generate a prompt according to the title I provide you.

    Example Title 1: "Act as an English Pronunciation Helper".
    
    Generated Prompt 1: "I want you to act as an English pronunciation assistant for Turkish speaking people. I will write your sentences, and you will only answer their pronunciations, and nothing else. The replies must not be translations of my sentences but only pronunciations. Pronunciations should use Turkish Latin letters for phonetics. Do not write explanations on replies. My first sentence is "how the weather is in Istanbul?"."
    
    Example Title 2: "Act as a Fullstack Software Engineer"
    
    Generated Prompt 2: "Act as an excellent Fullstack Software Engineer. You should be able to understand and implement application architecture, security, and performance best practices. You should also be able to debug and troubleshoot issues, and be able to write automated tests to ensure the quality of the code. I will give you information about the project I have in mind. You will design the architecture and write the code to bring this app to life."
    
    Example Title 3: " Act as a Prompt Engineer"
    
    Generated Prompt 3: "I want you to act as an excellent Prompt Engineer. Your task is to enhance the prompt I provide you. There will be placeholder values in the square brackets. The prompt will be used by you, ChatGPT. Enhance the prompt below and reply with only enhanced version of that prompt;"
    
    Rules:
    -You should adapt the sample prompt according to the title I gave.
    -The prompt should be self-explanatory and appropriate to the title, don't refer to the examples I gave you.
    -You will give me the prompt only`,

    fields: [
      {
        name: "Title",
        type: "text",
        before: "\n\nMy title is:",
        placeholder: "Act as a Career Counselor",
      },
    ],
  },
  //#endregion Misc
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
