import Input from "./input.jsx";
import Section from "./section.jsx";

export default function Education() {
  return (
    <Section sectionName={"Educational experience"}>
      <Input type="text" name="School name" />
      <Input type="text" name="Title of study" />
      <Input type="date" name="Date of study" />
    </Section>
  );
}
