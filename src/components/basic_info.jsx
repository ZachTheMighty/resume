export default function BasicInfo({ img, alt, header, content }) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-indigo-500 p-2">
        <img src={img} alt={alt} className="w-8" />
      </div>

      <div className="flex flex-wrap">
        <div className="font-semibold mr-2">{header}:</div>
        <div>{content}</div>
      </div>
    </div>
  );
}
