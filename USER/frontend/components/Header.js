'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="main-header">
        <nav className="main-nav">
            <div className="nav-group nav-left">
                <Link href="/home" className={`nav-link ${pathname === '/home' ? 'active' : ''}`}>Home</Link>
                <Link href="/collection" className={`nav-link ${pathname === '/collection' ? 'active' : ''}`}>Collections</Link>
            </div>
            <Link href="/" className="nav-logo">
                <Image src="/images/2107_876.svg" alt="Yaritu Logo" width={160} height={75} />
            </Link>
            <div className="nav-group nav-right">
                <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
                <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                <Link href="/review" className={`nav-link ${pathname === '/review' ? 'active' : ''}`}>Reviews</Link>
            </div>
            <Link href="/offer" className="nav-offers">
                <Image src="/images/bf50833544d174d4920b9795788390ca4584af58.png" alt="Hot Sale Icon" className="offer-icon" width={37} height={37} />
                <span>Offers</span>
            </Link>
        </nav>
    </header>
  );
}
