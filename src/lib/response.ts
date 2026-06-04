import { NextResponse } from 'next/server';
export const ok = (data: unknown) => NextResponse.json(data);
export const bad = (message: string, status = 400) => NextResponse.json({ error: message }, { status });
export const disclaimer = 'Demo coins only. No real-money gambling. No deposits. No withdrawals. For entertainment and educational purposes only.';
