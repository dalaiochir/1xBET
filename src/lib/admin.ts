import { getServerSession } from 'next-auth';
import { authOptions } from './auth';
export async function requireAdmin(){const s=await getServerSession(authOptions);if(!s?.user || (s.user as any).role!=='ADMIN') throw new Error('Admin access required');return s;}
