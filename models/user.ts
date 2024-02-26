import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // * For get username from session in next-auth, use "name" instead username or fullname field
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
