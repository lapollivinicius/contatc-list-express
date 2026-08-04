import { registerValidator } from "../validators/register.js";
export function register(req, res) {
    const body = req.body;
    const validation = registerValidator(body);
    if (!validation.sucess) {
        req.flash("message", validation.message);
        req.session.values = req.body;
        res.status(400).redirect("/register");
        return;
    }
    // save user in database
    req.flash("message", "User registered successfully. Please login.");
    res.status(201).redirect("/login");
}
export function login(req, res) {
    const body = req.body;
    // validate body
    // auth
    res.status(200).redirect("/");
}
export function logout(req, res) {
    // destroy session
    res.status(200).redirect("/login");
}
