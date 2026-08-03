import {type Response} from "express"
import { registerValidator } from "../validators/register.ts"


export function register(req: any, res: Response) {
  const body = req.body
  const validation = registerValidator(body)
  if(!validation.sucess) {
    req.flash("message", validation.message);
    req.session.values = req.body;
    res.status(400).redirect("/register")
    return
  }
  // save user in database
  req.flash("message", "User registered successfully. Please login.");
  res.status(201).redirect("/login")
}

export function login(req: any, res: Response) {
  const body = req.body
  // validate body
  // auth
  res.status(200).redirect("/")
}

export function logout(req: any, res: Response) {

  // destroy session

  res.status(200).redirect("/login")

}