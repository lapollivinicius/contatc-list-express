export function checkCSFRError(err, req, res, next) {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.send('BAD CSRF');
    }
    next(err);
}
export function CRSFMiddleware(req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    next();
}
