import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { games, teams, tournaments, matches } from '../src/data/mockEsports';
const prisma = new PrismaClient();
async function main(){
  await prisma.prediction.deleteMany(); await prisma.demoTransaction.deleteMany(); await prisma.outcome.deleteMany(); await prisma.market.deleteMany(); await prisma.match.deleteMany(); await prisma.team.deleteMany(); await prisma.tournament.deleteMany(); await prisma.game.deleteMany(); await prisma.user.deleteMany();
  for(const g of games) await prisma.game.create({data:g});
  for(const t of tournaments) await prisma.tournament.create({data:t});
  for(const t of teams) await prisma.team.create({data:t});
  for(const m of matches){await prisma.match.create({data:{...m,startTime:new Date(m.startTime),markets:{create:[{marketType:'Match Winner',isLocked:m.status==='FINISHED',outcomes:{create:[{name:'Team A',multiplier:1.85,isWinner:m.status==='FINISHED'&&m.scoreA>m.scoreB},{name:'Team B',multiplier:1.95,isWinner:m.status==='FINISHED'&&m.scoreB>m.scoreA}]}},{marketType:'Map Winner',isLocked:m.status==='FINISHED',outcomes:{create:[{name:'Map 1 Team A',multiplier:1.9},{name:'Map 1 Team B',multiplier:1.9}]}},{marketType:'Over/Under Maps',isLocked:m.status==='FINISHED',outcomes:{create:[{name:'Over 2.5',multiplier:2.05},{name:'Under 2.5',multiplier:1.72}]}}]}}});}
  const passwordHash=await bcrypt.hash('Admin12345',12);
  await prisma.user.create({data:{email:'admin@example.com',username:'admin',passwordHash,role:'ADMIN',demoBalance:10000,transactions:{create:{type:'SIGNUP_BONUS',amount:10000,balanceAfter:10000}}}});
}
main().finally(()=>prisma.$disconnect());
