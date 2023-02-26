import Link from 'next/link';

import { StremioLogo } from '@/public/assets/stremio-logo';

export default function Header() {
  return (
    <header className="sticky">
      <nav className="navbar">
        <div className="flex-1 gap-16">
          <Link href="/">
            <StremioLogo className="h-16" />
          </Link>
          <ul className="flex flex-row gap-8">
            <li>
              <Link href="/watching">Watching</Link>
            </li>
            <li>
              <Link href="/discover">Discover</Link>
            </li>
            <li>
              <Link href="/library">Library</Link>
            </li>
            <li>
              <Link href="/calendar">Calendar</Link>
            </li>
          </ul>
        </div>
        <div className="flex-none" />
      </nav>
    </header>
  );
}
