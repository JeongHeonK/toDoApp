import { NextApiRequest, NextApiResponse } from "next";

export default function todoHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    console.log("서버테스트");
    res.status(200).json("응답 테스트");
  } else {
    res.status(404).json("fail test");
  }
}
