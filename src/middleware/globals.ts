import { type Request, type Response, type NextFunction } from "express";

export function globalMiddleware(req: Request, res: Response, next: NextFunction) {

  res.locals.errors = req.flash("errors")[0] || "";
  res.locals.messages = req.flash("messages")[0] || "";
  
  next()
}