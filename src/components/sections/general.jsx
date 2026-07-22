import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

import { useState } from "react";

export default function General({ general, setGeneral }) {
  const [file, setFile] = useState(null);

  return (
    <Section sectionName={"General information"}>
      <div className="flex flex-wrap justify-start items-center gap-6">
        <Input
          type="text"
          name="First name"
          values={general}
          setValues={setGeneral}
        />
        <Input
          type="text"
          name="Last name"
          values={general}
          setValues={setGeneral}
        />
        <Input
          type="email"
          name="Email"
          values={general}
          setValues={setGeneral}
        />
        <Input
          type="tel"
          name="Phone number"
          values={general}
          setValues={setGeneral}
        />
        <Input
          type="text"
          name="Country"
          values={general}
          setValues={setGeneral}
        />
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
            setFile(event.target.files[0]);
            setGeneral({
              ...general,
              photo: URL.createObjectURL(event.target.files[0]),
            });
          }}
        />

        <div className="mt-4 flex justify-center">
          {file && <img src={URL.createObjectURL(file)} className="w-md" />}
        </div>
      </div>
    </Section>
  );
}
