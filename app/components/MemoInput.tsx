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
    <div className="grow relative rounded-xl h-80 bg-memo-pattern flex flex-col justify-center">
      <p className="absolute w-fit left-0 right-0 mx-auto top-3 text-xl text-amber-800">
        Memo
      </p>
      <textarea
        name="memo"
        ref={textareaRef}
        onChange={handleChange}
        defaultValue={defaultValue}
        placeholder="여기에 입력해주세요."
        className="w-full h-auto rounded-xl resize-none text-center bg-transparent focus:outline-none overflow:hidden"
      />
    </div>
  );
}

/**
 * todo의 memo를 저장하는 컴포넌트 입니다.
 * 기존 내용이 없을 경우, 위치를 나타내기 위해 placeholder를 사용했습니다.
 * 사용자의 입력값에 따라 높이가 변합니다.
 */
