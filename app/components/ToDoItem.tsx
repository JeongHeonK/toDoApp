"use client";

interface DataValue {
  id: number;
  isCompleted: boolean;
  name: string;
}

export default function ToDoItem({ name, isCompleted, id }: DataValue) {
  const divClassName = isCompleted ? "bg-violet-100" : "bg-white";
  const buttonClassName = isCompleted
    ? "bg-violet-600 text-white"
    : "bg-yellow-50";

  const handleEditClick = async () => {
    const response = await fetch("api/todo", {
      method: "PATCH",
      body: JSON.stringify({ id, name, isCompleted: true }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div
      className={`flex gap-3 border-2 border-slate-900 rounded-full items-center py-2 px-3 mb-4  ${divClassName}`}
    >
      <button
        onClick={handleEditClick}
        className={`flex-none border-2 border-slate-900 rounded-full size-8 ${buttonClassName}`}
      >
        {isCompleted && "✔︎"}
      </button>
      <p className="grow">{name}</p>
    </div>
  );
}
