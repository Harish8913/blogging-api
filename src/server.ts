import express from 'express';
import { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use('/', (req: Request, res: Response) => {
    console.log("Hey there")
    return res.json({"harish": "puri"})
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})