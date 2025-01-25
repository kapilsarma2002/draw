import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export const middleware = (req: Request, res: Response, next: Function) => {
    const token = req.headers.authorization ?? ''

    const decoded = jwt.verify(token, JWT_SECRET)

    if (decoded) {
        req.userId = (decoded as JwtPayload).userId
        next()
    } else {
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
}