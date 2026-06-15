import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'color';
  width?: number;
  className?: string;
}

export function LogoSVG({ variant = 'color', width = 260, className = '' }: LogoProps) {
  const gold = '#e8a020';
  const navy = variant === 'light' ? '#ffffff' : '#1a3a5c';
  const goldColor = variant === 'light' ? 'rgba(255,255,255,0.85)' : gold;
  const textMain = variant === 'light' ? '#ffffff' : '#1a3a5c';
  const textSub = variant === 'light' ? 'rgba(255,255,255,0.65)' : '#9a7a5a';

  const h = Math.round(width * 100 / 300);

  return (
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width={width} height={h} className={className}>
      <polyline points="10,26 10,88 64,88" fill="none" stroke={goldColor} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="22,12 64,12 64,72" fill="none" stroke={navy} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="178" y="54" fontFamily="Georgia, serif" fontSize="36" fontWeight="700" fill={textMain} letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
      <text x="178" y="82" fontFamily="Arial, sans-serif" fontSize="12.5" fontWeight="700" fill={textSub} letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
    </svg>
  );
}

export function LogoSymbol({ color = '#1a3a5c', gold = '#e8a020', size = 60 }: { color?: string; gold?: string; size?: number }) {
  return (
    <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <polyline points="6,18 6,62 42,62" fill="none" stroke={gold} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="14,8 42,8 42,50" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
