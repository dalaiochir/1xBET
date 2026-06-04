import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { registerSchema } from '@/lib/validation';
import { bad, ok } from '@/lib/response';
import { redirect } from 'next/navigation';
export async function POST(req: Request) {
  const ct=req.headers.get('content-type')||'';
  let body:any;
  if(ct.includes('form')){const f=await req.formData();body={username:f.get('username'),email:f.get('email'),password:f.get('password')}} else body=await req.json();
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) return bad('Invalid registration data');
  const { username, email, password } = parsed.data;
  const exists = await prisma.user.findFirst({ where: { OR: [{ email }, { username }] } });
  if (exists) return bad('Email or username already exists', 409);
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({ data: { username, email, passwordHash, demoBalance: 10000, transactions: { create: { type: 'SIGNUP_BONUS', amount: 10000, balanceAfter: 10000 } } }, select: { id: true, email: true, username: true } });
  if(ct.includes('form')) redirect('/login');
  return ok({ user });
}
