import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import { FaQuoteLeft } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { MdFlightTakeoff, MdOutlineRoomService, MdVilla } from 'react-icons/md';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2400&q=80',
  mauritius:
    'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?auto=format&fit=crop&w=1200&q=80',
  maldives:
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
} as const;

const services = [
  {
    icon: MdVilla,
    title: 'Island Estates',
    body: 'Exclusive access to private island sanctuaries and secluded villas in the most desirable locales.',
    to: '/islands',
  },
  {
    icon: MdFlightTakeoff,
    title: 'Private Aviation',
    body: 'Seamless global connectivity with a fleet of ultra-long-range jets tailored to your schedule.',
    to: '/flights',
  },
  {
    icon: GiSailboat,
    title: 'Super Yacht Charters',
    body: "Navigate the world's most pristine waters aboard bespoke vessels with full-service crews.",
    to: '/yachts',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.hero}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>

        <div className="relative z-10 max-w-4xl px-container-margin-mobile text-left">
          <p className="mb-3 font-sans text-[11px] font-medium tracking-[0.35em] text-primary uppercase opacity-0 animate-fade-up md:text-[12px]">
            On the go tours presents
          </p>
          <h1 className="mb-6 font-headline text-5xl leading-[0.95] opacity-0 animate-fade-up md:text-7xl">
            <span className="block text-white">The art of</span>
            <span className="block text-white">extraordinary travel</span>
          </h1>
          <p className="mb-12 max-w-2xl text-lg text-on-surface-variant opacity-0 animate-fade-up-delay-1 md:text-xl">
            Curated private island retreats, super yacht expeditions, and global private aviation —
            starring Mauritius &amp; the Maldives.
          </p>
          <div className="opacity-0 animate-fade-up-delay-2">
            <a
              href="#consult"
              className="inline-block bg-primary px-10 py-5 text-[12px] font-bold tracking-[0.2em] text-on-primary uppercase transition-all duration-500 hover:bg-white hover:text-background"
            >
              Request a Consult
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio / Services */}
      <section
        id="portfolio"
        className="mx-auto max-w-[1440px] bg-background px-5 py-section-gap md:px-container-margin-desktop"
      >
        <div className="mb-20 text-center">
          <span className="text-[12px] font-bold tracking-[0.4em] text-primary uppercase">
            The Portfolio
          </span>
          <h2 className="mt-4 font-headline text-3xl text-white md:text-4xl">
            Unrivaled Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map(({ icon: Icon, title, body, to }) => {
            const cardClass =
              'group relative border border-white/5 bg-surface-container p-10 transition-all duration-500 hover:border-primary/30';
            const content = (
              <>
                <div className="mb-8">
                  <Icon className="text-4xl text-primary" aria-hidden />
                </div>
                <h3 className="mb-4 font-headline text-2xl text-white">{title}</h3>
                <p className="mb-6 leading-relaxed text-on-surface-variant">{body}</p>
                <div className="h-px w-12 bg-primary/30 transition-all duration-700 group-hover:w-full" />
              </>
            );

            return to ? (
              <Link key={title} to={to} className={`${cardClass} block no-underline`}>
                {content}
              </Link>
            ) : (
              <div key={title} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* Destinations */}
      <section
        id="destinations"
        className="overflow-hidden bg-surface-container-lowest py-section-gap text-on-surface"
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-container-margin-desktop">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="max-w-2xl">
              <span className="text-[12px] font-bold tracking-[0.4em] text-primary uppercase">
                Curated Escapes
              </span>
              <h2 className="mt-4 font-headline text-4xl text-white md:text-5xl">
                The World&apos;s Most
                <br />
                Exclusive Corners
              </h2>
            </div>
            <div className="pb-4">
              <a
                href="#consult"
                className="border-b border-primary pb-2 text-[12px] tracking-widest text-white uppercase transition-colors hover:text-primary"
              >
                Plan Your Escape
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="group cursor-pointer">
              <div className="image-inset-border relative mb-8 aspect-[4/5] overflow-hidden">
                <img
                  src={IMG.mauritius}
                  alt="Mauritius luxury coastline"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 transition-colors duration-500 group-hover:bg-transparent" />
              </div>
              <h3 className="mb-2 font-headline text-3xl text-primary">Mauritius</h3>
              <p className="text-lg text-on-surface-variant italic">The Island Sanctuary</p>
            </div>

            <div className="group cursor-pointer md:mt-24">
              <div className="image-inset-border relative mb-8 aspect-[4/5] overflow-hidden">
                <img
                  src={IMG.maldives}
                  alt="Maldives overwater villas"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 transition-colors duration-500 group-hover:bg-transparent" />
              </div>
              <h3 className="mb-2 font-headline text-3xl text-primary">The Maldives</h3>
              <p className="text-lg text-on-surface-variant italic">Overwater Opulence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-background py-section-gap">
        <div className="mx-auto max-w-4xl px-container-margin-mobile text-center">
          <FaQuoteLeft className="mx-auto mb-8 text-6xl text-primary/20" aria-hidden />
          <blockquote className="mb-12 font-headline text-2xl leading-relaxed text-white italic md:text-3xl">
            &ldquo;Travel is the only thing you buy that makes you richer. At Go Bespoke, we ensure
            the currency is one of profound meaning and absolute serenity.&rdquo;
          </blockquote>
          <p className="text-[12px] font-bold tracking-[0.4em] text-primary uppercase">
            — Go Bespoke · On The Go Tours
          </p>
        </div>
      </section>

      {/* Consult */}
      <section
        id="consult"
        className="mx-auto mb-20 max-w-[1440px] bg-surface-container-low px-5 py-section-gap md:px-container-margin-desktop"
      >
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div>
            <h2 className="mb-8 font-headline text-4xl text-white md:text-5xl">
              Begin Your Journey
            </h2>
            <p className="mb-12 text-lg text-on-surface-variant">
              Our concierge team is standing by to curate your next expedition. Provide your
              details, and a specialist will contact you within 24 hours.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <HiOutlineShieldCheck className="shrink-0 text-2xl text-primary" aria-hidden />
                <p className="font-medium text-white">Strict Confidentiality Guaranteed</p>
              </div>
              <div className="flex items-center gap-6">
                <MdOutlineRoomService className="shrink-0 text-2xl text-primary" aria-hidden />
                <p className="font-medium text-white">24/7 Global Support</p>
              </div>
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-primary/10 bg-surface-container-lowest pt-section-gap pb-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-5 md:flex-row md:px-container-margin-desktop">
          <div className="font-headline text-2xl tracking-[0.2em] text-white">GO BESPOKE</div>
          <nav className="flex flex-wrap justify-center gap-10">
            <a
              href="#portfolio"
              className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase transition-colors duration-300 hover:text-primary"
            >
              Portfolio
            </a>
            <a
              href="#destinations"
              className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase transition-colors duration-300 hover:text-primary"
            >
              Destinations
            </a>
            <a
              href="#consult"
              className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase transition-colors duration-300 hover:text-primary"
            >
              Concierge
            </a>
            <a
              href="/about"
              className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase transition-colors duration-300 hover:text-primary"
            >
              About
            </a>
          </nav>
          <div className="text-center text-[10px] font-bold tracking-widest text-on-surface-variant uppercase opacity-60 md:text-right">
            © {new Date().getFullYear()} Go Bespoke by On The Go Tours
          </div>
        </div>
      </footer>
    </>
  );
}
