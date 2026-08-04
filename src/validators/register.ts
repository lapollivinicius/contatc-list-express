import { isRequired, isString, hasLength, isEmail, isUsernameValid, isPasswordStrong} from "./validator.js";

export function registerValidator(body: any) {

  for (const key in body) {
    const value = body[key];

    if (!isString(value)) {
      return {success: false, message: `The value in field ${key} is invalid.`};
    }

    if (!isRequired(value)) {
      return {success: false, message: `The field ${key} is required.`};
    }

    if (key === "email" && !isEmail(value)) {
      return {success: false, message: `The field ${key} must be a valid email (gmail, outlook, hotmail, yahoo, icloud).`};
    }

    if (key === "password" && !hasLength(value, 8, 50)) {
      return {success: false, message: `The field ${key} must have between 6 and 50 characters.`};
    } else if (key === "password" && !isPasswordStrong(value)) {
      return {success: false, message: `The ${key} must be 8-64 characters long and contain uppercase, lowercase, numbers, and special characters.`};
    }

    if (key === "username" && !hasLength(value, 5, 50)) {
      return {success: false, message: `The field ${key} must have between 5 and 50 characters.`};
    } else if (key === "username" && !isUsernameValid(value)) {
      return {success: false, message: `The field ${key} must be a valid username (letters, numbers, and underscores only).`};
    }

  }

  return {success: true}

}

export function loginValidator(body: any) {

  for (const key in body) {
    const value = body[key];

    if (!isString(value)) {
      return {success: false, message: `The value in field ${key} is invalid.`};
    }

    if (!isRequired(value)) {
      return {success: false, message: `The field ${key} is required.`};
    }

    if (key === "username" && !hasLength(value, 5, 50)) {
      return {success: false, message: `The value in field ${key} is invalid.`};
    } else if (key === "username" && !isUsernameValid(value)) {
      return {success: false, message: `The value in field ${key} is invalid.`};
    }

    if (key === "password" && !hasLength(value, 8, 50)) {
      return {success: false, message: `The value in field ${key} is invalid.`};
    } else if (key === "password" && !isPasswordStrong(value)) {
      return {success: false, message: `The value in field ${key} is invalid.`};
    }

  }

  return {success: true}

}