import Image from "next/image";
import uploadImg from "/public/img/uploadImg.png";
import { ChangeEvent, useRef, useState } from "react";
import axios from "axios";

type Props = {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
};

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

export default function ImageInput({ name, value, onChange }: Props) {
  const [preview, setPreview] = useState(value);
  const imgRef = useRef<HTMLInputElement>(null);

  const handleImgChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const nextValue = e.target.files[0];
      const fileSize = nextValue.size;

      if (fileSize > MAX_IMAGE_SIZE) {
        alert("5MB이하의 파일만 업로드 할 수 있습니다.");
        e.target.value = "";
        return;
      }

      // const formData = new FormData();
      // formData.append("image", nextValue);
      // const response = await fetch("/api/image", {
      //   method: "POST",
      //   body: formData,
      // });
      const nextPreview = URL.createObjectURL(nextValue);
      setPreview((prev) => nextPreview);
    }
  };

  return (
    <label
      htmlFor="imageUpload"
      className="relative w-full lg:w-2/5 h-80 rounded-xl border-2 border-dashed cursor-pointer"
    >
      {preview ? (
        <Image
          src={preview}
          alt="preview"
          objectFit="contain"
          fill
          className="object-cover"
        />
      ) : (
        <Image
          className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
          src={uploadImg}
          alt="upload-logo"
          width={54}
        />
      )}
      <div
        className={`size-16 text-slate-500 bg-slate-200 rounded-full absolute bottom-2 right-2 ${
          preview ? "bg-btn-edit" : "bg-btn-plus"
        }`}
      ></div>
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
