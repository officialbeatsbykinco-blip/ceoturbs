import { Link } from "react-router-dom";
import { ArrowRight, Check, Globe, MapPin, Megaphone, Phone, Search, Star } from "lucide-react";
import { BookButton } from "@/components/cta/Actions";
import { CallLink } from "@/components/site/CallLink";
import { ProofStats, GoogleAdProof } from "@/components/blocks/Proof";
import { Founder, BookingSection } from "@/components/blocks/Sales";
import { SectionHeader, FAQList } from "@/components/blocks/Basics";
import { HOME_FAQS } from "@/content/faqs";
import { price } from "@/content/pricing";
import { SITE, REVIEW_CARD, fromPriceLabel } from "@/config/site";
import { ReviewDuo } from "@/components/blocks/ReviewDuo";
import { SiteWall } from "@/components/visuals/SiteWall";

/**
 * Money model, top to bottom:
 * 1. Entry offer — the NFC Google review card from $24.99 (checkout on the shop page).
 * 2. Step two — websites and ads that turn those reviews into calls (Launch $347 includes 2 cards).
 * 3. Backup action — the free 30-minute call, or the phone.
 */
export default function Home() {
  return (
    <>
      <div className="theme-soft">
      {/* HERO — who it's for, what they get, one button. */}
      <section className="relative overflow-clip pt-24 sm:pt-28 lg:pt-32" aria-labelledby="hero">
        <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 glow-turbo" aria-hidden />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="hero-rise relative z-10 min-w-0">
            <p className="chip">Google review cards for local businesses</p>
            <h1 id="hero" className="mt-4 text-[34px] font-bold leading-[1.05] sm:mt-5 sm:text-5xl md:text-6xl lg:text-[60px]">
              <span className="text-chrome-grad">More Google reviews.</span> <span className="text-turbo-grad">More calls. One tap.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
              Customers tap the card with their phone and land on your Google review page. More fresh reviews move you up in Google Maps, and Maps is where "near me" calls come from. Free US shipping on every order.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link to="/google-review-cards" className="btn-ignite btn-shine">
                Get my review cards · from {fromPriceLabel} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <CallLink location="home hero" className="btn-chrome">
                <Phone className="h-4 w-4" aria-hidden /> Call {SITE.phone.display}
              </CallLink>
            </div>
            <ul className="mt-6 grid max-w-xl grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {["Works on iPhone and Android", "No app for your customers", "Free US shipping", "5-day returns"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-turbo" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <img src={REVIEW_CARD.image} alt="White NFC Google review card: Review Us On Google" width={640} height={640} className="mx-auto w-full max-w-md rounded-3xl" decoding="async" />
          </div>
        </div>
      </section>

      <div className="relative mt-12 sm:mt-14">
        <SiteWall />
      </div>

      <section className="pt-14 pb-8" aria-label="Results at a glance">
        <div className="container-x">
          <ProofStats />
        </div>
      </section>

      <ReviewDuo />

      {/* HOW IT WORKS — three taps, nothing to install. */}
      <section className="section border-t border-border" aria-labelledby="how">
        <div className="container-x">
          <SectionHeader title={<span id="how">How the card gets you reviews</span>} lede="Nothing to install, nothing for your customer to learn." />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { t: "Customer taps the card", b: "They hold their phone near the card at checkout. Works on iPhone and Android, no app needed." },
              { t: "Your review form opens", b: "Google's own rate-and-review screen for your business, ready for stars. No searching for your listing." },
              { t: "You climb the map", b: "More fresh reviews build trust with the next customer, and Google uses review count and score in local results." },
            ].map((x, i) => (
              <li key={x.t} className="panel p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-turbo/15 font-display font-bold text-turbo">{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-bold">{x.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{x.b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Link to="/google-review-cards" className="btn-ignite btn-shine">
              Get my review cards <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* STEP TWO — the calls that come with the reviews. Kept short; the services pages carry the detail. */}
      <section className="section border-t border-border" aria-labelledby="get">
        <div className="container-x">
          <SectionHeader
            kicker="Step two"
            title={<span id="get">Turn the reviews into calls.</span>}
            lede="Reviews get you found. A site and ads make sure the person who finds you calls. Our Launch package ($347) bundles a new site, ads and 2 review cards."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Globe, t: `Website · from ${price("site-launch")}`, b: "A fast site built to get calls and bookings, so the people your reviews send over actually reach out.", to: "/services/website-design" },
              { icon: Search, t: "Google Ads", b: "Search ads for people who need you today, junk searches blocked.", to: "/services/google-ads" },
              { icon: Megaphone, t: "Meta Ads", b: "Facebook and Instagram lead ads with leads straight to your phone.", to: "/services/meta-ads" },
              { icon: MapPin, t: "Google Business Profile", b: "Set up and optimized so you show up in Google Maps.", to: "/services/google-business-profile" },
            ].map((x) => (
              <li key={x.t}>
                <Link to={x.to} className="panel block h-full p-5 transition hover:ring-1 hover:ring-turbo/40">
                  <x.icon className="h-5 w-5 text-turbo" aria-hidden />
                  <h3 className="mt-3 font-display text-lg font-bold">{x.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{x.b}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GoogleAdProof compact />
            <div className="panel p-6">
              <p className="font-display text-lg font-bold">Real ad accounts, real calls.</p>
              <p className="mt-2 text-sm text-muted-foreground">Unedited Google Ads and Meta dashboards from local service businesses. Setup from {price("pkg-start")}, Launch bundle {price("pkg-launch")} with 2 cards included, ads management from {price("growth")}/mo. You own the ad account and there's no long-term contract.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <BookButton note="Home — after reviews">Book my free 30-min call</BookButton>
                <Link to="/results" className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-turbo underline-offset-4 hover:underline">
                  See results <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER — a real person, not a faceless agency. */}
      <section className="section border-t border-border" aria-label="Founder">
        <div className="container-x">
          <Founder />
        </div>
      </section>

      </div>

      {/* FINAL CTA */}
      <section className="section border-t border-border" aria-labelledby="final">
        <div className="container-x">
          <div className="cta-glow rounded-3xl p-8 text-center sm:p-12">
            <Star className="mx-auto h-8 w-8 text-turbo" aria-hidden />
            <h2 id="final" className="h-section mt-3">The business with more Google reviews gets the call. Make that you.</h2>
            <p className="lede mx-auto max-w-2xl">Get your cards this week. Free US shipping, 5-day returns, and a founder who picks up the phone.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/google-review-cards" className="btn-ignite btn-shine">
                Get my review cards <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <CallLink location="home final CTA" className="btn-chrome">
                <Phone className="h-4 w-4" aria-hidden /> Call {SITE.phone.display}
              </CallLink>
            </div>
          </div>
        </div>
      </section>

      <div className="theme-soft">
      <FAQList faqs={HOME_FAQS} title="Questions before you call?" />
      <BookingSection note="Home — booking section" title="Want help getting more calls? Pick a time." />
      </div>
    </>
  );
}
