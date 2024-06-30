"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

import DetailTitle from "@/app/components/DetailTitle";
import ImageInput from "@/app/components/ImageInput";
import MemoInput from "@/app/components/MemoInput";

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

    try {
      const response = await axios.patch("/api/todoDetail", { detailData });
      router.push("/");
    } catch (e) {
      alert("수정할 수 없습니다. 다시 한 번 시도해주세요.");
      router.push("/");
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(`/api/todoDetail?id=${itemId}`);
      router.push("/");
    } catch (e) {
      alert("삭제할 수 없습니다. 다시 한 번 시도해주세요.");

      return;
    }
  };

  useEffect(() => {
    const getDetailData = async () => {
      try {
        const response = await axios.get("/api/todoDetail", {
          params: { itemId },
        });
        setDetailData(response.data);
      } catch (e) {
        alert("데이터를 불러오는데 실패했습니다.");

        return;
      }
    };

    getDetailData();
  }, [itemId]);

  return (
    <form
      onSubmit={handleSubmitClick}
      className="max-w-screen-lg mx-auto p-6 lg:p-0 lg:mt-6"
    >
      <DetailTitle
        value={detailData.name}
        onChange={handleChange}
        isCompleted={detailData?.isCompleted}
      />
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <ImageInput
          name="imageUrl"
          value={detailData.imageUrl}
          onChange={handleChange}
        />
        <MemoInput defaultValue={detailData.memo} onChange={handleChange} />
      </div>
      <div className="flex justify-center lg:justify-end gap-3 mt-6">
        <button
          className={`w-40 shadow-shadowCustom rounded-full border-2 border-slate-900 h-14 ${
            detailData.memo?.trim().length > 0 ? "bg-lime-300" : "bg-slate-200"
          }`}
        >
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

/**
 * detail페이지 입니다.
 * 로드 시, 전달된 id값을 통해 detail 정보를 수신합니다.
 * 모든 스테이트를 관리하고 있습니다.
 * 여기서 모든 업데이트를 관리하고, 제출 시 한번에 제출합니다.
 */
