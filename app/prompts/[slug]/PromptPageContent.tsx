"use client";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";

import { localStorageFieldIds } from "@/lib/prompts";
import Button from "@/app/components/Button";

const PromptPageContent = (prompt: PromptType) => {
  const { register, handleSubmit, control, watch } = useForm();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const watchAllFields = watch();

  //#region localStorage
  // Initializing the "localFieldValues" state
  // with the data stored in the browser's local storage. (If there are any)
  const [localFieldValues, setLocalFieldValues] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValues = window.localStorage.getItem("form");
      if (storedValues) return JSON.parse(storedValues);
    }
  });

  // If there are any local storage fields,
  // update "localFieldValues" state with their values.
  // (in handleCopy function)
  const setLocalStorageFieldValues = () => {
    localStorageFieldIds.map((id) => {
      let field = document.getElementById(id) as HTMLInputElement;
      if (!field) return;
      setLocalFieldValues((previousValues: any) => ({
        ...previousValues,
        [id]: field?.value,
      }));
    });
  };

  // TODO: making a state change refreshes final text area
  // according to localStorage on page refresh. Find a way
  // to do it without unused state.
  const [finalText, setFinalText] = useState("");
  // Save "localFieldValues" to localStorage for future use(each time "localFieldValues" change).
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("form", JSON.stringify(localFieldValues));
        setFinalText(generateFinalText());
      }
    } catch (error) {
      console.log(error);
    }
  }, [localFieldValues]);
  //#endregion

  // Copy Prompt
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    if (textAreaRef.current) {
      if (textAreaRef.current.value == "") return;
      try {
        setIsCopied(true);
        navigator.clipboard.writeText(textAreaRef.current.value);
        setLocalStorageFieldValues();
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
      <div className="py-5 flex justify-between items-center text-center flex-col md:flex-row">
        <h1>{prompt?.name}</h1>
        <div className="flex flex-shrink-0 flex-col items-center md:items-end">
          <div>
            <span className="font-bold">Category:</span> {prompt?.category}
          </div>
          <div>{creditLink}</div>
        </div>
      </div>
      {/* <Fields /> */}
      <div className="flex gap-x-16 flex-col md:flex-row">
        {/* LEFT */}
        <div className="flex flex-col py-10 flex-1">
          <form onSubmit={handleSubmit((data: any) => console.log(data))}>
            {prompt?.fields.map((f) => {
              switch (f.type) {
                case "text":
                  return (
                    <div className="mb-5" key={f.name}>
                      <div>{f.name + ": "}</div>
                      <input
                        id={f.id}
                        className="w-full p-2 rounded"
                        type={f.type}
                        defaultValue={
                          f.id && localFieldValues ? localFieldValues[f.id] : ""
                        }
                        placeholder={f.placeholder ? f.placeholder : f.name}
                        {...register(f.name)}
                      />
                    </div>
                  );
                case "textarea":
                  return (
                    <div className="mb-5" key={f.name}>
                      <div>{f.name + ": "}</div>
                      <textarea
                        id={f.id}
                        className="w-full p-2 rounded"
                        defaultValue={
                          f.id && localFieldValues ? localFieldValues[f.id] : ""
                        }
                        placeholder={f.placeholder ? f.placeholder : f.name}
                        {...register(f.name)}
                        rows={3}
                      ></textarea>
                    </div>
                  );

                case "select":
                  return (
                    <div className="mb-5" key={f.name}>
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
                    <div className="mb-5" key={f.name}>
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
        <div className="flex flex-col mt-6 gap-5 py-10 flex-1">
          <Button onClick={handleCopy} width="w-full">
            {isCopied ? "Copied" : "Copy Prompt"}
          </Button>
          <textarea
            className="p-2"
            ref={textAreaRef}
            rows={20}
            value={generateFinalText()}
            readOnly={true}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default PromptPageContent;
