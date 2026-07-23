import school from "../assets/town-hall.svg";

export default function Resume({ general, edus }) {
  return (
    <div className="flex-1 flex min-h-screen">
      <div className="flex-1 flex flex-col gap-8 items-center mt-24 bg-gray/10 min-h-full">
        <img
          src={general.photo}
          alt="profile picture"
          className="w-64 h-64 rounded-full object-cover"
        />

        <div className="text-2xl font-extrabold">
          {general.first.value} {general.last.value}
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-indigo-500 p-2">
            <img src={school} alt="school icon" className="w-8" />
          </div>
          <div className="flex flex-wrap">
            <div className="font-semibold mr-2">School:</div>
            <div>{edus.at(-1).school.value}</div>
          </div>
        </div>
      </div>
      <div className="flex-2 bg-[#172131] min-h-full"></div>
    </div>
  );
}
