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
      try {
        const response: Data[] = (await axios.get("/api/todo")).data;
        setWorkDate(response);
      } catch (e) {
        alert("데이터를 불러오는데 실패했습니다. 다시 시도해주세요.");

        return;
      }
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

/**
 * ToDoInput과 ToDoBox컴포넌트들 간의 state 업데이트를 관리하는 컴포넌트 입니다.
 * 서버에 POST, PATCH요청후 클라이언트 쪽에도 변경값을 바로 업데이트 하기 위한 state를 관리하고 있습니다.
 * 렌더링 시, 서버에 할일 목록들을 요청해서 ToDoBox로 전달합니다.
 */
