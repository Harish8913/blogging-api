import { Request, Response } from "express";

export default (req: Request, res: Response) => {
    const { userName, password } = req.body;
}