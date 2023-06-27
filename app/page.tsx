"use client";
import { useRef, useState } from "react";

type Props = {};

const Home = (props: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const initialFields = [
    { id: "0", type: "text", value: "" },
    { id: "1", type: "text", value: "" },
    {
      id: "2",
      type: "radio",
      value: ["opt1", "opt2", "opt3"],
      chosenValue: "",
    },
    { id: "3", type: "checkbox", value: false },
    { id: "4", type: "checkbox", value: false },
    { id: "5", type: "checkbox", value: false },
    { id: "6", type: "checkbox", value: false },
  ];
  const [fields, setFields] = useState(initialFields);

  const handleChange = (e: any, id: string) => {
    const { name, value, checked } = e.target;

    if (e.target.type == "checkbox") {
      setFields(
        fields.map((item) =>
          item.id === id ? { ...item, value: checked } : item
        )
      );
    } else if (e.target.type == "radio") {
      setFields(
        fields.map((item) =>
          item.id === id ? { ...item, chosenValue: value } : item
        )
      );
    } else {
      setFields(
        fields.map((item) =>
          item.id === id ? { ...item, value: value } : item
        )
      );
    }
  };

  const handleCopy = () => {
    if (textAreaRef.current) {
      navigator.clipboard.writeText(textAreaRef.current.value);
    }
  };

  console.log(fields);

  return (
    <div className="flex">
      {/* LEFT */}
      <div className="flex flex-col p-10 flex-1">
        <div>
          {fields.map(({ id, type, value }, index) => {
            switch (type) {
              case "text":
                return (
                  <>
                    <div key={index}>
                      <label key={index}>
                        {id}
                        {": "}
                        <input
                          type="text"
                          name={id}
                          onChange={(e) => handleChange(e, id)}
                        />
                      </label>
                    </div>
                  </>
                );
              case "radio":
                if (Array.isArray(value)) {
                  return (
                    <div>
                      {value.map((val) => (
                        <>
                          <label>
                            <input
                              type="radio"
                              name={id}
                              value={val}
                              onChange={(e) => handleChange(e, id)}
                            />
                            {val}
                          </label>
                        </>
                      ))}
                    </div>
                  );
                }
              case "checkbox":
                return (
                  <>
                    <label>
                      Checkbox:{" "}
                      <input
                        type="checkbox"
                        name="myCheckbox"
                        onChange={(e) => handleChange(e, id)}
                      />
                    </label>
                  </>
                );
              default:
                return "";
            }
          })}
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex flex-col gap-5 p-10 flex-1">
        <textarea
          ref={textAreaRef}
          rows={20}
          value={fields
            .map((field) => {
              if (field.type === "checkbox") {
                return `checkbox: ${field.value} \n`;
              } else if (field.type === "text") {
                return `text: ${field.value} \n`;
              } else if (field.type === "radio") {
                return `radio: ${field.chosenValue} \n`;
              }
            })
            .join("")}
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
