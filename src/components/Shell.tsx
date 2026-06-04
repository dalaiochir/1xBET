import Link from 'next/link';
import type { ReactNode } from 'react';
import './noop.css';
const links=[['/','Home'],['/matches','Matches'],['/wallet','Wallet'],['/leaderboard','Leaderboard'],['/profile','Profile'],['/admin','Admin']];
export default function Shell({children}:{children:ReactNode}){return <div className="layout"><aside className="sidebar"><div className="brand">Koosen<span>Predict</span></div><nav className="nav">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav></aside><main className="main">{children}</main><nav className="bottomNav">{links.slice(0,5).map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav></div>}
