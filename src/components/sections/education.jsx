import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

export default function Education({ values, setValues }) {
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
        <Input type="date" name="From" values={values} setValues={setValues} />
        <Input type="date" name="To" values={values} setValues={setValues} />
      </div>
    </Section>
  );
}
