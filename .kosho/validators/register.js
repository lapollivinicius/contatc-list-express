import { isRequired, isString, hasLength, isEmail, isUsername } from "./validator.js";
export function registerValidator(body) {
    for (const key in body) {
        const value = body[key];
        if (!isString(value)) {
            return { sucess: false, message: `The value in field ${key} is invalid.` };
        }
        if (!isRequired(value)) {
            return { sucess: false, message: `The field ${key} is required.` };
        }
        if (key === "email" && !isEmail(value)) {
            return { sucess: false, message: `The field ${key} must be a valid email (gmail, outlook, hotmail, yahoo, icloud).` };
        }
        if (key === "password" && !hasLength(value, 8, 50)) {
            return { sucess: false, message: `The field ${key} must have between 6 and 50 characters.` };
        }
        if (key === "username" && !hasLength(value, 5, 50)) {
            return { sucess: false, message: `The field ${key} must have between 5 and 50 characters.` };
        }
        else if (key === "username" && !isUsername(value)) {
            return { sucess: false, message: `The field ${key} must be a valid username (letters, numbers, and underscores only).` };
        }
    }
    return { sucess: true };
}
