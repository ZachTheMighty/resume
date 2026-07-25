import BasicInfo from "./basic_info.jsx";

import defaultPhoto from "../assets/default_photo.jpg";

import school from "../assets/town-hall.svg";
import country from "../assets/city-variant-outline.svg";
import email from "../assets/email-outline.svg";
import phone from "../assets/phone.svg";

import SectionsInfo from "./sections_info.jsx";

import dateFormatter from "../utils/date_formatter.jsx";

import hat from "../assets/school.svg";
import medal from "../assets/medal.svg";
import tools from "../assets/tools.svg";
import briefcase from "../assets/briefcase.svg";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function Resume({
  general,
  edus,
  achievements,
  skills,
  practicals,
}) {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Receipt_Data",
  });

  return (
    <div ref={componentRef} className="flex-1 flex min-h-screen">
      <div className="flex-1 flex flex-col gap-8 items-center pt-16 bg-gray/10 min-h-full">
        <img
          src={general.photo || defaultPhoto}
          alt="profile picture"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 rounded-full object-cover"
        />

        <div className="text-xs sm:text-sm md:text-2xl font-extrabold">
          {general.first.value ? general.first.value + " " : "First name "}
          {general.last.value || " Last name"}
        </div>

        <BasicInfo
          img={school}
          alt="school icon"
          header="School"
          content={edus.edus.at(-1)?.school.value || ""}
        />
        <BasicInfo
          img={country}
          alt="country icon"
          header="Country"
          content={general.country.value || ""}
        />
        <BasicInfo
          img={email}
          alt="email icon"
          header="Email"
          content={general.email.value || ""}
        />
        <BasicInfo
          img={phone}
          alt="phone icon"
          header="Phone"
          content={general.phone.value || ""}
        />
      </div>
      <div className="flex-2 flex flex-col gap-16 bg-[#172131] text-white min-h-full px-4 p-16 sm:pt-32 sm:px-8 md:px-32">
        <SectionsInfo
          img={hat}
          sectionName={edus.sectionName}
          content={edus.edus.map((edu, index) => (
            <li key={index} className="has-[+li]:mb-2 md:has-[+li]:mb-4">
              {edu.school.value} {edu.title.value} (
              {dateFormatter(edu.from.value)} - {dateFormatter(edu.to.value)})
            </li>
          ))}
        />
        <SectionsInfo
          img={medal}
          sectionName={achievements.sectionName}
          content={achievements.achievements.map((achievement, index) => (
            <li key={index} className="has-[+li]:mb-2">
              {console.log(achievement)}
              {achievement.achievement.value} (
              {dateFormatter(achievement.date.value)})
            </li>
          ))}
        />
        <SectionsInfo
          img={tools}
          sectionName={skills.sectionName}
          content={skills.skills.map((skill, index) => (
            <li key={index} className="has-[+li]:mb-2">
              {skill.skill.value}
            </li>
          ))}
        />
        <SectionsInfo
          img={briefcase}
          sectionName={practicals.sectionName}
          content={practicals.practicals.map((practical, index) => (
            <li key={index} className="has-[+li]:mb-2">
              {practical.company.value} {practical.position.value} (
              {dateFormatter(practical.from.value)} -{" "}
              {dateFormatter(practical.to.value)}){" "}
            </li>
          ))}
        />

        <div className="self-end flex sm:block sm:mb-10 md:mb-20 text-xs sm:text-xl md:text-2xl print:hidden">
          <button
            onClick={handlePrint}
            className="flex-1 bg-indigo-500 rounded-md px-3 py-2 font-semibold hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2"
          >
            Print resume
          </button>
        </div>
      </div>
    </div>
  );
}
