import ToDoInput from "./components/ToDoInput";
import Header from "./components/Header";

import ToDoBox from "./components/ToDoBox";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ToDoInput />
        <section className="max-w-screen-lg mx-auto flex justify-center gap-12">
          <ToDoBox isCompleted={false} />
          <ToDoBox isCompleted />
        </section>
      </main>
    </>
  );
}
