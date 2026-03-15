import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "This is a normal page" });
});

app.listen(process.env.PORT, () => {
  console.log("SERVER IS ON: " + process.env.PORT);
});