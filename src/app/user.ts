"use server"

import { db } from "@/db";
import { users } from "@/db/schema";

export async function insertOneUser(name: string, quizScore: number) {
    await db.insert(users).values({
        name,
        quizScore
    })
}