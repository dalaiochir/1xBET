export type MatchStatus = 'LIVE' | 'UPCOMING' | 'FINISHED';
export type GameSlug = 'cs2' | 'dota-2' | 'league-of-legends' | 'valorant' | 'mobile-legends';
export interface EsportsGame { id:string; name:string; slug:GameSlug; icon:string }
export interface EsportsTeam { id:string; name:string; logo:string; gameId:string }
export interface EsportsTournament { id:string; name:string; region:string; gameId:string }
export interface EsportsMatch { id:string; gameId:string; tournamentId:string; teamAId:string; teamBId:string; startTime:string; status:MatchStatus; scoreA:number; scoreB:number; format:string }
