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
        {items.map((item) => (
          <tr className="text-xs sm:text-base md:text-xl even:bg-white/5 odd:bg-white/10 relative">
            {Object.entries(item).map(
              ([key, item]) =>
                key !== "sectionName" && (
                  <td key={key} className="p-2 sm:p-4 border border-white/10">
                    {item.value}
                  </td>
                ),
            )}
            <img
              src={trash}
              className="w-5 sm:w-7 absolute top-2 -right-7 sm:top-5 sm:-right-10 hover:opacity-70"
              onClick={() =>
                setItems(items.filter((element) => element !== item))
              }
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
