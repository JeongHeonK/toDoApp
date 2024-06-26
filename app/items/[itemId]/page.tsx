import mockupData from "../../mockup.json";
import Image from "next/image";
import StateIndicator from "@/app/components/StateIndicator";
import uploadImg from "/public/img/uploadImg.png";

export default function ItemDetail({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  const targetData = mockupData.find((item) => item.id === Number(itemId));
  return (
    <form className="max-w-screen-lg mx-auto mt-6">
      <div className="border-2 border-slate-900 rounded-xl py-2 flex justify-center gap-4 bg-white">
        <StateIndicator isCompleted={targetData?.isCompleted} />
        <input
          className="underline w-fit focus:outline-none"
          type="text"
          defaultValue={targetData?.name}
        />
      </div>
      <div className="flex gap-3 mt-6">
        <label
          htmlFor="imageUpload"
          className="relative w-2/5 h-80 rounded-xl border-2 border-dashed cursor-pointer"
        >
          <Image
            className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
            src={uploadImg}
            alt="upload-logo"
            width={54}
          />
          <div className="size-16 text-slate-500 bg-slate-200 text-4xl rounded-full text-center pt-3 absolute bottom-2 right-2">
            +
          </div>
          <input type="file" id="imageUpload" hidden />
        </label>
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
      </div>
      <div className="flex justify-end gap-3 mt-6">
        <button className="w-40 bg-slate-200 shadow-shadowCustom rounded-full border-2 border-slate-900 h-14">
          ✓ 수정 완료
        </button>
        <button
          type="button"
          className="w-40 bg-rose-500 shadow-shadowCustom rounded-full border-2 border-slate-900 h-14 text-white"
        >
          X 삭제하기
        </button>
      </div>
    </form>
  );
}
