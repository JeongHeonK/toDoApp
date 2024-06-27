"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import DetailTitle from "@/app/components/DetailTitle";
import ImageInput from "@/app/components/ImageInput";
import MemoInput from "@/app/components/MemoInput";
import { ChangeEvent } from "react";
import axios from "axios";

const defaultValue = {
  name: "",
  memo: "",
  imageUrl: "",
  isCompleted: false,
};

export default function ItemDetail({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  const [detailData, setDetailData] = useState(defaultValue);
  const router = useRouter();

  const handleChange = (name: string, value: string) => {
    setDetailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitClick = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.patch("/api/todoDetail", { detailData });
    router.push("/");
  };

  const handleDeleteClick = async () => {
    const response = await axios.delete(`/api/todoDetail?id=${itemId}`);
    router.push("/");
  };

  useState(() => {
    const getDetailData = async () => {
      const response = await axios.get("/api/todoDetail", {
        params: { itemId },
      });
      setDetailData(response.data);
    };
    getDetailData();
  });

  return (
    <form onSubmit={handleSubmitClick} className="max-w-screen-lg mx-auto mt-6">
      <DetailTitle
        value={detailData.name}
        onChange={handleChange}
        isCompleted={detailData?.isCompleted}
        title={detailData?.name}
      />
      <div className="flex gap-3 mt-6">
        <ImageInput
          name="imageUrl"
          value={detailData.imageUrl}
          onChange={handleChange}
        />
        <MemoInput defaultValue={detailData.memo} onChange={handleChange} />
      </div>
      <div className="flex justify-end gap-3 mt-6">
        <button className="w-40 shadow-shadowCustom rounded-full border-2 border-slate-900 h-14 bg-slate-200">
          ✓ 수정 완료
        </button>
        <button
          type="button"
          onClick={handleDeleteClick}
          className="w-40 shadow-shadowCustom rounded-full border-2 border-slate-900 h-14 bg-rose-500 text-white"
        >
          X 삭제하기
        </button>
      </div>
    </form>
  );
}
