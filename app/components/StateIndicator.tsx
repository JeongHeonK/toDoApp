import { ReactNode } from "react";

type Props = {
  isCompleted: boolean | undefined;
  onClick?: () => void;
};

export default function StateIndicator({ isCompleted, onClick }: Props) {
  const className = isCompleted
    ? "border-2 border-slate-900 rounded-full size-8 bg-violet-600 text-white"
    : "border-2 border-slate-900 rounded-full size-8 bg-yellow-50";
  return (
    <button onClick={onClick} className={className}>
      {isCompleted ? "✔︎" : " "}
    </button>
  );
}
