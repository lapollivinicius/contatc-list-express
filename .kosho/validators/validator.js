export function isString(value) {
    return typeof value === "string" || value instanceof String;
}
export function hasLength(value, min, max) {
    return value.length >= min && value.length <= max;
}
export function isRequired(value) {
    return value !== undefined && value !== null && value !== "";
}
export function isEmail(value) {
    const regex = /^[^\s@]+@(gmail|hotmail|outlook|yahoo|icloud)\.(com|com\.br)$/i;
    return regex.test(value);
}
export function isUsername(value) {
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(value);
}
