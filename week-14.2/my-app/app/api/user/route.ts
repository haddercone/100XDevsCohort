
import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/db"
export async function GET() {
    const user = await prisma.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}

export async function POST(req: NextRequest) {
    const body = await req.json()

    const user = await  prisma.user.create({
        data: {
            username: body.username as string,
            password: body.password as string
        }
    })
    console.log(user.id);
    
    return NextResponse.json({ message: "Signed up" });
}