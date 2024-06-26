interface Props {
  isCompleted: boolean;
}

export default function ToDoTitle({ isCompleted }: Props) {
  const className = isCompleted
    ? "bg-green-700 text-amber-300"
    : "bg-lime-300 text-green-700";
  return (
    <div
      className={`h-9 w-24 text-center pt-2 rounded-full mb-4 font-bold ${className}`}
    >
      {isCompleted ? "DONE" : "TO DO"}
    </div>
  );
}

/**
 * 할일 목록의 상태를 보여줍니다.
 * "DONE", "TO DO" 로 구분됩니다.
 */
