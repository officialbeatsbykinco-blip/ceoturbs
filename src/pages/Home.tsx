import { Link } from "react-router-dom";
import { ArrowRight, Check, Globe, Megaphone, Phone, Play, Search, Star } from "lucide-react";
import { BookButton } from "@/components/cta/Actions";
import { CallLink } from "@/components/site/CallLink";
import { ProofStats, BestResults, GoogleAdProof } from "@/components/blocks/Proof";
import { GOOGLE_AD_RESULTS } from "@/content/results";
import { GrandSlamOffer } from "@/components/blocks/Offer";
import { ReviewDuo } from "@/components/blocks/ReviewDuo";
import { Founder, BookingSection } from "@/components/blocks/Sales";
import { SectionHeader, FAQList } from "@/components/blocks/Basics";
import { HOME_FAQS } from "@/content/faqs";
import { price } from "@/content/pricing";
import { SITE, fromPriceLabel } from "@/config/site";
import { SiteWall } from "@/components/visuals/SiteWall";

/**
 * Money model, top to bottom:
 * 1. Primary action — the free 30-minute strategy call (Cal.com booking).
 * 2. Offer — an SEO/AEO/GEO website plus Google, Meta and YouTube ads that bring the calls.
 * 3. Add-on — NFC Google review cards, kept small so they never compete with the booking.
 */
export default function Home() {
  return (
    <>
      <div className="theme-soft">
      {/* HERO — outcome, offer, one button. */}
      <section className="relative overflow-clip pt-24 sm:pt-28 lg:pt-32" aria-labelledby="hero">
        <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 glow-turbo" aria-hidden />
        <div className="container-x relative mx-auto max-w-4xl text-center">
          <div className="hero-rise relative z-10 min-w-0">
            <p className="chip">Websites, ads and reviews for local businesses and online stores</p>
            <h1 id="hero" className="mt-4 text-[34px] font-bold leading-[1.05] sm:mt-5 sm:text-5xl md:text-6xl lg:text-[60px]">
              <span className="text-chrome-grad">We get you more customers, more sales</span> <span className="text-turbo-grad">and more reviews.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
              An SEO, AEO and GEO website that gets you found on Google and ChatGPT, Google, Meta and YouTube ads that bring buyers to it, and a tap-to-review card so 5-star reviews keep coming. Built for Shopify stores, contractors, handymen, restaurants and more.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <BookButton note="Home hero" className="btn-shine">Book my free strategy call</BookButton>
              <Link to="/results" className="btn-chrome">
                See real results <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ul className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-x-4 gap-y-2 text-left text-sm text-muted-foreground">
              {["Free 30-minute call", "Free review card with Launch", "Leads-or-free guarantee", "We work with businesses worldwide"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-turbo" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="relative mt-12 sm:mt-14">
        <SiteWall />
      </div>

      <section className="pt-14 pb-8" aria-labelledby="proof">
        <div className="container-x">
          <h2 id="proof" className="h-section">Real leads on small budgets.</h2>
          <p className="lede">Unedited dashboards from Appliance King, appliance repair in Macon GA: 2 Google Ads conversions for $6.57 in one day, 14 website leads at $6.46 each on $5 a day, and 71 free clicks from Google Search in 3 months.</p>
          <div className="mt-8">
            <BestResults />
          </div>
          <div className="mt-8">
            <ProofStats />
          </div>
        </div>
      </section>

      {/* WHAT YOU GET — three parts of one system. */}
      <section className="section border-t border-border" aria-labelledby="system">
        <div className="container-x">
          <SectionHeader kicker="How it works" title={<span id="system">One system: more customers, more sales, more reviews.</span>} lede="Most agencies sell you a site or ads. We build both to work together, and track every call back to its source." />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Globe, t: "1. A website built to convert", b: "Fast, mobile-first and written for SEO, AEO and GEO, with schema markup and llms.txt so Google, ChatGPT and Perplexity can read and recommend you." },
              { icon: Search, t: "2. Get found everywhere", b: "Google Business Profile, local SEO and answer-engine optimization put you in the map pack and in AI answers when people ask who to hire." },
              { icon: Megaphone, t: "3. Ads that fill the calendar", b: "Google, Meta and YouTube ads sent to your new site with call and form tracking, so you see what each dollar brings back." },
              { icon: Star, t: "4. Reviews that keep coming", b: "A tap-to-review NFC card turns every happy customer into a Google review, so more people pick you and Maps ranks you higher." },
            ].map((x) => (
              <li key={x.t} className="panel p-6">
                <x.icon className="h-6 w-6 text-turbo" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-bold">{x.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{x.b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <BookButton note="Home — how it works">Book my free strategy call</BookButton>
          </div>
        </div>
      </section>

      <ReviewDuo />

      <GrandSlamOffer note="Home offer" />

      {/* STEP TWO — the calls that come with the reviews. Kept short; the services pages carry the detail. */}
      <section className="section border-t border-border" aria-labelledby="get">
        <div className="container-x">
          <SectionHeader
            kicker="Services"
            title={<span id="get">Everything that brings in customers.</span>}
            lede="Start with one piece or take the whole package. Every price is published on the pricing page."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Globe, t: `Website · from ${price("site-launch")}`, b: "A fast, SEO/AEO/GEO-ready site built to get calls and bookings.", to: "/services/website-design" },
              { icon: Search, t: "Google Ads", b: "Search ads for people who need you today, junk searches blocked.", to: "/services/google-ads" },
              { icon: Megaphone, t: "Meta Ads", b: "Facebook and Instagram lead ads with leads straight to your phone.", to: "/services/meta-ads" },
              { icon: Play, t: "YouTube Ads", b: "Video ads in front of people searching and watching in your area. Ask about it on the call.", to: "/book" },
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
            <GoogleAdProof compact result={GOOGLE_AD_RESULTS[1]} />
            <div className="panel p-6">
              <p className="font-display text-lg font-bold">Real ad accounts, real leads.</p>
              <p className="mt-2 text-sm text-muted-foreground">Unedited Google Ads and Meta dashboards from local service businesses. Setup from {price("pkg-start")}, the full Launch package {price("pkg-launch")}, ads management from {price("growth")}/mo. You own the ad account and there's no long-term contract.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <BookButton note="Home — after services">Book my free 30-min call</BookButton>
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
            <h2 id="final" className="h-section mt-3">The business that shows up first gets the call. Make that you.</h2>
            <p className="lede mx-auto max-w-2xl">Book a free 30-minute call. We review your site, Google profile and ads live and tell you the biggest thing holding back customers.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <BookButton note="Home final CTA">Book my free strategy call</BookButton>
              <CallLink location="home final CTA" className="btn-chrome">
                <Phone className="h-4 w-4" aria-hidden /> Call {SITE.phone.display}
              </CallLink>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Also: <Link to="/google-review-cards" className="text-turbo underline-offset-4 hover:underline">NFC Google review cards from {fromPriceLabel}</Link>
            </p>
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
