import { getErrorMessage } from "../utils/errorUtils.js";

export function errorMiddleware(err, req, res, next) {

    const status = err.status || 500;
    const message = getErrorMessage(err) || 'Internal Server Error';

    res.status(status).render('404', { error: message });
}