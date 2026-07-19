import { useState } from "react";
import GenerateResume from "./components/generate_resume.jsx";


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
    {resume ? <Resume onEdit={handleEdit}/> : <GenerateResume onGenerate={handleGenerate}/>}
    </>
  );
}
