import Input from "../inputs/input.jsx";

export default function General({ general, setGeneral }) {
  return (
    <div className="mb-15 max-w-3xl border-b border-white/10 pb-15">
      <h1 className="mb-4 text-2xl font-base">{general.sectionName}</h1>
      <div className="flex flex-wrap justify-start items-center gap-6">
        {Object.entries(general).map(
          ([key, input], index) =>
            key !== "photo" &&
            key !== "sectionName" && (
              <Input name={input.label} key={index}>
                <input
                  required
                  type={input.type}
                  value={input.value}
                  className="outline outline-white/15 text-focus:outline-offset-2 px-3 py-1.5 focus:outline-2 focus:outline-indigo-500 rounded-md bg-white/5"
                  onChange={(event) => {
                    setGeneral({
                      ...general,
                      [key]: { ...general[key], value: event.target.value },
                    });
                  }}
                />
              </Input>
            ),
        )}
      </div>
      <div className="mt-8">
        <label htmlFor="file">
          <div
            tabIndex="0"
            className="flex justify-center items-center bg-indigo-500 rounded-md py-4 text-xl font-semibold hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2"
          >
            Upload photo
          </div>
        </label>

        <input
          type="file"
          id="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            setGeneral({
              ...general,
              photo: URL.createObjectURL(event.target.files[0]),
            });
          }}
        />

        <div className="mt-4 flex justify-center">
          {general.photo !== "" && <img src={general.photo} className="w-md" />}
        </div>
      </div>
    </div>
  );
}
