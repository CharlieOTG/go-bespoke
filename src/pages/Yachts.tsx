import PlanningBanner from '../components/PlanningBanner';
import { publicUrl } from '../lib/publicUrl';

const heroImage = publicUrl('yachts/image3.jpg');

const figures = [
  {
    title: 'Elite Diamond Madison A-48',
    text: [
      'A graceful introduction to the Elite fleet, her flowing lines and shaded upper sundeck set the tone for an afternoon spent entirely at ease. Below, an air-conditioned saloon offers quiet respite from the Gulf sun, while the forward lounge invites conversation against a backdrop of Dubai\'s skyline.',
      'Intimate by design, she suits those who measure luxury by calm rather than scale.',
    ],
    image: publicUrl('yachts/image1.jpg'),
    alt: 'Elite Diamond Madison A-48 yacht on Dubai waters',
    layout: 'split-reverse',
  },
  {
    title: 'Elite Diamond Lima 70',
    text: [
      'Cast at sunset, the Lima 70 carries the same commanding 70ft presence with a livelier social layout — built for gatherings that spill joyfully across every deck.',
      'A natural stage for a birthday toast or a golden-hour celebration among friends.',
    ],
    image: publicUrl('yachts/image2.jpg'),
    alt: 'Elite Diamond Lima 70 yacht at sunset',
    layout: 'split',
  },
  {
    title: 'New Elite White Rivera 60',
    text: [
      'Among the newest additions to the fleet, her striking white livery is captured here gliding past the sail-shaped silhouette of the Burj Al Arab — a fitting companion.',
      'Every surface still carries the polish of a recent build, offering guests a genuinely new-yacht experience from the moment they step aboard.',
    ],
    image: publicUrl('yachts/image3.jpg'),
    alt: 'New Elite White Rivera 60 passing the Burj Al Arab',
    layout: 'split-reverse',
  },
  {
    title: 'Elite Diamond Venice',
    text: [
      'The flagship of the standard fleet — nearly 80ft of multi-level deck space conceived for grand occasions. Corporate showcases, milestone birthdays and full-scale celebrations all find their stage here.',
      'Enough room across her decks for a crowd to gather without ever feeling contained.',
    ],
    image: publicUrl('yachts/image4.jpg'),
    alt: 'Elite Diamond Venice flagship yacht',
    layout: 'split',
  },
  {
    title: 'Lamborghini Yacht — Tecnomar for Lamborghini 63',
    text: [
      'Elite Rentals Dubai\'s signature vessel — a genuine Lamborghini-branded yacht co-designed with Automobili Lamborghini and built in a strictly limited run of just 63 hulls worldwide. Her exterior echoes the marque\'s automotive language: a low, aggressive profile, angular carbon-look surfaces and the signature Y-shaped design cues found on Lamborghini\'s cars.',
      'Bookings are restricted to a maximum of 8 VIP guests, preserving a lower-density, more exclusive experience. The charter is fully staffed — VIP-trained crew and captain, dedicated security, two hostesses, private chauffeured transport to and from the marina, and a welcome service that includes Dom Pérignon champagne.',
    ],
    image: publicUrl('yachts/image5.jpg'),
    alt: 'Tecnomar for Lamborghini 63 signature yacht',
    layout: 'split-reverse',
  },
] as const;

type YachtsProps = {
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

export default function Yachts({ onInquire }: YachtsProps) {
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
            The Fleet
          </p>
          <h1 className="mb-6 font-headline text-4xl text-white md:text-5xl" id="yachts-title">
            Super Yacht <em className="italic text-primary">Charters</em>
          </h1>
          <p className="text-lg leading-relaxed text-white md:text-xl">
            Photographed directly from Elite Rentals Dubai&apos;s own fleet — from intimate
            afternoon cruises to the signature Tecnomar for Lamborghini 63.
          </p>
        </div>
      </section>

      <section className="mlc-section pt-0" aria-labelledby="yachts-title">
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
