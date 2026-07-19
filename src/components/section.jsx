export default function ({ sectionName, children }) {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-light">{sectionName}</h1>
      <div className="flex justify-center items-center gap-4">{children}</div>
    </div>
  );
}
