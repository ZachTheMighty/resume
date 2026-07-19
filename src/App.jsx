import { useState } from "react";

import General from "./components/sections/general.jsx";
import Education from "./components/sections/education.jsx";
import Practical from "./components/sections/practical.jsx";

export default function App() {
  const [resume, setResume] = useState(false);

  const root = document.querySelector("#root");

  function handleGenerate() {
    root.classList.toggle("bg-teal-400");
    setResume(true);
  }

  function handleEdit() {
    root.classList.toggle("bg-teal-400");
    setResume(false);
  }

  return (
    <>
      <General />
      <Education />
      <Practical />
      {!resume ? <button onClick={handleGenerate}>Generate resume</button> :
        <button onClick={handleEdit}>Edit resume</button>
      }
    </>
  );
}
