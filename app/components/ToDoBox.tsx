import ToDoItem from "./ToDoItem";
import ToDoTitle from "./ToDoTitle";
import mockupData from "../mockup.json";

interface Props {
  isCompleted: boolean;
}

export default function ToDoBox({ isCompleted }: Props) {
  const worksArray = mockupData.filter(
    (item) => item.isCompleted === isCompleted
  );
  return (
    <article className="w-1/2 mt-10">
      <ToDoTitle isCompleted={isCompleted} />
      {worksArray.map((item, index) => (
        <ToDoItem
          isCompleted={item.isCompleted}
          id={item.id}
          name={item.name}
          key={item.id}
        />
      ))}
    </article>
  );
}
