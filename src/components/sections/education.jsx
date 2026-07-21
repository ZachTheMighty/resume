import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

import plus from "../../assets/plus.svg";

export default function Education({ values, setValues, edu, setEdu }) {
  return (
    <Section sectionName={"Educational experience"}>
      <div className="grid grid-cols-2 gap-6">
        <Input
          type="text"
          name="School name"
          values={values}
          setValues={setValues}
        />
        <Input
          type="text"
          name="Title of study"
          values={values}
          setValues={setValues}
        />
        <Input
          type="date"
          name="From"
          values={values}
          setValues={setValues}
          section="education"
        />
        <Input
          type="date"
          name="To"
          values={values}
          setValues={setValues}
          section="education"
        />
        <div
          tabIndex="0"
          className="col-span-2 flex justify-center items-center bg-indigo-500 rounded-md py-4 text-xl font-semibold hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2"
          onClick={() =>
            setEdu([
              ...edu,
              {
                schoolName: values.schoolName,
                titleOfStudy: values.titleOfStudy,
                ["education.from"]: values["education.from"],
                ["education.to"]: values["education.to"],
              },
            ])
          }
        >
          <div>Add experience</div>
          <img src={plus} alt="plus sign" className="w-8" />
        </div>
      </div>
    </Section>
  );
}
