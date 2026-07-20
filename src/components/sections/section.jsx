export default function Section({ sectionName, children }) {
  return (
    <div className="mb-15 max-w-3xl border-b border-white/10 pb-15">
      <h1 className="mb-4 text-2xl font-base">{sectionName}</h1>
      <div className="flex flex-wrap justify-start items-center gap-6">
        {children}
      </div>
    </div>
  );
}
