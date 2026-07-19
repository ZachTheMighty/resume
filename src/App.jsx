import General from "./components/sections/general.jsx";
import Education from "./components/sections/education.jsx";
import Practical from "./components/sections/practical.jsx";

export default function App() {
  return (
    <>
      <General />
      <Education />
      <Practical />
      <button>Generate resume</button>
    </>
  );
}
