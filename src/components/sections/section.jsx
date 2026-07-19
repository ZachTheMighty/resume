export default function Section({ sectionName, children }) {
  return (
    <div className="mb-15 ">
      <h1 className="mb-4 text-2xl font-light">{sectionName}</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {children}
      </div>
    </div>
  );
}
