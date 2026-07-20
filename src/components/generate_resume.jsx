import General from "./sections/general.jsx";
import Education from "./sections/education.jsx";
import Practical from "./sections/practical.jsx";

export default function GenerateResume({ onGenerate, values, setValues }) {
  return (
    <>
      <form onSubmit={onGenerate} className="flex flex-col">
        <General values={values} setValues={setValues} />
        <Education values={values} setValues={setValues} />
        <Practical values={values} setValues={setValues} />
        <button>Generate resume</button>
      </form>
    </>
  );
}
