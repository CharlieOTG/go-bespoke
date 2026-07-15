import PlanningBanner from '../components/PlanningBanner';

const resorts = [
  {
    place: 'Noonu Atoll',
    name: 'Velaa Private Island',
    rating: '4.8',
    blurb:
      "The billionaire's hideaway — a golf academy, a legendary wine cellar and design so precise it feels tailor-made for you.",
    image:
      'https://lh3.googleusercontent.com/place-photos/AG9NLjDUkZz0pHt13tXGk3wmJJX9yb1YQww3OUrTNpB9sIlfKkHk_mD4Wvoheee7oSK4apMsl3zoNbMljq6h4TyEeO3B4E1Cig_fMQ5_ofdHhcWS08lbJ5hxqeGd886OezguoCwKyeAKb34Dqs5kG3WuvRu2fA=s4800-w800-h600',
  },
  {
    place: 'Noonu Atoll',
    name: 'Cheval Blanc Randheli',
    rating: '4.7',
    blurb:
      "LVMH's barefoot maison — Michelin-calibre dining, a private seaplane and the most beautiful arrival lounge in the country.",
    image:
      'https://lh3.googleusercontent.com/place-photos/AG9NLjCwR4iN83DD-ruuf_-FYZ5YEJ-i9nOvWtdax-Beopq4cZ_4SOlyvPMkZVGZNJvvHNkZTw1-jhLVzzQWLrd5uz8mam5ksFBSfE-A-IfrVNQYr1vn4kAPZz4Co3kEiCgy--uHPrhh3kgB074VgUBLLvXIXA=s4800-w800-h600',
  },
  {
    place: 'Noonu Atoll',
    name: 'Soneva Jani',
    rating: '4.6',
    blurb:
      'Overwater villas with retractable roofs, water slides into the lagoon and a legendary open-air cinema under the stars.',
    image:
      'https://lh3.googleusercontent.com/place-photos/AG9NLjCnUawPVoV_tmquMgv1iRvZrtNw6ZZViTVHKH4hfJ1Dp035vI0V6vAwOIab6wW8e8b5kyySNNTWo-lZ8TLOaqzP3amGAi46cmkIGS3dyI2Mj5V4nOCzUrZCUmzvzOSayYvTAGLQfx3rYz992w=s4800-w800-h600',
  },
  {
    place: 'Baa Atoll',
    name: 'The Nautilus',
    rating: '4.7',
    blurb:
      'No clocks, no menus, no schedules. Dine and drift entirely on your own timeline, down to your pool\'s temperature.',
    image:
      'https://lh3.googleusercontent.com/place-photos/AG9NLjAJ8mxhspFA3MHldrXe21X0dQNFyLX8reLVziZd5zx7dLDppJuPn7X23x5N31GNnAvwtmAhcL7-rSZvfrB_ETKLXWR93UDOckaZfZ_G5flt8OJ5gWY5fZXB7XOCA4i1-6joRaR_NKuGbekhVb0=s4800-w800-h600',
  },
  {
    place: 'South Malé Atoll',
    name: 'Waldorf Astoria Ithaafushi',
    rating: '4.7',
    blurb:
      'A three-island resort with eleven restaurants and bars, and a devoted following of guests who return year after year.',
    image:
      'https://lh3.googleusercontent.com/place-photos/AJRVUZMfrUAfnuagaGGohIXo30zAb8YDqZDD_v47WnNqo_GapSlE-O_J_BxA3dEvBULXoUIDX2EASY0cDiR5QrMVsDkSa3kCfnyQ_dCjD7PMJ1ewiutX3stTmNEHUvlNsm-ymQec6UKgV5NXyD9qxA=s4800-w800-h600',
  },
  {
    place: 'North Malé Atoll',
    name: 'One&Only Reethi Rah',
    rating: '4.7',
    blurb:
      'A lush, green island of vast villas and quiet beaches — a short boat transfer from Malé and a firm family favourite.',
    image:
      'https://lh3.googleusercontent.com/place-photos/AG9NLjCKzD9f-ECbC1orlzDTYokzrDEnB_J_LDZTJqIs6BUKIfI-JJV1wNDa4ul1gqLjvq7h78W8UqHr3fKkxpMD0fWvvTInLd2q8HYDVfStzXystI4B6E8qw7Y-bd2fGBgil0R0cWRZZOanj4OFowk=s4800-w800-h600',
  },
  {
    place: 'Lhaviyani Atoll',
    name: 'Kudadoo Private Island',
    rating: '4.8',
    blurb:
      'Just fifteen solar-powered residences with an "anything, anytime, anywhere" philosophy — no menus, no bills, total switch-off.',
    image:
      'https://lh3.googleusercontent.com/place-photos/AG9NLjCzRyCpm7WCcCDHlRNVzuUNftbwM9gcJM1xYiboq40Ti5bJU_nXv9BnmdRfqRZIsbpqtSSHbq42rXx4VuPP1cwKMu_0o8xrqNuulMuPdRyUK8-T3c9n6UV4gk9GCneYjGIMyKHrxx4bgtPKBQ=s4800-w800-h600',
  },
  {
    place: 'Dhaalu Atoll',
    name: 'St. Regis Vommuli',
    rating: '4.8',
    blurb:
      'Signature butler service and striking architecture, crowned by one of the largest private overwater estates in the Maldives.',
    image:
      'https://lh3.googleusercontent.com/place-photos/AG9NLjCcDe1KVRX56eRb-9J7mVitPDA_MLXlxQR6DWP44w29b-eDhcK6bJOXMoTNS0HVAJeCemkLBAUhjyB9WDOwI9294APxnJKXBEzTD4nr8L82zQ_T6XVfG79bEapFV7BXaQQRHdhYK-OwH8O-bJua8SKAJg=s4800-w480-h320',
  },
  {
    place: 'Baa Atoll',
    name: 'Anantara Kihavah',
    rating: '4.9',
    blurb:
      'Set in a UNESCO Biosphere Reserve with a vibrant house reef, the celebrated SEA underwater restaurant and its own observatory.',
    image:
      'https://lh3.googleusercontent.com/place-photos/AG9NLjDTf_SqV_zMqUkfxdFfbLAoN42MBuAqzkiSZhSDpH_l5E6VjZNdN3sOYMjo8Qq869VhQ3tszNHqMaqCDmHlodXs2EceUsibC36FARn853L2r-fvFmk1iM9iOwLhrRbIp3KyNhPPpgyZOxwcp5g=s4800-w800-h600',
  },
  {
    place: 'Laamu Atoll',
    name: 'Six Senses Laamu',
    rating: '4.8',
    blurb:
      'The only resort in its atoll — remote, sustainability-led, with turtles and reef sharks gliding right past your villa deck.',
    image:
      'https://lh3.googleusercontent.com/place-photos/AJRVUZNaclYuJulvYzc202tUDuDkcfXFvwzzxp7LpY4EysqNV3qZdRVUUff7-ByKFiUjeW7der8M9RSVyTQ0GXSzQawfF6tSeLTXT5skdj7T3Gm_egcdV6OqLpyJYSDJMOBBgZubp9fNsktWFt_Y1A=s4800-w800-h600',
  },
] as const;

