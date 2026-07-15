const heroImage = '/cars/transfers.jpg';

const figures = [
  {
    title: 'Airport & Point-to-Point Transfers',
    text: [
      "A private chauffeur waiting at the gate, luggage handled before you've noticed it's gone, and a car already moving before the conversation starts. This is the connective tissue of every charter — the quiet transfer between the runway, the marina, and wherever the day leads next.",
      'Built as a seamless add-on to any yacht, jet or villa booking, so the experience never actually ends at the terminal or the pier — it simply continues by road.',
    ],
    image:
      'https://images.unsplash.com/photo-1730800328198-f9efbf9db53f?auto=format&fit=crop&w=1200&h=600&q=80',
    alt: 'Chauffeur in a suit standing beside a black luxury car',
    layout: 'split',
  },
  {
    title: 'The Luxury SUV',
    text: [
      'Commanding, unhurried, and built for a group rather than a single passenger — the fleet\'s executive SUV is the choice when a sedan feels too small for the occasion. Equally at home collecting a family from the airport or delivering a founder to an investor dinner.',
      'Every vehicle in the fleet is maintained to the same standard as the yachts and jets it connects to — spotless, current, and driven only by vetted chauffeurs.',
    ],
    image: '/cars/suv.jpg',
    alt: 'Executive luxury SUV',
    layout: 'split-reverse',
  },
  {
    title: 'First Class, on the Ground',
    text: [
      'Stitched leather, real wood trim, and a cabin quiet enough to take a call or simply say nothing at all — the interior is where this service actually distinguishes itself from any ordinary taxi or rideshare.',
      "A rolling extension of the same standard set by the yacht's saloon or the jet's cabin: nothing rented in a hurry, everything considered.",
    ],
    image: '/cars/cabin.jpg',
    alt: 'Luxury car interior with leather and wood trim',
    layout: 'split',
  },
] as const;

import PlanningBanner from '../components/PlanningBanner';

type CarsProps = {
  onInquire: () => void;
};

function FigureCaption({ title, text }: { title: string; text: readonly string[] }) {
  return (
    <div className="mlc-figure__cap">
      <h2>{title}</h2>
      {text.map((paragraph, i) => (
        <p key={paragraph.slice(0, 24)} className={i > 0 ? 'mt-4' : undefined}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function Cars({ onInquire }: CarsProps) {
  return (
    <>
      <section className="relative flex min-h-[50vh] w-full items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-container-margin-mobile py-24 text-center md:px-container-margin-desktop">
          <p className="mb-4 font-headline text-lg tracking-[0.35em] text-primary uppercase">
            Ground, handled
          </p>
          <h1 className="mb-6 font-headline text-4xl text-white md:text-5xl" id="cars-title">
            The car is never an <em className="italic text-primary">afterthought</em>
          </h1>
          <p className="text-lg leading-relaxed text-white md:text-xl">
            Three ways Elite Rentals Dubai closes the gap between the tarmac, the marina and the
            front door — chauffeured, discreet, and always waiting.
          </p>
        </div>
      </section>

      <section className="mlc-section pt-0" aria-labelledby="cars-title">
        <div className="mlc-figures">
          {figures.map(({ title, text, image, alt, layout }) => {
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
