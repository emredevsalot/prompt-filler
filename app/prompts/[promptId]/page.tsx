"use client";
import { useRef } from "react";

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import Button from "@/app/components/Button";

import prompts from "@/lib/prompts";

type Params = {
  params: { promptId: string };
};

export async function generateMetadata({
  params: { promptId },
}: Params): Promise<Metadata> {
  const prompt = prompts.find((p) => p.id.toString() === promptId);

  // Metadata for not found page
  if (!prompt?.id) {
    return {
      title: "Prompt not found",
    };
  }

  return {
    title: "Prompt id: " + prompt?.id,
    description: `This is the page of prompt ${prompt?.id}.`,
  };
}

const PromptPage = ({ params: { promptId } }: Params) => {
  const prompt = prompts.find((p) => p.id.toString() === promptId);

  if (!prompt?.id) return notFound();

  const { register, handleSubmit, control, watch } = useForm();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const watchAllFields = watch();
  console.log(watchAllFields);

  const handleCopy = () => {
    if (textAreaRef.current) {
      navigator.clipboard.writeText(textAreaRef.current.value);
    }
  };

  const generateFinalText = () => {
    let finalText: string[] = [];
    prompt.fields.map((item) => {
      let fullField: string = "";

      // If field is empty, do nothing.
      if (!watchAllFields[item.name]) return;
      // If multiselect is empty, do nothing:
      if (watchAllFields[item.name].length == 0) return;

      fullField += item.before ? item.before + " " : "";
      fullField += watchAllFields[item.name];
      fullField += item.after ? " " + item.after : "";
      fullField += ".";

      finalText.push(fullField);
    });
    return finalText.join("\n");
  };

  return (
    <>
      <div className="mt-2">
        <Link href="/prompts">
          <Button>Go Back</Button>
        </Link>
        {" | "}
        Prompt id: {promptId}
        {" | "}
        Category: {prompt.category}
      </div>
      {/* <Fields /> */}
      <div className="flex gap-16">
        {/* LEFT */}
        <div className="flex flex-col py-10 flex-1">
          <form onSubmit={handleSubmit((data: any) => console.log(data))}>
            {prompt.fields.map((f) => {
              switch (f.type) {
                case "text":
                  return (
                    <div className="my-5" key={f.name}>
                      <div>{f.name + ": "}</div>
                      <input
                        className="w-full"
                        type={f.type}
                        placeholder={f.name}
                        {...register(f.name)}
                      />
                    </div>
                  );
                case "textarea":
                  return (
                    <div className="my-5" key={f.name}>
                      <div>{f.name + ": "}</div>
                      <textarea
                        className="w-full"
                        {...register(f.name)}
                        rows={3}
                      ></textarea>
                    </div>
                  );

                case "select":
                  return (
                    <div className="my-5" key={f.name}>
                      <div>{f.name + ": "}</div>
                      <Controller
                        control={control}
                        defaultValue={""}
                        name={f.name}
                        render={({ field: { onChange, value } }) => (
                          <Select
                            instanceId={f.name}
                            className="text-black"
                            value={f.options?.filter((c) =>
                              value.includes(c.value)
                            )}
                            onChange={(val) => onChange(val?.value)}
                            options={f.options}
                          />
                        )}
                      />
                    </div>
                  );
                case "multiselect":
                  return (
                    <div className="my-5" key={f.name}>
                      <div>
                        <div>{f.name + ": "}</div>
                      </div>
                      <Controller
                        control={control}
                        defaultValue={[]}
                        name={f.name}
                        render={({ field: { onChange, value } }) => (
                          <Select
                            instanceId={f.name}
                            className="text-black"
                            value={f.options?.filter((c: any) =>
                              value.includes(c.value)
                            )}
                            onChange={(val) =>
                              onChange(val.map((c) => c.value))
                            }
                            options={f.options}
                            isMulti
                          />
                        )}
                      />
                    </div>
                  );
                default:
                  return "";
              }
            })}

            {/* <button type="submit">Submit</button> */}
          </form>
        </div>
        {/* RIGHT */}
        <div className="flex flex-col gap-5 py-10 flex-1">
          <textarea
            ref={textAreaRef}
            rows={20}
            value={generateFinalText()}
            readOnly={true}
          ></textarea>
          <Button onClick={handleCopy} width="w-full">
            Copy Prompt
          </Button>
        </div>
      </div>
    </>
  );

  // return (
  //   <div className="flex">
  //     {/* LEFT */}
  //     <div className="flex flex-col p-10 flex-1">
  //       <form onSubmit={handleSubmit((data: any) => console.log(data))}>
  //         {fields.map((f) => {
  //           switch (f.type) {
  //             case "text":
  //               return (
  //                 <div className="my-5" key={f.name}>
  //                   <div>{f.name + ": "}</div>
  //                   <input
  //                     className="w-full"
  //                     type={f.type}
  //                     placeholder={f.name}
  //                     {...register(f.name)}
  //                   />
  //                 </div>
  //               );
  //             case "textarea":
  //               return (
  //                 <div className="my-5" key={f.name}>
  //                   <div>{f.name + ": "}</div>
  //                   <textarea
  //                     className="w-full"
  //                     {...register(f.name)}
  //                     rows={10}
  //                   ></textarea>
  //                 </div>
  //               );

  //             case "select":
  //               return (
  //                 <div className="my-5" key={f.name}>
  //                   <div>{f.name + ": "}</div>
  //                   <Controller
  //                     control={control}
  //                     defaultValue={""}
  //                     name={f.name}
  //                     render={({ field: { onChange, value } }) => (
  //                       <Select
  //                         instanceId={f.name}
  //                         className="text-black"
  //                         value={f.options?.filter((c) =>
  //                           value.includes(c.value)
  //                         )}
  //                         onChange={(val) => onChange(val?.value)}
  //                         options={f.options}
  //                       />
  //                     )}
  //                   />
  //                 </div>
  //               );
  //             case "multiselect":
  //               return (
  //                 <div className="my-5" key={f.name}>
  //                   <div>
  //                     <div>{f.name + ": "}</div>
  //                   </div>
  //                   <Controller
  //                     control={control}
  //                     defaultValue={[]}
  //                     name={f.name}
  //                     render={({ field: { onChange, value } }) => (
  //                       <Select
  //                         instanceId={f.name}
  //                         className="text-black"
  //                         value={f.options?.filter((c: any) =>
  //                           value.includes(c.value)
  //                         )}
  //                         onChange={(val) => onChange(val.map((c) => c.value))}
  //                         options={f.options}
  //                         isMulti
  //                       />
  //                     )}
  //                   />
  //                 </div>
  //               );
  //             default:
  //               return "";
  //           }
  //         })}

  //         {/* <button type="submit">Submit</button> */}
  //       </form>
  //     </div>
  //     {/* RIGHT */}
  //     <div className="flex flex-col gap-5 p-10 flex-1">
  //       <textarea
  //         ref={textAreaRef}
  //         rows={20}
  //         value={generateFinalText()}
  //         readOnly={true}
  //       ></textarea>
  //       <button
  //         className="outline outline-2 outline-white"
  //         onClick={handleCopy}
  //       >
  //         Copy
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default PromptPage;

export async function generateStaticParams() {
  const allPrompts = prompts;

  return allPrompts.map((prompt) => ({ promptId: prompt.id.toString() }));
}