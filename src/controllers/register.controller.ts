import type { Request, Response } from "express";
import { RegisterPayload } from "../zod/payloads.ts";

export const postUser = async (req: Request, res: Response) => {
  const data = RegisterPayload.safeParse(req.body);
  if (!data.success) {
    res.status(400).json({ result: data.error });
  } else {
    res.status(200).json({ result: data.success });
  }
};
