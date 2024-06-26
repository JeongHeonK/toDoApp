"use client";
import Image from "next/image";
import uploadImg from "/public/img/uploadImg.png";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function ImageInput() {
  const [preview, setPreview] = useState("");
  const imgRef = useRef<HTMLInputElement>(null);

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const nextValue = e.target.files[0];
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
