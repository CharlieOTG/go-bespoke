import { Link } from 'react-router-dom';
import MeetTheTeam from '../components/MeetTheTeam';

type AboutProps = {
  onInquire: () => void;
};

export default function About({ onInquire }: AboutProps) {
  return (
    <>
      <section className="relative flex min-h-[70vh] w-full items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-container-margin-mobile py-24 text-center md:px-container-margin-desktop">
          <p className="mb-4 font-headline text-lg tracking-[0.35em] text-primary uppercase opacity-0 animate-fade-up">
            Go Bespoke
          </p>
          <h1 className="mb-6 font-headline text-4xl text-white opacity-0 animate-fade-up md:text-5xl">
            Our Mission
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-white md:text-xl">
          <span className="italic">
            "To inspire the world to travel without limits, experience without compromise, and create memories that endure for generations.
            We are dedicated to crafting journeys of exceptional beauty, effortless elegance, and unparalleled service—where every detail is intentional, every experience is extraordinary, and every client feels truly valued.
            Because true luxury isn't what you own—it's what you experience."
          </span>
          {' '}<br /><br />- Charles Ashworth (Founder & CEO)
        </p>
        </div>
      </section>

      <MeetTheTeam onInquire={onInquire} />

      <footer className="w-full border-t border-primary/10 bg-surface-container-lowest pt-16 pb-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-5 md:flex-row md:px-container-margin-desktop">
          <div className="font-headline text-2xl tracking-[0.2em] text-white">GO BESPOKE</div>
          <nav className="flex flex-wrap justify-center gap-10">
            <Link
              to="/"
              className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase no-underline transition-colors duration-300 hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/#consult"
              className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase no-underline transition-colors duration-300 hover:text-primary"
            >
              Concierge
            </Link>
          </nav>
          <div className="text-center text-[10px] font-bold tracking-widest text-on-surface-variant uppercase opacity-60 md:text-right">
            © {new Date().getFullYear()} Go Bespoke by On The Go Tours
          </div>
        </div>
      </footer>
    </>
  );
}
