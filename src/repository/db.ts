import { User, user } from "../models/user.js";

export async function createUser(body: User) {
  try {
    await user.create(body) 
  } catch(e) {
    return {success: false, error: "Database error"}
  }
  return {success: true}
}
export async function getUser(username: string) {
  try {
    const currentUser = await user.findOne({ username });
    if (!currentUser) {
      return {
        success: false,
        error: "User not found"
      };
    }
    return {
      success: true,
      user: currentUser
    };
  } catch (e) {
    return {
      success: false,
      error: "Database error"
    };
  }
}