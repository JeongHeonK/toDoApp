import { ChangeEvent } from "react";

import StateIndicator from "@/app/components/StateIndicator";

type Props = {
  value: string | undefined;
  isCompleted: boolean | undefined;
  onChange: (name: string, value: string) => void;
};

export default function DetailTitle({ value, isCompleted, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div
      className={`border-2 border-slate-900 rounded-xl py-2 flex justify-center gap-4 ${
        isCompleted ? "bg-violet-200" : "bg-white"
      }`}
    >
      <StateIndicator isCompleted={isCompleted} />
      <input
        name="name"
        onChange={handleChange}
        className="underline w-content-fit bg-transparent focus:outline-none"
        type="text"
        value={value}
      />
    </div>
  );
}
