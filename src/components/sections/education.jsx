import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

import plus from "../../assets/plus.svg";
import { useState } from "react";

export default function Education({ education, setEducation, edus, setEdus }) {
  const [added, setAdded] = useState(false);

  function resetForm() {
    setEducation({
      schoolName: "",
      titleOfStudy: "",
      from: "",
      to: "",
    });
  }

  return (
    <Section sectionName={"Educational experience"}>
      <form
        className="grid grid-cols-2 gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          setEdus([...edus, education]);
          resetForm();
          setAdded(true);
        }}
      >
        <Input
          type="text"
          name="School name"
          values={education}
          setValues={setEducation}
          setAdded={setAdded}
        />
        <Input
          type="text"
          name="Title of study"
          values={education}
          setValues={setEducation}
          setAdded={setAdded}
        />
        <Input
          type="date"
          name="From"
          values={education}
          setValues={setEducation}
          setAdded={setAdded}
        />
        <Input
          type="date"
          name="To"
          values={education}
          setValues={setEducation}
          setAdded={setAdded}
        />
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
