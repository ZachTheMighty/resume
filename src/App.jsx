import { useState } from "react";

import General from "./components/sections/general.jsx";
import Practical from "./components/sections/practical.jsx";
import Resume from "./components/resume.jsx";
import Section from "./components/sections/section.jsx";

export default function App() {
  const [resume, setResume] = useState(false);

  const generalInit = {
    first: {
      value: "",
      type: "text",
      labelName: "First name",
    },
    last: {
      value: "",
      type: "text",
      labelName: "Last name",
    },
    email: {
      value: "",
      type: "email",
      labelName: "Email",
    },
    phone: {
      value: "",
      type: "tel",
      labelName: "Phone number",
    },

    country: {
      value: "",
      type: "text",
      labelName: "Country",
    },
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

  const achievementsInit = {
    achievement: {
      value: "",
      type: "text",
      labelName: "Achievement",
    },

    date: {
      value: "",
      type: "date",
      labelName: "Date",
    },
  };

  const practicalInit = {
    previous: {
      value: "",
      type: "text",
      labelName: "Previous company name",
    },
    position: {
      value: "",
      type: "text",
      labelName: "Position title",
    },
    responibilities: {
      value: "",
      type: "text",
      labelName: "Responibilities",
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

  const [general, setGeneral] = useState(generalInit);

  const [education, setEducation] = useState(educationInit);
  const [edus, setEdus] = useState([]);

  const [achievement, setAchievement] = useState(achievementsInit);
  const [achievements, setAchievements] = useState([]);

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
    setAchievement(achievementsInit);
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
          achievements={achievements}
          practical={practical}
        />
      ) : (
        <>
          <div className="flex flex-col bg-[#172131] px-10 py-8 rounded-md outline outline-white/10">
            <General general={general} setGeneral={setGeneral} />
            <Section
              sectionName="Educational experiences"
              add="experience"
              state={education}
              setState={setEducation}
              initState={educationInit}
              states={edus}
              setStates={setEdus}
            />
            <Section
              sectionName="Major Achievements"
              add="achievement"
              state={achievement}
              setState={setAchievement}
              initState={achievementsInit}
              states={achievements}
              setStates={setAchievements}
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
