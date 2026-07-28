import { useState } from "react";

import General from "./components/sections/general.jsx";
import Resume from "./components/resume.jsx";
import Section from "./components/sections/section.jsx";

export default function App() {
  const [resume, setResume] = useState(false);

  const generalInit = {
    sectionName: "General Information",
    first: {
      value: "",
      type: "text",
      label: "First name",
    },
    last: {
      value: "",
      type: "text",
      label: "Last name",
    },
    email: {
      value: "",
      type: "email",
      label: "Email",
    },
    phone: {
      value: "",
      type: "tel",
      label: "Phone number",
    },

    country: {
      value: "",
      type: "text",
      label: "Country",
    },
  };

  const educationInit = {
    sectionName: "Educational Experiences",
    school: {
      value: "",
      type: "text",
      label: "School Name",
    },
    title: {
      value: "",
      type: "text",
      label: "Title of study",
    },
    from: {
      value: "",
      type: "date",
      label: "From",
    },
    to: {
      value: "",
      type: "date",
      label: "To",
    },
  };

  const achievementsInit = {
    sectionName: "Major Achievements",
    achievement: {
      value: "",
      type: "text",
      label: "Achievement",
    },

    date: {
      value: "",
      type: "date",
      label: "Date",
    },
  };

  const skillsInit = {
    sectionName: "Soft Skills",
    skill: {
      value: "",
      type: "text",
      label: "Skill",
    },
  };

  const practicalInit = {
    sectionName: "Practical Experiences",
    company: {
      value: "",
      type: "text",
      label: "Company name",
    },
    position: {
      value: "",
      type: "text",
      label: "Position title",
    },
    from: {
      value: "",
      type: "date",
      label: "From",
    },
    to: {
      value: "",
      type: "date",
      label: "To",
    },
  };

  const [general, setGeneral] = useState(generalInit);

  const [education, setEducation] = useState(educationInit);
  const [edus, setEdus] = useState([]);

  const [achievement, setAchievement] = useState(achievementsInit);
  const [achievements, setAchievements] = useState([]);

  const [practical, setPractical] = useState(practicalInit);
  const [practicals, setPracticals] = useState([]);

  const [skill, setSkill] = useState(skillsInit);
  const [skills, setSkills] = useState([]);

  function handleGenerate() {
    setResume(true);
  }

  function handleReset() {
    setGeneral(generalInit);

    setEducation(educationInit);
    setEdus([]);

    setAchievement(achievementsInit);
    setAchievements([]);

    setSkill(skillsInit);
    setSkills([]);

    setPractical(practicalInit);
    setPracticals([]);
  }

  function handleEdit() {
    setResume(false);
  }

  return (
    <>
      {resume ? (
        <Resume
          onEdit={handleEdit}
          general={general}
          edus={{ edus, sectionName: education.sectionName }}
          achievements={{ achievements, sectionName: achievement.sectionName }}
          skills={{ skills, sectionName: skill.sectionName }}
          practicals={{ practicals, sectionName: practical.sectionName }}
        />
      ) : (
        <>
          <div className="flex flex-col bg-[#172131] px-10 py-8 rounded-md outline outline-white/10 my-8">
            <General general={general} setGeneral={setGeneral} />
            <Section
              add="experience"
              state={education}
              setState={setEducation}
              initState={educationInit}
              states={edus}
              setStates={setEdus}
            />
            <Section
              add="achievement"
              state={achievement}
              setState={setAchievement}
              initState={achievementsInit}
              states={achievements}
              setStates={setAchievements}
            />
            <Section
              add="skill"
              state={skill}
              setState={setSkill}
              initState={skillsInit}
              states={skills}
              setStates={setSkills}
            />
            <Section
              add="experience"
              state={practical}
              setState={setPractical}
              initState={practicalInit}
              states={practicals}
              setStates={setPracticals}
            />

            <div className="self-end flex sm:block">
              <button
                className="flex-1 mr-8 px-3 py-2 text-xl font-semibold hover:bg-white/10 rounded-md active:bg-white/5"
                onClick={handleReset}
              >
                Reset form
              </button>

              <button
                className="flex-1 bg-indigo-500 rounded-md px-3 py-2 text-xl font-semibold hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2"
                onClick={handleGenerate}
              >
                Preview resume
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
