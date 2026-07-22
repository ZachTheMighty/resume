import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

export default function Practical({ practical, setPractical }) {
  return (
    <Section sectionName={"Practical experience"}>
      <div className="flex flex-wrap justify-start items-center gap-6">
        {Object.entries(practical).map(([key, input], index) => (
          <Input name={input.labelName} key={index}>
            <input
              required
              type={input.type}
              value={input.value}
              className="outline outline-white/15 text-focus:outline-offset-2 px-3 py-1.5 focus:outline-2 focus:outline-indigo-500 rounded-md bg-white/5"
              onChange={(event) => {
                setPractical({
                  ...practical,
                  [key]: { ...practical[key], value: event.target.value },
                });
              }}
            />
          </Input>
        ))}
      </div>
    </Section>
  );
}
