import { type Request, type Response, type NextFunction } from "express";
    
export function checkCSFRError(err: any, req: Request, res: Response, next: NextFunction) {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.send('BAD CSRF');
  }
  next(err);
}

export function CRSFMiddleware(req: Request, res: Response, next: NextFunction) {
  res.locals.csrfToken = req.csrfToken();
  next();
}