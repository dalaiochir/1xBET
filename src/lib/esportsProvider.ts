import { games, matches, teams, tournaments } from '@/data/mockEsports';
export interface EsportsProvider { getUpcomingMatches():Promise<any[]>; getLiveMatches():Promise<any[]>; getFinishedMatches():Promise<any[]>; getMatchById(id:string):Promise<any|null>; getTeams():Promise<any[]>; getTournaments():Promise<any[]>; }
class MockProvider implements EsportsProvider {
  async getUpcomingMatches(){return matches.filter(m=>m.status==='UPCOMING')}
  async getLiveMatches(){return matches.filter(m=>m.status==='LIVE')}
  async getFinishedMatches(){return matches.filter(m=>m.status==='FINISHED')}
  async getMatchById(id:string){return matches.find(m=>m.id===id) ?? null}
  async getTeams(){return teams}
  async getTournaments(){return tournaments}
}
class PandaScoreProvider extends MockProvider { private key=process.env.ESPORTS_API_KEY; async fetchJson(path:string){ const res=await fetch(`https://api.pandascore.co${path}`,{headers:{Authorization:`Bearer ${this.key}`},next:{revalidate:60}}); if(!res.ok) throw new Error('PandaScore API error'); return res.json(); } }
export const getEsportsProvider = (): EsportsProvider => process.env.ESPORTS_API_PROVIDER === 'pandascore' ? new PandaScoreProvider() : new MockProvider();
export { games, teams, tournaments, matches };
