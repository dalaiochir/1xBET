import { prisma } from '@/lib/prisma';import { bad, ok } from '@/lib/response';
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const m=await prisma.match.findUnique({where:{id},include:{game:true,tournament:true,teamA:true,teamB:true,markets:{include:{outcomes:true}}}});return m?ok(m):bad('Not found',404)}
