import ToDoItem from "./ToDoItem";
import ToDoTitle from "./ToDoTitle";

import { Dispatch, SetStateAction } from "react";
import { Data } from "./ToDoWrapper";

type Props = {
  isCompleted: boolean;
  works: Data[] | undefined;
  setWorkData: Dispatch<SetStateAction<Data[] | undefined>>;
};

export default function ToDoBox({ isCompleted, works, setWorkData }: Props) {
  const worksArray = works?.filter((item) => item.isCompleted === isCompleted);
  return (
    <article className="w-11/12 lg:w-1/2 h-54 lg:h-60 mt-10 overflow-scroll ">
      <ToDoTitle isCompleted={isCompleted} />
      {worksArray?.map((item: Data) => (
        <ToDoItem
          isCompleted={item.isCompleted}
          id={item.id}
          name={item.name}
          key={item.id}
          setWorkData={setWorkData}
        />
      ))}
    </article>
  );
}
