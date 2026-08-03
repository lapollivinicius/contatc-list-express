import mongoose from "mongoose";
import { userSchema } from "../schemas/user.js";

const user = mongoose.model("User", userSchema);