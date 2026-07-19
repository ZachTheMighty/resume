import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

export default function Practical() {
  return (
    <Section sectionName={"Practical experience"}>
      <Input type="text" name="Previous company name" />
      <Input type="text" name="Position title" />
      <Input type="text" name="Responsibilities" />
      <Input type="date" name="From" />
      <Input type="date" name="To" />
    </Section>
  );
}
