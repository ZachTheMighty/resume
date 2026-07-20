import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

export default function General({ values, setValues }) {
  return (
    <Section sectionName={"General information"}>
      <Input type="text" name="Name" values={values} setValues={setValues} />
      <Input type="email" name="Email" values={values} setValues={setValues} />
      <Input
        type="tel"
        name="Phone number"
        values={values}
        setValues={setValues}
      />
      <Input type="text" name="Country" values={values} setValeus={setValues} />
    </Section>
  );
}
