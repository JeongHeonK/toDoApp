"use client";
import { ChangeEvent, useState, FormEvent } from "react";

export default function ToDoInput() {
  const [userInput, setUserInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/todo");
    const result = await response.json();
    console.log(result);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-lg mx-auto h-14 flex justify-center gap-4 p-0 items-stretch mt-6"
    >
      <input
        onChange={handleInput}
        name="toDoInput"
        className="w-10/12 border-2 border-slate-900 rounded-full shadow-shadowCustom bg-slate-100 pl-6"
        placeholder="할 일을 입력해 주세요"
        value={userInput}
      />
      <button className="w-40 px-auto py-4 shadow-shadowCustom bg-slate-100 border-2 border-slate-900 rounded-full">
        + 추가하기
      </button>
    </form>
  );
}
