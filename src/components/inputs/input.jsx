import camelCase from "./camel_case.js";

export default function Input({ type, name, values, setValues, setAdded }) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-sm">{name}</label>
      <input
        required
        type={type}
        value={values[camelCase(name)]}
        className="outline outline-white/15 text-focus:outline-offset-2 px-3 py-1.5 focus:outline-2 focus:outline-indigo-500 rounded-md bg-white/5"
        onChange={(event) => {
          setValues({
            ...values,
            [camelCase(name)]: event.target.value,
          });
          setAdded && setAdded(false);
        }}
      />
    </div>
  );
}
