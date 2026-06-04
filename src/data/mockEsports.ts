import { EsportsGame, EsportsMatch, EsportsTeam, EsportsTournament } from '@/types/esports';
export const games: EsportsGame[] = [
{id:'g-cs2',name:'CS2',slug:'cs2',icon:'🎯'},{id:'g-dota',name:'Dota 2',slug:'dota-2',icon:'🛡️'},{id:'g-lol',name:'League of Legends',slug:'league-of-legends',icon:'🐉'},{id:'g-val',name:'Valorant',slug:'valorant',icon:'⚡'},{id:'g-ml',name:'Mobile Legends',slug:'mobile-legends',icon:'📱'}];
export const teams: EsportsTeam[] = Array.from({length:12},(_,i)=>({id:`team-${i+1}`,name:['Neon Raptors','Atlas Five','Storm Foxes','Byte Titans','Nova Syndicate','Khan Wolves','Lunar Hawks','Pulse Ninjas','Orchid Phoenix','Iron Nomads','Zenith Vipers','Magma Owls'][i],logo:'◆',gameId:games[i%5].id}));
export const tournaments: EsportsTournament[] = [
{id:'t-1',name:'Aurora Invitational',region:'Asia',gameId:'g-cs2'},{id:'t-2',name:'Metro Rift Cup',region:'Europe',gameId:'g-lol'},{id:'t-3',name:'Nomad Masters',region:'Mongolia',gameId:'g-dota'},{id:'t-4',name:'Pacific Circuit',region:'APAC',gameId:'g-val'}];
const statuses = ['LIVE','UPCOMING','FINISHED'] as const;
export const matches: EsportsMatch[] = Array.from({length:20},(_,i)=>{ const game=games[i%5]; return { id:`match-${i+1}`, gameId:game.id, tournamentId:tournaments[i%4].id, teamAId:teams[i%12].id, teamBId:teams[(i+5)%12].id, startTime:new Date(Date.now()+((i-6)*3600_000)).toISOString(), status:statuses[i%3], scoreA:i%3===2?Math.floor(Math.random()*3):0, scoreB:i%3===2?Math.floor(Math.random()*3):0, format:i%2?'BO3':'BO5'}; });
