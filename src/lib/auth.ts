import NextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [Credentials({ name: 'Credentials', credentials: { email: {}, password: {} }, async authorize(c) {
    if (!c?.email || !c?.password) return null;
    const user = await prisma.user.findUnique({ where: { email: c.email } });
    if (!user) return null;
    const ok = await bcrypt.compare(c.password, user.passwordHash);
    if (!ok) return null;
    return { id: user.id, email: user.email, name: user.username, role: user.role } as any;
  }})],
  callbacks: {
    async jwt({ token, user }) { if (user) { token.id = (user as any).id; token.role = (user as any).role; } return token; },
    async session({ session, token }) { (session.user as any).id = token.id; (session.user as any).role = token.role; return session; }
  },
  pages: { signIn: '/login' }
};
export const { handlers, auth, signIn, signOut } = NextAuth(authOptions as any) as any;
