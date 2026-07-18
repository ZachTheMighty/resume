import Input from "./input.jsx";

export default function () {
  return (
    <div className="flex justify-center items-center gap-4">
      <Input type="text" name="Name" />
      <Input type="email" name="Email" />
      <Input type="tel" name="Tel" />
    </div>
  );
}
