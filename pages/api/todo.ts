import { NextApiRequest, NextApiResponse } from "next";

export default function todoHandler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      console.log("서버테스트");
      res.status(200).json("응답 테스트");
      break;
    case "PATCH":
      console.log(req.body);
      res.status(200).json("수정 요청 응답");
      break;
    case "DELETE":
      console.log(req.body);
      res.status(200).json("삭제 요청 완료");
      break;
    default:
      res.status(404).json("fail test");
      break;
  }
}
