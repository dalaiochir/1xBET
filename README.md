# KoosenPredict Demo Esports Platform

Original demo-only esports prediction platform built with Next.js 15, TypeScript, Prisma, Neon PostgreSQL, NextAuth, CSS Modules/plain CSS, and Vercel.

> Demo coins only. No real-money gambling. No deposits. No withdrawals. For entertainment and educational purposes only.

## Legal and product scope

This is not a gambling platform. It has no deposits, withdrawals, payment gateway, crypto, cash-out feature, blockchain integration, financial rewards, or betting-license workflow. Demo balances have no real-world value.

## Stack

- Next.js App Router
- TypeScript
- Prisma ORM
- Neon PostgreSQL
- NextAuth credentials auth
- bcryptjs password hashing
- zod validation
- CSS Modules/plain CSS and global CSS variables
- Vercel deployment

## Install

```bash
npm install
cp .env.example .env
```

## Environment variables

```env
DATABASE_URL=""
DIRECT_URL=""
NEXTAUTH_SECRET=""
NEXTAUTH_URL="http://localhost:3000"
ESPORTS_API_PROVIDER="mock"
ESPORTS_API_KEY=""
```

## Prisma setup

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
```

Seed admin:

- Email: `admin@example.com`
- Password: `Admin12345`

## Neon setup

1. Create a Neon project.
2. Copy pooled connection string to `DATABASE_URL`.
3. Copy direct connection string to `DIRECT_URL`.
4. Add env vars to Vercel.
5. Deploy.
6. Run Prisma migrations with `npm run prisma:deploy`.

## Local development

```bash
npm run dev
```

Open `http://localhost:3000`.

## PandaScore integration

The provider interface is in `src/lib/esportsProvider.ts`.

Supported providers:

- `mock` by default
- `pandascore` through `ESPORTS_API_PROVIDER=pandascore`

No API keys are committed. The app does not scrape sportsbooks or copy sportsbook UI/branding.

## Production deployment on Vercel

Build command:

```bash
npm run build
```

The build script runs Prisma Client generation first:

```json
"build": "prisma generate && next build"
```

## Main routes

- `/`
- `/login`
- `/register`
- `/matches`
- `/matches/[id]`
- `/wallet`
- `/leaderboard`
- `/profile`
- `/admin`

## API routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/matches`
- `GET /api/matches/[id]`
- `POST /api/predictions`
- `GET /api/wallet`
- `POST /api/wallet/daily-claim`
- `GET /api/leaderboard`
- `POST /api/admin/matches`
- `PATCH /api/admin/matches/[id]`
- `DELETE /api/admin/matches/[id]`
- `POST /api/admin/matches/[id]/settle`

## Security notes

- Passwords are hashed with bcryptjs.
- Prediction inputs are zod-validated.
- Prediction placement uses Prisma transactions.
- Balances are deducted immediately.
- Settlements only affect pending predictions.
- Admin endpoints require role `ADMIN`.

## Troubleshooting

- If Prisma cannot connect, verify `DATABASE_URL` and `DIRECT_URL`.
- If auth redirects fail, verify `NEXTAUTH_URL` and `NEXTAUTH_SECRET`.
- If no matches appear, run `npm run db:seed`.
- On Vercel, ensure Neon env vars are set for Production and Preview.
"# 1xBET" 
