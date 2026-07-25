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

export default function Resume({
  general,
  edus,
  achievements,
  skills,
  practicals,
}) {
  return (
    <div className="flex-1 flex min-h-screen">
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
      <div className="flex-2 flex flex-col justify-center gap-16 bg-[#172131] min-h-full px-4 sm:px-8 md:px-32 pt-32">
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
      </div>
    </div>
  );
}
