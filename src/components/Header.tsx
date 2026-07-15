import { Button } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/destinations', label: 'Destinations' },
  { to: '/yachts', label: 'Yachts' },
  { to: '/flights', label: 'Flights' },
  { to: '/cars', label: 'Cars' },
  { to: '/about', label: 'About' },
] as const;

type HeaderProps = {
  onInquire: () => void;
};

export default function Header({ onInquire }: HeaderProps) {
  const [scroll] = useWindowScroll();
  const scrolled = scroll.y > 100;

  return (
    <header
      id="top-nav"
      className={[
        'fixed top-0 z-50 w-full transition-all duration-500 ease-in-out',
        scrolled ? 'nav-scrolled' : 'border-b border-white/10 bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-container-margin-desktop">
        <NavLink to="/" className="flex items-center no-underline" aria-label="Go Bespoke home">
          <img
            src="/PNG%20Logos/9.png"
            alt="Go Bespoke"
            className="h-16 w-auto object-contain md:h-24"
          />
        </NavLink>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                [
                  'pb-1 text-[12px] tracking-widest uppercase no-underline transition-colors duration-300',
                  isActive && ['/about', '/destinations', '/yachts', '/flights', '/cars'].includes(to)
                    ? 'border-b border-primary/50 text-primary'
                    : 'text-on-surface-variant hover:text-primary',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Button
          type="button"
          onClick={onInquire}
          unstyled
          className="bg-primary px-6 py-3 text-[12px] font-bold tracking-widest text-on-primary uppercase transition-all duration-300 hover:brightness-110 md:px-8"
        >
          Curate My Journey
        </Button>
      </div>
    </header>
  );
}
