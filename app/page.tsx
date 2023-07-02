"use client";
import { useRef } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

type FieldType = {
  name: string;
  before?: string;
  after?: string;
  type: string;
  options?: { value: string; label: string }[];
};

const Home = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { register, handleSubmit, control, watch } = useForm();

  const fields: FieldType[] = [
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
  ];

  const watchAllFields = watch();
  console.log(watchAllFields);

  const generateFinalText = () => {
    let finalText: string[] = [];
    fields.map((item) => {
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

  const handleCopy = () => {
    if (textAreaRef.current) {
      navigator.clipboard.writeText(textAreaRef.current.value);
    }
  };

  return (
    <div className="flex">
      {/* LEFT */}
      <div className="flex flex-col p-10 flex-1">
        <form onSubmit={handleSubmit((data: any) => console.log(data))}>
          {fields.map((f) => {
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
                      rows={10}
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
                          onChange={(val) => onChange(val.map((c) => c.value))}
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
      <div className="flex flex-col gap-5 p-10 flex-1">
        <textarea
          ref={textAreaRef}
          rows={20}
          value={generateFinalText()}
          readOnly={true}
        ></textarea>
        <button
          className="outline outline-2 outline-white"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default Home;
