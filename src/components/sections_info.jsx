export default function SectionsInfo({ img, sectionName, content }) {
  return (
    <div>
      <div className="flex flex-col gap-4 md:ml-50">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-indigo-500 p-1 sm:p-2">
            <img
              src={img}
              alt="hat icons"
              className="min-w-4 sm:min-w-6 md:min-w-8"
            />
          </div>
          <div className="text-indigo-500 font-semibold text-sm sm:text-2xl md:text-4xl">
            {sectionName &&
              sectionName
                .split("")
                .map((char) => char.toUpperCase())
                .join("")}
          </div>
        </div>
        <ul className="list-disc pl-4 sm:pl-6 text-xs sm:text-base md:text-xl">
          {content}
        </ul>
      </div>
      <hr className="mt-5 sm:mt-10 md:mt-15 w-[95%] md:w-[80%] text-white/10 md:mx-auto"></hr>
    </div>
  );
}
