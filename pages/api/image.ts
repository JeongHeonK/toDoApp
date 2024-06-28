import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import axios from "axios";
import instance from "@/lib/axios";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function imageHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const form = formidable({});
    let fields;
    let files;
    try {
      [fields, files] = await form.parse(req);
    } catch (e) {
      res.status(500).json(e);

      return;
    }
    if (files !== undefined) {
      // const [uploadFile] = files.image;
      // console.log(uploadFile);
      // const formData = new FormData();
      // formData.append("image", uploadFile);
      // fetch(`${process.env.BASE_URL}/images/upload`, {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then((r) => r.json())
      //   .then((data) => console.log(data))
      //   .catch((e) => console.log(e));
    }
  }
}
