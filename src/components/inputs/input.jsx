export default function Input({ children, name }) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-sm">{name}</label>
      {children}
    </div>
  );
}
