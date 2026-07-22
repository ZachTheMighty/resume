import { useState } from "react";

import General from "./components/sections/general.jsx";
import Education from "./components/sections/education.jsx";
import Practical from "./components/sections/practical.jsx";
import Resume from "./components/resume.jsx";

export default function App() {
  const [resume, setResume] = useState(false);

  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    photo: "",
  });

  const [education, setEducation] = useState({
    schoolName: "",
    titleOfStudy: "",
    from: "",
    to: "",
  });

  const [edus, setEdus] = useState([]);

  const [practical, setPractical] = useState({
    previousCompanyName: "",
    positionTitle: "",
    responsiblities: "",
    from: "",
    to: "",
  });

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
        <Resume
          onEdit={handleEdit}
          general={general}
          edus={edus}
          practical={practical}
        />
      ) : (
        <>
          <div className="flex flex-col bg-[#172131] px-10 py-8 rounded-md outline outline-white/10">
            <General general={general} setGeneral={setGeneral} />
            <Education
              education={education}
              setEducation={setEducation}
              edus={edus}
              setEdus={setEdus}
            />
            <Practical practical={practical} setPractical={setPractical} />
            <button
              className="bg-indigo-500 rounded-md px-3 py-2 text-xl font-semibold hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2 self-end"
              onClick={handleGenerate}
            >
              Generate resume
            </button>
          </div>
        </>
      )}
    </>
  );
}
