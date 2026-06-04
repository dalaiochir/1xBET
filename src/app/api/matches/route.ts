import { prisma } from '@/lib/prisma';import { ok } from '@/lib/response';
export async function GET(){return ok(await prisma.match.findMany({include:{game:true,tournament:true,teamA:true,teamB:true,markets:{include:{outcomes:true}}}}))}
