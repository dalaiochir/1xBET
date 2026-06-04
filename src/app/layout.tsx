import './globals.css';
import type { ReactNode } from 'react';
import Shell from '@/components/Shell';
export const metadata={title:'KoosenPredict Demo',description:'Demo-only esports prediction platform'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
