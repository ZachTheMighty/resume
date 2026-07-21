import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

export default function Practical({ values, setValues }) {
  return (
    <Section sectionName={"Practical experience"}>
      <div className="flex flex-wrap justify-start items-center gap-6">
        <Input
          type="text"
          name="Previous company name"
          values={values}
          setValues={setValues}
        />
        <Input
          type="text"
          name="Position title"
          values={values}
          setValues={setValues}
        />
        <Input
          type="text"
          name="Responsibilities"
          values={values}
          setValues={setValues}
        />
        <Input
          type="date"
          name="From"
          values={values}
          setValues={setValues}
          section="practical"
        />
        <Input
          type="date"
          name="To"
          values={values}
          setValues={setValues}
          section="practical"
        />
      </div>
    </Section>
  );
}
