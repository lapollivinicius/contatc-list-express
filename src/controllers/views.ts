import {type Response} from "express"

export function homeIndex(req: any, res: Response) {
  res.render("index.ejs")
}

export function loginIndex(req: any, res: Response) {
  const message = req.flash("message")[0] || "";

  res.render("login.ejs", {message})
}

export function registerIndex(req: any, res: Response) {

  const message = req.flash("message")[0] || "";
  const values = req.session.values || {};

  delete req.session.values;

  res.render("register.ejs", { values, message})
}
