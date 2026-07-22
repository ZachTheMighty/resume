import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

import plus from "../../assets/plus.svg";

import { useState } from "react";

export default function Education({
  education,
  setEducation,
  initState,
  edus,
  setEdus,
}) {
  const [added, setAdded] = useState(false);

  return (
    <Section sectionName={"Educational experience"}>
      <form
        className="grid grid-cols-2 gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          setEdus([...edus, education]);
          setEducation(initState);
          setAdded(true);
        }}
      >
        {Object.entries(education).map(([key, input], index) => (
          <Input name={input.labelName} key={index}>
            <input
              required
              type={input.type}
              value={input.value}
              className="outline outline-white/15 text-focus:outline-offset-2 px-3 py-1.5 focus:outline-2 focus:outline-indigo-500 rounded-md bg-white/5"
              onChange={(event) => {
                setEducation({
                  ...education,
                  [key]: { ...education[key], value: event.target.value },
                });
                setAdded(false);
              }}
            />
          </Input>
        ))}

        <button className="col-span-2 flex justify-center items-center bg-indigo-500 rounded-md py-4 text-xl font-semibold hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2">
          <div>Add experience</div>
          <img src={plus} alt="plus sign" className="w-8" />
        </button>
      </form>

      {added && (
        <div className="mt-4 text-xl font-semibold text-green-600">
          Experience has been added!
        </div>
      )}
    </Section>
  );
}
