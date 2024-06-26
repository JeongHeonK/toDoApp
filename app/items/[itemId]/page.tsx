import mockupData from "../../mockup.json";

import Button from "@/app/components/Button";
import DetailTitle from "@/app/components/DetailTitle";
import ImageInput from "@/app/components/ImageInput";
import MemoInput from "@/app/components/MemoInput";

export default function ItemDetail({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  const targetData = mockupData.find((item) => item.id === Number(itemId));
  return (
    <form className="max-w-screen-lg mx-auto mt-6">
      <DetailTitle
        isCompleted={targetData?.isCompleted}
        title={targetData?.name}
      />
      <div className="flex gap-3 mt-6">
        <ImageInput />
        <MemoInput />
      </div>
      <div className="flex justify-end gap-3 mt-6">
        <Button buttonType="submit" color="bg-slate-200">
          ✓ 수정 완료
        </Button>
        <Button buttonType="button" color="bg-rose-500 text-white">
          X 삭제하기
        </Button>
      </div>
    </form>
  );
}
