import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = {
  color: string;
  children: ReactNode;
  buttonType: "submit" | "button";
};

export default function Button({ color, buttonType, children }: Props) {
  return (
    <button
      type={buttonType}
      className={`w-40 shadow-shadowCustom rounded-full border-2 border-slate-900 h-14 ${color}`}
    >
      {children}
    </button>
  );
}
