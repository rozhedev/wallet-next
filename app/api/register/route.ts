import { connectDB } from "@/server/lib/mongodb";
import User from "@/server/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PASS_SALT } from "@/data/api/env";

export async function POST(req: Request, res: Response) {
    try {
        const { name, email, password } = await req.json();
        await connectDB();
        const existUser = await User.findOne({ email }).select("_id");

        if (existUser) return NextResponse.json({ existUser });

        const hashedPass = await bcrypt.hash(password, PASS_SALT);
        await User.create({ name, email, password: hashedPass });

        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured while register" }, { status: 500 });
    }
}
