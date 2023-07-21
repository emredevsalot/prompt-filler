"use client";
import React, { useRef, useState } from "react";

import Link from "next/link";

import Button from "@/app/components/Button";

import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const PromptPageContent = (prompt: PromptType) => {
  const { register, handleSubmit, control, watch } = useForm();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const watchAllFields = watch();
  // console.log(watchAllFields);

  // Copy Prompt
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    if (textAreaRef.current) {
      if (textAreaRef.current.value == "") return;
      try {
        setIsCopied(true);
        navigator.clipboard.writeText(textAreaRef.current.value);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };

  const generateFinalText = () => {
    // Initialize finalText as an array to store the generated text
    const finalText = prompt?.fields.reduce(
      (accumulatedText: string[], field) => {
        const fieldName = field.name;

        // Skip fields with no values or empty multiselect
        if (
          !watchAllFields[fieldName] ||
          watchAllFields[fieldName].length === 0
        ) {
          return accumulatedText;
        }

        const beforeText = field.before ? `${field.before} ` : "";
        const afterText = field.after ? ` ${field.after}` : "";
        const fullField = `${beforeText}${watchAllFields[fieldName]}${afterText}`;

        // Accumulate the generated text in the array
        return [...accumulatedText, fullField];
      },
      prompt?.pretext ? [prompt?.pretext] : []
    ); // Add prompt.pretext as the initial value if it exists

    // Join the array elements with a space to create the final text
    return finalText?.join(" ");
  };

  const creditLink = prompt?.creditUrl ? (
    <>
      <span className="font-bold">Credit: </span>
      <a href={prompt?.creditUrl} target="_blank">
        {prompt?.creditName}
      </a>
    </>
  ) : null;

  return (
    <>
      <div className="py-6 flex justify-between items-center flex-col md:flex-row">
        <h1>{prompt?.name}</h1>
        <div className="flex flex-shrink-0 flex-col items-end">
          <div>
            <span className="font-bold">Category:</span> {prompt?.category}
          </div>
          <div>{creditLink}</div>
        </div>
      </div>
      {/* <Fields /> */}
      <div className="flex gap-16">
        {/* LEFT */}
        <div className="flex flex-col py-10 flex-1">
          <form onSubmit={handleSubmit((data: any) => console.log(data))}>
            {prompt?.fields.map((f) => {
              switch (f.type) {
                case "text":
                  return (
                    <div className="my-5" key={f.name}>
                      <div>{f.name + ": "}</div>
                      <input
                        className="w-full p-2 rounded"
                        type={f.type}
                        placeholder={f.placeholder ? f.placeholder : f.name}
                        {...register(f.name)}
                      />
                    </div>
                  );
                case "textarea":
                  return (
                    <div className="my-5" key={f.name}>
                      <div>{f.name + ": "}</div>
                      <textarea
                        className="w-full p-2 rounded"
                        placeholder={f.placeholder ? f.placeholder : f.name}
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
            className="p-2"
            ref={textAreaRef}
            rows={20}
            value={generateFinalText()}
            readOnly={true}
          ></textarea>
          <Button onClick={handleCopy} width="w-full">
            {isCopied ? "Copied" : "Copy Prompt"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default PromptPageContent;
