export default function MemoInput() {
  return (
    <div className="grow relative rounded-xl bg-memo-pattern flex flex-col justify-center">
      <p className="absolute w-fit left-0 right-0 mx-auto top-3 text-xl text-amber-800">
        Memo
      </p>
      <textarea
        rows={1}
        name="toDoMemo"
        placeholder="여기에 입력해주세요."
        className="w-full h-auto rounded-xl resize-none text-center bg-transparent focus:outline-none"
      />
    </div>
  );
}
