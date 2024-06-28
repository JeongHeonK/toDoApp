import { Dispatch, SetStateAction } from "react";

import ToDoItem from "./ToDoItem";
import ToDoTitle from "./ToDoTitle";

import { Data } from "./ToDoWrapper";

type Props = {
  isCompleted: boolean;
  works: Data[] | undefined;
  setWorkData: Dispatch<SetStateAction<Data[] | undefined>>;
};

export default function ToDoBox({ isCompleted, works, setWorkData }: Props) {
  const worksArray = works?.filter((item) => item.isCompleted === isCompleted);
  return (
    <article className="w-11/12 lg:w-1/2 h-64 lg:h-60 mt-10 overflow-scroll">
      <ToDoTitle isCompleted={isCompleted} />
      {worksArray && worksArray?.length > 0 ? (
        worksArray?.map((item: Data) => (
          <ToDoItem
            isCompleted={item.isCompleted}
            id={item.id}
            name={item.name}
            key={item.id}
            setWorkData={setWorkData}
          />
        ))
      ) : (
        <div
          className={`w-full h-40 mt-10 bg-no-repeat bg-center bg-contain mt-0 ${
            isCompleted ? "bg-doneDefault-sm" : "bg-todoDefault-sm"
          } lg:${isCompleted ? "bg-doneDefault" : "bg-todoDefault"}`}
        ></div>
      )}
    </article>
  );
}
