import { useState } from "react";

import GenerateResume from "./components/generate_resume.jsx";
import Resume from "./components/resume.jsx";

export default function App() {
  const [resume, setResume] = useState(false);
  const [values, setValues] = useState({});

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
      {resume ? (
        <Resume onEdit={handleEdit} values={values} />
      ) : (
        <GenerateResume
          onGenerate={handleGenerate}
          values={values}
          setValues={setValues}
        />
      )}
    </>
  );
}
