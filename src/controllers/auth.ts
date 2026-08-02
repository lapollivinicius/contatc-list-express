import {type Response} from "express"

export function login(req: any, res: Response) {
  res.send(req.body)
}