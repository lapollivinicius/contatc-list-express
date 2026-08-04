import {type Response} from "express"
import { loginValidator, registerValidator } from "../validators/register.js"
import { createUser, getUser } from "../repository/db.js";
import bcrypt from "bcrypt";

export async function register(req: any, res: Response) {
  const body = req.body
  const validation = registerValidator(body)

  if(!validation.success) {
    req.flash("errors", validation.message);
    req.session.values = req.body;
    req.session.save(() => {
      res.redirect("/register");
      return
    });
    return
  }

  const passwordHash = await bcrypt.hash(body.password, 12);

  const isCreated = await createUser({
    ...body,
    password: passwordHash,
  });

  if(!isCreated.success) {
    req.flash("errors", isCreated.error);
    req.session.save(() => {
      res.redirect("/login");
      return
    });
  }

  req.flash("messages", "User registered successfully. Please login.");
  req.session.save(() => {
    res.redirect("/login");
    return
  });
}

export async function login(req: any, res: Response) {
  const body = req.body

  const validation = loginValidator(body)

  if(!validation.success) {
    req.flash("errors", validation.message);
    req.session.save(() => {
      res.redirect("/login");
      return
    });
    return
  }

   const response = await getUser(body.username);

  if (!response.success || !response.user) {
    req.flash("errors", response.error);

    return req.session.save(() => {
      res.redirect("/login");
    });
  }

  const currentUser = response.user

  const isValid = await bcrypt.compare(
    body.password,
    currentUser.password
  );

  if (!isValid) {
    req.flash("errors", "Invalid username or password");

    return req.session.save(() => {
      res.redirect("/login");
    });
  }

  // auth jwt - cookie and section

  res.redirect("/")
}

export function logout(req: any, res: Response) {

  // destroy session

  res.redirect("/login")

}