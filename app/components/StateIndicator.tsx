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

/**
 * home과 detail페이지에서 완료 상태를 나타내주는 작은 원형 버튼입니다.
 * 클릭 시, isCompleted 값을 변경합니다.
 * isCompleted값에 따라 색과 텍스트가 변경됩니다.
 */
