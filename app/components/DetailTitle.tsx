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

/**
 * 디테일 페이지 제목 컴포넌트 입니다
 * isComplete에 따라 색이 변합니다
 * input 내용은 state lifting을 통해 부모 컴포넌트에서 관리됩니다.
 */
