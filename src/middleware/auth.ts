import { type Request, type Response, type NextFunction } from "express";

export function auth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  next();
}