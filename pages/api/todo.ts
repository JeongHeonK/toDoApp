import { NextApiRequest, NextApiResponse } from "next";
import instance from "@/lib/axios";

export default async function todoHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await instance.get("/items");
      res.status(200).json(response.data);
    } catch (e) {
      const error = e as Error;
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const { name } = req.body;
      const response = await instance.post("/items", { name });
      res.status(200).json(response.data);
    } catch (e) {
      const error = e as Error;
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "PATCH") {
    const { id, name, isCompleted } = req.body;
    try {
      const response = await instance.patch(`/items/${id}`, {
        name,
        isCompleted,
        memo: "",
        imageUrl: "",
      });
    } catch (e: any) {
      console.log(e.details);
    }
    res.redirect(302, "/");
  } else {
    res.status(405).json({ error: "Please check method again" });
  }
}
