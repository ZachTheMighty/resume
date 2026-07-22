import { useState } from "react";

import General from "./components/sections/general.jsx";
import Education from "./components/sections/education.jsx";
import Practical from "./components/sections/practical.jsx";
import Resume from "./components/resume.jsx";

export default function App() {
  const [resume, setResume] = useState(false);

  const generalInit = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    photo: "",
  };

  const educationInit = {
    school: {
      value: "",
      type: "text",
      labelName: "School Name",
    },
    title: {
      value: "",
      type: "text",
      labelName: "Title of study",
    },
    from: {
      value: "",
      type: "date",
      labelName: "From",
    },
    to: {
      value: "",
      type: "date",
      labelName: "To",
    },
  };

  const practicalInit = {
    previousCompanyName: "",
    positionTitle: "",
    responsiblities: "",
    from: "",
    to: "",
  };

  const [general, setGeneral] = useState(generalInit);

  const [education, setEducation] = useState(educationInit);

  const [edus, setEdus] = useState([]);

  const [practical, setPractical] = useState(practicalInit);

  const root = document.querySelector("#root");

  function handleGenerate() {
    root.classList.toggle("bg-teal-400");
    setResume(true);
  }

  function handleReset() {
    setGeneral(generalInit);
    setEducation(educationInit);
    setPractical(practicalInit);
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
              initState={educationInit}
              edus={edus}
              setEdus={setEdus}
            />
            <Practical practical={practical} setPractical={setPractical} />

            <div className="self-end">
              <button
                className="mr-8 px-3 py-2 text-xl font-semibold hover:bg-white/10 rounded-md active:bg-white/5"
                onClick={handleReset}
              >
                Reset form
              </button>

              <button
                className="bg-indigo-500 rounded-md px-3 py-2 text-xl font-semibold hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2"
                onClick={handleGenerate}
              >
                Generate resume
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
