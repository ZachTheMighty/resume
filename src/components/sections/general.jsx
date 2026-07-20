import Input from "../inputs/input.jsx";
import Section from "./section.jsx";

import plus from "../../assets/plus.svg";
import { useState } from "react";

export default function General({ values, setValues }) {
  const [file, setFile] = useState(null);

  return (
    <Section sectionName={"General information"}>
      <div className="flex flex-wrap justify-start items-center gap-6">
        <Input type="text" name="Name" values={values} setValues={setValues} />
        <Input
          type="email"
          name="Email"
          values={values}
          setValues={setValues}
        />
        <Input
          type="tel"
          name="Phone number"
          values={values}
          setValues={setValues}
        />
        <Input
          type="text"
          name="Country"
          values={values}
          setValeus={setValues}
        />
      </div>
      <div className="mt-8">
        <label htmlFor="file">
          <div className="mb-2">Upload photo</div>
          <div className="flex justify-center bg-gray-800 rounded-md">
            <img src={plus} alt="plus sign" className="w-10" />
          </div>
        </label>

        <input
          required
          type="file"
          id="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            setFile(event.target.files[0]);
            setValues({
              ...values,
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
