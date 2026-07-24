export default function BasicInfo({ img, alt, header, content }) {
  return (
    <div className="w-[60%] flex items-center gap-2">
      <div className="rounded-full bg-indigo-500 p-2">
        <img src={img} alt={alt} className="w-6 md:w-8" />
      </div>

      <div className="flex flex-wrap">
        <div className="font-semibold mr-2 text-sm md:text-base">{header}:</div>
        <div className="text-sm md:text-base">{content}</div>
      </div>
    </div>
  );
}
