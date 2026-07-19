import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

export default function General() {
  return (
    <Section sectionName={"General information"}>
      <Input type="text" name="Name" />
      <Input type="email" name="Email" />
      <Input type="tel" name="Tel" />
    </Section>
  );
}
