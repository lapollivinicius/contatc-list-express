export function homeIndex(req, res) {
    res.render("index.ejs");
}
export function loginIndex(req, res) {
    const message = req.flash("message")[0] || "";
    res.render("login.ejs", { message });
}
export function registerIndex(req, res) {
    const message = req.flash("message")[0] || "";
    const values = req.session.values || {};
    delete req.session.values;
    res.render("register.ejs", { values, message });
}
