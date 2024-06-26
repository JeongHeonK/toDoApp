"use client";
import Image from "next/image";
import uploadImg from "/public/img/uploadImg.png";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

export default function ImageInput() {
  const [preview, setPreview] = useState("");
  const imgRef = useRef<HTMLInputElement>(null);

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const nextValue = e.target.files[0];
      const fileSize = nextValue.size;

      if (fileSize > MAX_IMAGE_SIZE) {
        alert("5MB이하의 파일만 업로드 할 수 있습니다.");
        e.target.value = "";
        return;
      }

      const nextPreview = URL.createObjectURL(nextValue);
      setPreview((prev) => nextPreview);
    }
  };

  return (
    <label
      htmlFor="imageUpload"
      className="relative w-2/5 h-80 rounded-xl border-2 border-dashed cursor-pointer"
    >
      {preview ? (
        <Image
          src={preview}
          alt="preview"
          objectFit="contain"
          fill
          className="overflow-hidden block"
        />
      ) : (
        <Image
          className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
          src={uploadImg}
          alt="upload-logo"
          width={54}
        />
      )}
      <div className="size-16 text-slate-500 bg-slate-200 text-4xl rounded-full text-center pt-3 absolute bottom-2 right-2">
        +
      </div>
      <input
        type="file"
        id="imageUpload"
        ref={imgRef}
        onChange={handleImgChange}
        hidden
      />
    </label>
  );
}
