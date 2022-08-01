import { prisma } from "../database.js";

async function resetDatabase() {
  await prisma.$executeRaw`TRUNCATE TABLE recommendations RESTART IDENTITY`;
}

export const testRepository = { resetDatabase };
