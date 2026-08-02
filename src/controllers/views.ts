import {type Response} from "express"

export function homeIndex(req: any, res: Response) {
  res.render("index.ejs")
}

export function loginIndex(req: any, res: Response) {
  res.render("login.ejs")
}

export function registerIndex(req: any, res: Response) {
  res.render("register.ejs")
}
