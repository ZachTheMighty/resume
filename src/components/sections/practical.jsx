import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

export default function Practical({ practical, setPractical }) {
  return (
    <Section sectionName={"Practical experience"}>
      <div className="flex flex-wrap justify-start items-center gap-6">
        <Input
          type="text"
          name="Previous company name"
          values={practical}
          setValues={setPractical}
        />
        <Input
          type="text"
          name="Position title"
          values={practical}
          setValues={setPractical}
        />
        <Input
          type="text"
          name="Responsibilities"
          values={practical}
          setValues={setPractical}
        />
        <Input
          type="date"
          name="From"
          values={practical}
          setValues={setPractical}
          section="practical"
        />
        <Input
          type="date"
          name="To"
          values={practical}
          setValues={setPractical}
          section="practical"
        />
      </div>
    </Section>
  );
}
