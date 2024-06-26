"use client";
import mockupData from "../../mockup.json";
import { FormEvent, useState } from "react";

import DetailTitle from "@/app/components/DetailTitle";
import ImageInput from "@/app/components/ImageInput";
import MemoInput from "@/app/components/MemoInput";
import { ChangeEvent } from "react";
import { json } from "stream/consumers";

export default function ItemDetail({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  const targetData = mockupData.find((item) => item.id === Number(itemId));
  const [detailData, setDetailData] = useState({
    name: targetData?.name,
    memo: "",
    imageUrl: "",
    isCompleted: targetData?.isCompleted,
  });

  const handleChange = (name: string, value: string) => {
    setDetailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitClick = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/todo", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(detailData),
    });
    const result = await response.json();

    console.log(result);
  };

  const handleDeleteClick = async () => {
    const response = await fetch("/api/todo", {
      method: "DELETE",
      body: JSON.stringify(itemId),
    });
    const result = await response.json();

    console.log(result);
  };

  return (
    <form onSubmit={handleSubmitClick} className="max-w-screen-lg mx-auto mt-6">
      <DetailTitle
        value={detailData.name}
        onChange={handleChange}
        isCompleted={targetData?.isCompleted}
        title={targetData?.name}
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
