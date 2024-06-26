"use client";
import ToDoInput from "./ToDoInput";
import ToDoBox from "./ToDoBox";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Data {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function ToDoWrapper() {
  const [workData, setWorkDate] = useState<Data[]>();

  useEffect(() => {
    const getData = async () => {
      const response: Data[] = (await axios.get("/api/todo")).data;
      setWorkDate(response);
    };
    getData();
  }, []);

  return (
    <>
      <ToDoInput setWorkData={setWorkDate} />
      <section className="max-w-screen-lg mx-auto flex justify-center gap-12">
        <ToDoBox
          isCompleted={false}
          works={workData}
          setWorkData={setWorkDate}
        />
        <ToDoBox setWorkData={setWorkDate} isCompleted works={workData} />
      </section>
    </>
  );
}
