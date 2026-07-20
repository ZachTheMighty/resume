import camelCase from "./camel_case.js";

export default function Input({ type, name, values, setValues }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{name}</label>
      <input
        required
        type={type}
        className="outline outline-black p-[3px] pl-2 hover:outline-blue-700 focus:outline-2 focus:outline-blue-700 rounded-[5px] w-50"
        onChange={(event) =>
          setValues({ ...values, [camelCase(name)]: event.target.value })
        }
      />
    </div>
  );
}
