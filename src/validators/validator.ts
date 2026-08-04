export function isString(value: unknown): boolean {
  return typeof value === "string" || value instanceof String;
}

export function hasLength(value: string, min: number, max: number): boolean {
  return value.length >= min && value.length <= max;
}

export function isRequired(value: unknown): boolean {
  return value !== undefined && value !== null && value !== "";
}

export function isEmail(value: string): boolean {
  const regex =
    /^[^\s@]+@(gmail|hotmail|outlook|yahoo|icloud)\.(com|com\.br)$/i;
  return regex.test(value);
}

export function isUsernameValid(value: string): boolean {
  const regex = /^[a-zA-Z0-9_]+$/;
  return regex.test(value);
}

export function isPasswordStrong(value: string) {
  if (!/[a-z]/.test(value)) return false;
  if (!/[A-Z]/.test(value)) return false;
  if (!/\d/.test(value)) return false;
  if (!/[@$!%*?&#+_\-]/.test(value)) return false;
  return true;
}