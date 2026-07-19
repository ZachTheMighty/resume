import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

export default function Education({ values, setValues }) {
  return (
    <Section sectionName={"Educational experience"}>
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
        name="Date of study"
        values={values}
        setValues={setValues}
      />
    </Section>
  );
}
