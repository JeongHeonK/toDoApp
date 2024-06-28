"use client";
import { useEffect, useState } from "react";

import ToDoInput from "./ToDoInput";
import ToDoBox from "./ToDoBox";

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
      <section className="max-w-screen-lg h-fit mx-auto flex flex-col lg:flex-row lg:justify-center items-center gap-12">
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
