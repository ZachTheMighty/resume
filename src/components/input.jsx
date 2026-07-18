export default function ({ type, name }) {
  return (
    <div className="flex flex-col">
      <label>{name}</label>
      <input
        type={type}
        className="outline outline-black px-2 py-1 hover:outline-blue-700 focus:outline-2 focus:outline-blue-700"
      />
    </div>
  );
}
