import BasicInfo from "./basic_info.jsx";

import defaultPhoto from "../assets/default_photo.jpg";

import school from "../assets/town-hall.svg";
import country from "../assets/city-variant-outline.svg";

export default function Resume({ general, edus }) {
  return (
    <div className="flex-1 flex min-h-screen">
      <div className="flex-1 flex flex-col gap-8 items-center mt-24 bg-gray/10 min-h-full">
        <img
          src={general.photo || defaultPhoto}
          alt="profile picture"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 rounded-full object-cover"
        />

        <div className="text-xs sm:text-sm md:text-2xl font-extrabold">
          {general.first.value || "First name "}
          {general.last.value || " Last name"}
        </div>

        <BasicInfo
          img={school}
          alt="school icon"
          header="School"
          content={edus.at(-1)?.school.value || ""}
        />
        <BasicInfo
          img={country}
          alt="country icon"
          header="Country"
          content={general.country.value || ""}
        />
      </div>
      <div className="flex-2 bg-[#172131] min-h-full"></div>
    </div>
  );
}
