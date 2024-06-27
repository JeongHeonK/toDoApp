import { ChangeEvent, useEffect, useRef } from "react";

type Props = {
  defaultValue: string | undefined;
  onChange: (name: string, value: string) => void;
};

export default function MemoInput({ onChange, defaultValue }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange(name, value);

    const textarea = e.target;

    if (textarea.scrollHeight < 264) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  return (
    <div className="grow relative rounded-xl bg-memo-pattern flex flex-col justify-center">
      <p className="absolute w-fit left-0 right-0 mx-auto top-3 text-xl text-amber-800">
        Memo
      </p>
      <textarea
        name="memo"
        ref={textareaRef}
        onChange={handleChange}
        value={defaultValue}
        placeholder="여기에 입력해주세요."
        className="w-full h-auto rounded-xl resize-none text-center bg-transparent focus:outline-none overflow:hidden"
      />
    </div>
  );
}
