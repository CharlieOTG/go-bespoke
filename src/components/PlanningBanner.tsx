type PlanningBannerProps = {
  onPlanTrip: () => void;
};

export default function PlanningBanner({ onPlanTrip }: PlanningBannerProps) {
  return (
    <section className="plan-banner" aria-labelledby="plan-banner-heading">
      <div className="plan-banner__inner">
        <div className="plan-banner__copy">
          <p className="plan-banner__script" aria-hidden="true">
            Inspired?
          </p>
          <h2 id="plan-banner-heading" className="plan-banner__title">
            Start planning your next trip today
          </h2>
          <p className="plan-banner__body">
            Our expert team of personal travel managers are ready to craft your perfect journey. From
            business trips to luxury leisure holidays, simply put your pin in the map, and we&apos;ll
            make it happen.
          </p>
        </div>

        <div className="plan-banner__actions">
          <button
            type="button"
            className="plan-banner__btn plan-banner__btn--outline"
            onClick={onPlanTrip}
          >
            Let&apos;s plan your trip
          </button>
          <a href="tel:02074926381" className="plan-banner__btn plan-banner__btn--call">
            Call 0207 *** ****
          </a>
        </div>
      </div>
    </section>
  );
}
