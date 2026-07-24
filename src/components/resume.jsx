import BasicInfo from "./basic_info.jsx";

import school from "../assets/town-hall.svg";
import defaultPhoto from "../assets/default_photo.jpg";

export default function Resume({ general, edus }) {
  return (
    <div className="flex-1 flex min-h-screen">
      <div className="flex-1 flex flex-col gap-8 items-center mt-24 bg-gray/10 min-h-full">
        <img
          src={general.photo ? general.photo : defaultPhoto}
          alt="profile picture"
          className="w-64 h-64 rounded-full object-cover"
        />

        <div className="text-2xl font-extrabold">
          {general.first.value} {general.last.value}
        </div>

        <BasicInfo
          img={school}
          alt="school icon"
          header="School"
          content={edus.at(-1)?.school.value || ""}
        />
      </div>
      <div className="flex-2 bg-[#172131] min-h-full"></div>
    </div>
  );
}
