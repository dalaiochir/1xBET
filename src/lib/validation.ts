import { z } from 'zod';
export const registerSchema = z.object({ username: z.string().min(3).max(24), email: z.string().email(), password: z.string().min(8).max(100) });
export const predictionSchema = z.object({ matchId: z.string(), marketId: z.string(), outcomeId: z.string(), stakeAmount: z.number().int().positive().max(1000000) });
export const matchSchema = z.object({ gameId:z.string(), tournamentId:z.string(), teamAId:z.string(), teamBId:z.string(), startTime:z.string(), status:z.enum(['LIVE','UPCOMING','FINISHED']), scoreA:z.number().int().min(0).default(0), scoreB:z.number().int().min(0).default(0), format:z.string().min(2) });