type IslandsProps = {
  onInquire: () => void;
};

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

export default function Islands({ onInquire }: IslandsProps) {
  return (
    <>
      <section className="relative flex min-h-[50vh] w-full items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={resorts[0].image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-container-margin-mobile py-24 text-center md:px-container-margin-desktop">
          <p className="mb-4 font-headline text-lg tracking-[0.35em] text-primary uppercase">
            The collection
          </p>
          <h1 className="mb-6 font-headline text-4xl text-white md:text-5xl" id="mlc-title">
            The Maldives, at its <em className="italic text-primary">most extraordinary</em>
          </h1>
          <p className="text-lg leading-relaxed text-white md:text-xl">
            Ten private islands where the water is bluer, the villas are grander, and someone remembers
            exactly how you take your coffee.
          </p>
        </div>
      </section>

      <section className="mlc-section pt-0" aria-labelledby="mlc-title">
        <div className="mlc-grid">
          {resorts.map(({ place, name, rating, blurb, image }) => (
            <article key={name} className="mlc-card">
              <div className="mlc-card__frame" tabIndex={0} aria-label={`${name}, ${place}`}>
                <img className="mlc-card__img" loading="lazy" alt={`${name}, Maldives`} src={image} />
                <div className="mlc-card__overlay">
                  <p className="mlc-card__place">{place}</p>
                  <h2 className="mlc-card__name">{name}</h2>
                </div>
              </div>
              <div className="mlc-card__body">
                <p className="mlc-card__rating">
                  <StarIcon />
                  {rating}
                </p>
                <p className="mlc-card__blurb">{blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PlanningBanner onPlanTrip={onInquire} />
    </>
  );
}
