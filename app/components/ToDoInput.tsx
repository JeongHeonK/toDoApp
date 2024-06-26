"use client";
import {
  ChangeEvent,
  useState,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";

import axios from "axios";

import { Data } from "./ToDoWrapper";

type Props = {
  setWorkData: Dispatch<SetStateAction<Data[] | undefined>>;
};

export default function ToDoInput({ setWorkData }: Props) {
  const [userInput, setUserInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInput.trim().length === 0) {
      alert("할 일을 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("/api/todo", { name: userInput });
      setWorkData((prev: any) => [response.data, ...prev]);
      setUserInput("");
    } catch (e) {
      alert("할 일을 추가할 수 없습니다. 다시 한번 시도해주세요.");
      setUserInput("");

      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-lg mx-auto h-14 flex justify-center gap-4 p-0 items-stretch px-5 lg:px-0 mt-6"
    >
      <input
        onChange={handleInput}
        name="toDoInput"
        className="w-10/12 border-2 border-slate-900 rounded-full shadow-shadowCustom bg-slate-100 pl-6"
        placeholder="할 일을 입력해 주세요"
        value={userInput}
      />
      <button className="w-14 text-transparent bg-plusIcon bg-no-repeat bg-center md:bg-none md:text-black md:w-40 px-auto py-4 shadow-shadowCustom bg-slate-100 border-2 border-slate-900 rounded-full">
        + 추가하기
      </button>
    </form>
  );
}

/**
 * 반응형 디자인으로 창 넓이에 따라 정렬이 변경됩니다.
 * 입력 후, Enter혹은 버튼 클릭으로 할일을 추가할 수 있습니다.
 * 반응형 디자인으로 폭에 따라 버튼이 달라집니다.
 */
