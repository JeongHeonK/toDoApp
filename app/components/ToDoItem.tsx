import Link from "next/link";
import axios from "axios";

import StateIndicator from "./StateIndicator";

import { Dispatch, SetStateAction } from "react";
import { Data } from "./ToDoWrapper";

type Props = {
  id: number;
  isCompleted: boolean;
  name: string;
  setWorkData: Dispatch<SetStateAction<Data[] | undefined>>;
};

export default function ToDoItem({
  name,
  isCompleted,
  id,
  setWorkData,
}: Props) {
  const divClassName = isCompleted ? "bg-violet-100" : "bg-white";
  const buttonClassName = isCompleted
    ? "bg-violet-600 text-white"
    : "bg-yellow-50";

  const handleEditClick = async () => {
    const response = await axios.patch("/api/todo", {
      id,
      name,
      isCompleted: !isCompleted,
    });
    setWorkData((prev) => {
      const copiedData = prev?.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
      console.log(copiedData);
      return copiedData;
    });
  };

  return (
    <div
      className={`flex gap-3 border-2 border-slate-900 rounded-full items-center py-2 px-3 mb-4  ${divClassName}`}
    >
      <StateIndicator onClick={handleEditClick} isCompleted={isCompleted} />
      <Link
        href={`/items/${id}`}
        className={`grow ${isCompleted && "line-through"}`}
      >
        {name}
      </Link>
    </div>
  );
}
