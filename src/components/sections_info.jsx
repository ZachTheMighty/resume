export default function SectionsInfo({ img, sectionName, content }) {
  return (
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
      <ol className="list-disc pl-4 sm:pl-6 text-xs sm:text-base md:text-xl">
        {content}
      </ol>
    </div>
  );
}
