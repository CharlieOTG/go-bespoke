import PlanningBanner from '../components/PlanningBanner';
import { publicUrl } from '../lib/publicUrl';

const figures = [
  {
    title: 'The Departure',
    text: 'The moment a private charter earns its keep — wheels up within minutes of arrival, no gate, no queue, no wasted hour. A two-tone long-range jet lifts cleanly off the runway, already climbing toward cruise.',
    image: publicUrl('flights/departure.jpg'),
    alt: 'Private jet taking off',
    layout: 'full',
  },
  {
    title: 'Above the Weather',
    text: 'Once airborne, an ultra-long-range aircraft climbs well above commercial traffic and the turbulence beneath it — a smoother, quieter cruise for the hours that follow, whatever ocean lies ahead.',
    image: publicUrl('flights/climbing.jpg'),
    alt: 'Private jet climbing against blue sky',
    layout: 'split',
  },
  {
    title: 'The Cabin',
    text: 'Deep seating, considered textiles, and a layout built around conversation rather than rows — the interior of a long-range jet is designed to feel like a private room that happens to be moving at Mach 0.85.',
    image: publicUrl('flights/cabin.jpg'),
    alt: 'Luxury private jet cabin interior',
    layout: 'split-reverse',
  },
] as const;

type FlightsProps = {
  onInquire: () => void;
};

function FigureCaption({ title, text }: { title: string; text: string }) {
  return (
    <div className="mlc-figure__cap">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function Flights({ onInquire }: FlightsProps) {
  return (
    <>
      <section className="relative flex min-h-[50vh] w-full items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={figures[0].image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-container-margin-mobile py-24 text-center md:px-container-margin-desktop">
          <p className="mb-4 font-headline text-lg tracking-[0.35em] text-primary uppercase">
            FL 410 — Anywhere, Worldwide
          </p>
          <h1 className="mb-6 font-headline text-4xl text-white md:text-5xl" id="flights-title">
            Private Jets
          </h1>
          <p className="text-lg leading-relaxed text-white md:text-xl">
            Ultra-long-range aircraft chartered point-to-point, wherever the itinerary demands — the
            fastest way to remove distance from the equation entirely.
          </p>
        </div>
      </section>

      <section className="mlc-section pt-0" aria-labelledby="flights-title">
        <div className="mlc-figures">
          {figures.map(({ title, text, image, alt, layout }) => {
            if (layout === 'full') {
              return (
                <article key={title} className="mlc-figure">
                  <img className="mlc-figure__img" loading="lazy" alt={alt} src={image} />
                  <FigureCaption title={title} text={text} />
                </article>
              );
            }

            const reverse = layout === 'split-reverse';
            return (
              <article
                key={title}
                className={`mlc-figure mlc-figure--split${reverse ? ' mlc-figure--split-reverse' : ''}`}
              >
                {reverse ? (
                  <>
                    <FigureCaption title={title} text={text} />
                    <img className="mlc-figure__img" loading="lazy" alt={alt} src={image} />
                  </>
                ) : (
                  <>
                    <img className="mlc-figure__img" loading="lazy" alt={alt} src={image} />
                    <FigureCaption title={title} text={text} />
                  </>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <PlanningBanner onPlanTrip={onInquire} />
    </>
  );
}
