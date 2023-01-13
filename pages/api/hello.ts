// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

/**
 * Default handler function to handle api requests
 * @param {NextApiRequest} req
 * @param {NextApiResponse<Data>} res
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe" });
}
