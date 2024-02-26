import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/server/lib/mongodb";
import User from "@/server/models/user";
import { NEXTAUTH_SECRET } from "@/data/api/env";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            // * credentials - library arg. Use any for prevent errors
            async authorize(credentials: any) {
                const { password }: any = credentials;

                try {
                    await connectDB();
                    const user = await User.findOne({ password });
                    console.log(user);
                    
                    if (!user) return null;

                    const isDehashedPassMatch = await bcrypt.compare(password, user.password);
                    if (!isDehashedPassMatch) return null;

                    return user;
                } catch (error) {
                    console.error("Error:", error);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
