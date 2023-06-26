"use client";
import { useRef, useState } from "react";

type Props = {};

const Home = (props: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [fields, setFields] = useState({
    field1: "",
    field2: "",
    myRadio: "",
    myCheckbox: false,
  });

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;
    console.log(e.target.type);
    if (e.target.type == "checkbox") {
      setFields((prev) => {
        return { ...prev, [name]: checked };
      });
    } else {
      setFields((prev) => {
        return { ...prev, [name]: value };
      });
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
      <div className="flex flex-col gap-5 p-10 flex-1">
        <label>
          hey: <input type="text" name="field1" onChange={handleChange} />
        </label>
        <label>
          hey2: <input type="text" name="field2" onChange={handleChange} />
        </label>
        <p>
          Radio buttons:
          <label>
            <input
              type="radio"
              name="myRadio"
              value="option1"
              onChange={handleChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="option2"
              onChange={handleChange}
            />
            Option 2
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="option3"
              onChange={handleChange}
            />
            Option 3
          </label>
        </p>
        <label>
          Checkbox:{" "}
          <input type="checkbox" name="myCheckbox" onChange={handleChange} />
        </label>
      </div>
      {/* RIGHT */}
      <div className="flex flex-col gap-5 p-10 flex-1">
        <textarea
          ref={textAreaRef}
          rows={20}
          value={
            (fields.field1 && "value1 is here: " + fields.field1 + "\n") +
            (fields.field2 && "value2 is here: " + fields.field2 + "\n") +
            (fields.myRadio && "myRadio is here: " + fields.myRadio + "\n") +
            (fields.myCheckbox == true ? "myCheckbox is checked" + "\n" : "")
          }
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
