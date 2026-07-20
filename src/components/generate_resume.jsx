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
        <button className="bg-indigo-500 rounded-md px-3 py-2 text-xl font-semibold hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2 self-end">
          Generate resume
        </button>
      </form>
    </>
  );
}
