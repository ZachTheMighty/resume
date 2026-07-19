import Input from "./input.jsx";

export default function () {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-light">General information</h1>
      <div className="flex justify-center items-center gap-4">
        <Input type="text" name="Name" />
        <Input type="email" name="Email" />
        <Input type="tel" name="Tel" />
      </div>
    </div>
  );
}
