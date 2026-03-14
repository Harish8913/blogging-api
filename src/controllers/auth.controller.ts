import type { Request, Response } from "express"

export const authController = async (req: Request, res: Response) => {
    console.log("Hey there")
    return res.status(200).json({message: "Harish"})
}