export default function BasicInfo({ img, alt, header, content }) {
  return (
    <div className="w-full flex items-center gap-2">
      <div className="rounded-full bg-indigo-500 p-1 sm:p-2 ml-4">
        <img src={img} alt={alt} className="min-w-4 sm:min-w-6 md:min-w-8" />
      </div>

      <div className="flex flex-wrap">
        <div className="font-semibold mr-2 text-xs sm:text-sm md:text-base">
          {header}:
        </div>
        <div className="text-[.7rem] sm:text-sm md:text-base">{content}</div>
      </div>
    </div>
  );
}
