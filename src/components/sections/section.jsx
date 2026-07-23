import { useState } from "react";
import Input from "../inputs/input";
import plus from "../../assets/plus.svg";

export default function Section({
  sectionName,
  add,
  state,
  setState,
  initState,
  states,
  setStates,
}) {
  const [added, setAdded] = useState(false);

  return (
    <div className="mb-15 max-w-3xl border-b border-white/10 pb-15">
      <h1 className="mb-4 text-2xl font-base">{sectionName}</h1>
      <form
        className="grid grid-cols-2 gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          setState(initState);
          setStates([...states, state]);
          setAdded(true);
        }}
      >
        {Object.entries(state).map(([key, input], index) => (
          <Input name={input.label} key={index} span={key}>
            <input
              required
              type={input.type}
              value={input.value}
              className="outline outline-white/15 text-focus:outline-offset-2 px-3 py-1.5 focus:outline-2 focus:outline-indigo-500 rounded-md bg-white/5"
              onChange={(event) => {
                setState({
                  ...state,
                  [key]: { ...state[key], value: event.target.value },
                });
                setAdded(false);
              }}
            />
          </Input>
        ))}

        <button className="col-span-2 flex justify-center items-center bg-indigo-500 rounded-md py-4 text-xl font-semibold hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2">
          <div>Add {add}</div>
          <img src={plus} alt="plus sign" className="w-8" />
        </button>
      </form>
      {added && (
        <div className="mt-4 text-xl font-semibold text-green-600">
          {add[0].toUpperCase() + add.slice(1)} has been added!
        </div>
      )}{" "}
    </div>
  );
}
