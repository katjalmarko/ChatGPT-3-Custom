//Next.js API route support: https://nextjs.org/docs/api-routes-introduction
import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/chatgpt";

type Option = {}

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {