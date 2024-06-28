import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useRef,
} from "react";

import ToDoItem from "./ToDoItem";
import ToDoTitle from "./ToDoTitle";

import { Data } from "./ToDoWrapper";

type Props = {
  isCompleted: boolean;
  works: Data[] | undefined;
  setWorkData: Dispatch<SetStateAction<Data[] | undefined>>;
};

export default function ToDoBox({ isCompleted, works, setWorkData }: Props) {
  const [visibleWorks, setVisibleWorks] = useState<Data[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filteredWorks = works?.filter(
      (item) => item.isCompleted === isCompleted
    );
    if (filteredWorks) {
      setVisibleWorks(filteredWorks.slice(0, 4));
    }
  }, [isCompleted, works]);

  useEffect(() => {
    if (!divRef.current) return;

    const observerOptions = {
      threshold: 0.01,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleWorks((prevWorks) => {
            const length = prevWorks.length;
            const newWorks =
              works
                ?.filter((item) => item.isCompleted === isCompleted)
                ?.slice(length, length + 3) || [];
            return [...prevWorks, ...newWorks];
          });
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isCompleted, works]);

  return (
    <article className="w-11/12 lg:w-1/2 h-64 lg:h-64 mt-10 overflow-scroll">
      <ToDoTitle isCompleted={isCompleted} />
      {visibleWorks.length > 0 ? (
        visibleWorks.map((item: Data, index) => (
          <React.Fragment key={item.id}>
            <ToDoItem
              isCompleted={item.isCompleted}
              id={item.id}
              name={item.name}
              setWorkData={setWorkData}
            />
            <div ref={divRef} className="h-1"></div>
          </React.Fragment>
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
