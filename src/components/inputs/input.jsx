export default function Input({ children, name, span }) {
  return (
    <div
      className={`${span === "responibilities" ? "col-span-2" : ""} flex flex-col gap-2 flex-1`}
    >
      <label className="text-sm">{name}</label>
      {children}
    </div>
  );
}
