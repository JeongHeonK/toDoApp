import { ChangeEvent } from "react";

type Props = {
  defaultValue: string | undefined;
  onChange: (name: string, value: string) => void;
};

export default function MemoInput({ onChange, defaultValue }: Props) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <div className="grow relative rounded-xl bg-memo-pattern flex flex-col justify-center">
      <p className="absolute w-fit left-0 right-0 mx-auto top-3 text-xl text-amber-800">
        Memo
      </p>
      <textarea
        rows={1}
        onChange={handleChange}
        name="memo"
        value={defaultValue}
        placeholder="여기에 입력해주세요."
        className="w-full h-auto rounded-xl resize-none text-center bg-transparent focus:outline-none"
      />
    </div>
  );
}
