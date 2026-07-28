import trash from "../assets/trash-can-outline.svg";

export default function EditResume({ items, setItems }) {
  return (
    <table className="mt-16 mx-auto">
      <thead>
        <tr className="text-xs sm:text-base md:text-xl bg-white/5">
          {Object.entries(items[0]).map(
            ([key, value], index) =>
              key !== "sectionName" && (
                <th
                  key={index}
                  className="p-2 sm:p-4 border border-white/10 text-start"
                >
                  {value.label}
                </th>
              ),
          )}
        </tr>
      </thead>

      <tbody>
        {items.map((item, rowIndex) => (
          <tr
            key={rowIndex}
            className="text-xs sm:text-base md:text-xl even:bg-white/5 odd:bg-white/10 relative"
          >
            {Object.entries(item).map(
              ([key, item]) =>
                key !== "sectionName" && (
                  <td key={key} className="p-2 border border-white/10">
                    <input
                      className="w-full text-focus:outline-offset-2 px-3 py-1.5 focus:outline-2 focus:outline-indigo-500 rounded-md"
                      type={item.type}
                      value={item.value}
                      onChange={(event) => {
                        setItems((prevItems) =>
                          prevItems.map((row, rIdx) =>
                            rIdx === rowIndex
                              ? {
                                  ...row,
                                  [key]: {
                                    ...row[key],
                                    value: event.target.value,
                                  },
                                }
                              : row,
                          ),
                        );
                      }}
                    />
                  </td>
                ),
            )}
            <td className="absolute top-2 -right-7 sm:top-5 sm:-right-10 ">
              <img
                src={trash}
                className="w-5 sm:w-7 hover:opacity-70"
                onClick={() =>
                  setItems(items.filter((element) => element !== item))
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
