import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export const middleware = (req: Request, res: Response, next: Function) => {
    const token = req.headers.authorization ?? ''

    const decoded = jwt.verify(token, JWT_SECRET)

    if (decoded) {
        req.userId = decoded.userId
        next()
    } else {
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
}