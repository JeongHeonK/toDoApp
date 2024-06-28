import ToDoWrapper from "./components/ToDoWrapper";

export default async function Home() {
  return (
    <main>
      <ToDoWrapper />
    </main>
  );
}

/**
 * 홈페이지 입니다.
 * 최상단에서 'use client'를 사용할 경우 자식요소들이 모드 클라이언트 컴포넌트로 변하기에,
 * 컴포넌트(ToDoWrapper)를 생성해 분리했습니다.
 */
