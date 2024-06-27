import { NextApiRequest, NextApiResponse } from "next";
import instance from "@/lib/axios";

export default async function todoDetailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { itemId } = req.query;
    try {
      const response = await instance.get(`items/${itemId}`);

      res.status(200).json(response.data);
    } catch (e) {
      console.log(e);

      return;
    }
  } else if (req.method === "PATCH") {
    const { id, name, memo, imageUrl, isCompleted } = req.body.detailData;

    try {
      const response = await instance.patch(`items/${id}`, {
        name,
        memo,
        imageUrl,
        isCompleted,
      });

      res.status(200).json("수정 완료");
    } catch (e) {
      console.log(e);

      return;
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      const response = await instance.delete(`items/${id}`);

      res.status(200).json(response.data);
    } catch (e) {
      console.log(e);

      return;
    }
  } else {
    res.status(404).json("잘못된 요청입니다.");

    return;
  }
}
