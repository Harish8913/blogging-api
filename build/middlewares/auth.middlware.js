import config from "../config/config";
export const authCheck = (req, res, next) => {
    if (config.nodeEnv === 'development') {
        next();
    }
    else {
        return res.status(401).json({ message: "Not Authenticated" });
    }
};
