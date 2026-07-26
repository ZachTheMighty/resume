export default function EditResume({ items }) {
  return (
    <div className="mt-16 outline outline-white/10">
      <div className="flex justify-evenly text-xs sm:text-base md:text-xl bg-white/5 py-4">
        {Object.entries(items[0]).map(
          ([key, value], index) =>
            key !== "sectionName" && (
              <div key={index} className="">
                {value.label}
              </div>
            ),
        )}
      </div>
    </div>
  );
}
