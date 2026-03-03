import { Request, Response, NextFunction } from "express";
import config from "../config/config";

export const authCheck = (req:Request, res: Response, next: NextFunction) => {
    if(config.nodeEnv === 'development'){ 
        next();
    }else{
        return res.status(401).json({message: "Not Authenticated"});
    }
}