export default function Input({ type, name }) {
  return (
    <div className="flex flex-col">
      <label>{name}</label>
      <input
        type={type}
        className="outline outline-black p-[3px] pl-2 hover:outline-blue-700 focus:outline-2 focus:outline-blue-700 rounded-[5px] w-50"
      />
    </div>
  );
}
