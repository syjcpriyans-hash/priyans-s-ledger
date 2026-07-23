import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyans — Builder, Researcher, Operator" },
      {
        name: "description",
        content:
          "AI-powered products and structured research into Indian SME and D2C markets. See ListingsReady, the trading operations system, and the India market research.",
      },
      { property: "og:title", content: "Priyans — Builder, Researcher, Operator" },
      {
        property: "og:description",
        content:
          "AI-powered products backed by on-the-ground research into Indian SME and D2C markets.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/* -------------------------------------------------------------------------- */

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* -------------------------------------------------------------------------- */

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="ref-code text-ink">
          PRIYANS / PORTFOLIO — 2026
        </a>
        <nav className="hidden gap-6 sm:flex">
          {[
            ["Work", "#work"],
            ["More", "#more"],
            ["Toolkit", "#toolkit"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="ref-code text-ink hover:text-stamp"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="ref-code mb-8">MANIFEST / 01 — INDEX</div>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          Priyans
        </h1>
        <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
          I build AI-powered products and back them with on-the-ground research
          into where Indian SME and D2C markets are underserved.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <span className="ref-code">LOC —</span>
          <span className="font-mono text-sm tracking-wide text-ink">
            Canada → India
          </span>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-stamp"
          >
            See the work
            <span aria-hidden>↓</span>
          </a>
          <a
            href="/priyans-resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-sm border border-ink bg-transparent px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Resume · PDF
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-rule">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-[220px_1fr]">
        <div>
          <div className="ref-code">SECTION / 02</div>
          <h2 className="mt-2 font-serif text-2xl text-ink">About</h2>
        </div>
        <div className="max-w-2xl font-serif text-xl leading-relaxed text-ink">
          <p>
            I operate inside a real import/export business — sourcing from
            China, running thousands of SKUs — while building AI-powered
            software and researching where Indian SME and D2C markets are
            underserved. I've shipped a live product, designed the operating
            system a real trading business runs on, and built an audience by
            making content Indian business owners actually watch.
          </p>
          <p className="mt-5 text-lg text-ink/85">
            Different formats — code, spreadsheets, market maps, Reels — same
            method: find the operational gap, build the smallest system that
            closes it, ship it, and learn from what happens.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

type Case = {
  code: string;
  status: "LIVE" | "IN USE" | "ONGOING";
  title: string;
  problem: string;
  build: string[];
  outcome: string;
  meta: { label: string; value: string }[];
  artifact: { label: string; caption: string };
  links?: { label: string; href: string }[];
};

const CASES: Case[] = [
  {
    code: "WORK/01",
    status: "LIVE",
    title: "ListingsReady",
    problem:
      "E-commerce sellers need consistent AI image-generation prompts for product photography. No organized library existed — every seller was reinventing prompts from scratch.",
    build: [
      "React / TypeScript app deployed on Vercel, live at listingsready.com.",
      "Built the full data layer: 30 prompt workflows across apparel subcategories.",
      "Solved TanStack Router nested-routing bugs blocking deep-linked workflow pages.",
      "Stripped platform-specific branding from workflow titles; rebuilt the detail-page UI.",
    ],
    outcome:
      "Live product, featured on Product Hunt. Promoted through an ongoing Instagram / Facebook / TikTok carousel series on a fixed brand template.",
    meta: [
      { label: "STACK", value: "React · TS · TanStack Router · Vercel" },
      { label: "ROLE", value: "Design, data, engineering" },
      { label: "STATE", value: "Shipped · in market" },
    ],
    artifact: {
      label: "listingsready.com — workflow library",
      caption: "Screenshot placeholder — replace with a real capture.",
    },
    links: [
      { label: "listingsready.com", href: "https://listingsready.com" },
      { label: "Product Hunt", href: "#" },
    ],
  },
  {
    code: "WORK/02",
    status: "IN USE",
    title: "Trading Operations System",
    problem:
      "A real import/export business — China-sourced, thousands of SKUs — had no unified way to manage purchases, sales, inventory, GST compliance, and financials.",
    build: [
      "Designed the Excel-based system architecture end to end.",
      "Modeled purchase → inventory → sales → GST → financials as one connected sheet system.",
      "Reformatted the Business Management System Manual into a usable reference document.",
    ],
    outcome:
      "The system the business runs its core operations on today. Currently in daily use across purchasing, sales, and compliance.",
    meta: [
      { label: "SCOPE", value: "Thousands of SKUs · daily ops" },
      { label: "ROLE", value: "Systems architect" },
      { label: "STATE", value: "In production use" },
    ],
    artifact: {
      label: "Excel system — sheet map & dashboard",
      caption: "Sanitized screenshot placeholder — replace with sheet overview.",
    },
  },
  {
    code: "WORK/03",
    status: "ONGOING",
    title: "India Market Research",
    problem:
      "Where's the real whitespace in Indian AI automation, and which D2C product categories can one person actually run?",
    build: [
      "Track 1 · AI automation — tier-2/3 SME focus. WhatsApp-native, vernacular / Hinglish workflows. Vertical-specific productized services. Broader scan across health, edtech, agri-tech, logistics, fintech, senior care.",
      "Track 2 · D2C — evaluated skincare, supplements, pet care, print-on-demand, digital products against single-operator feasibility, automation potential, and impulse-buy price points. Went deep on hard-water shower filters: competitor and sourcing analysis.",
      "Run as a remote research framework operated from Canada with in-market contacts.",
    ],
    outcome:
      "[Findings pending — 3–4 sentence summary of the specific whitespace conclusions and the shortlist that came out of it will land here before this ships.]",
    meta: [
      { label: "METHOD", value: "Two-track framework · remote-operated" },
      { label: "SURFACE", value: "AI automation × D2C" },
      { label: "STATE", value: "Ongoing · findings compiling" },
    ],
    artifact: {
      label: "Category evaluation matrix — excerpt",
      caption: "Placeholder for a real chart / table from the research doc.",
    },
  },
];

function CaseStudy({ c, index }: { c: Case; index: number }) {
  const ref = useReveal();
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal border-b border-rule"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="ref-code text-ink">{c.code}</span>
            <span className="ref-code">·</span>
            <span className="ref-code">CASE STUDY</span>
          </div>
          <span className="status-stamp">{c.status}</span>
        </div>

        <h3 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          {c.title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {c.meta.map((m) => (
            <div key={m.label} className="flex items-baseline gap-2">
              <span className="ref-code">{m.label}</span>
              <span className="font-mono text-xs text-ink">{m.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* Left: PBO */}
          <div className="space-y-8">
            <Block label="PROBLEM">
              <p className="font-serif text-xl leading-relaxed text-ink">
                {c.problem}
              </p>
            </Block>
            <Block label="BUILD">
              <ul className="space-y-3">
                {c.build.map((b, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[auto_1fr] gap-3 text-base leading-relaxed text-ink"
                  >
                    <span className="ref-code pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Block>
            <Block label="OUTCOME">
              <p className="font-serif text-xl leading-relaxed text-ink">
                {c.outcome}
              </p>
              {c.links && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {c.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="ledger-link font-mono text-xs uppercase tracking-[0.14em]"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </Block>
          </div>

          {/* Right: artifact */}
          <div>
            <div className="artifact-frame aspect-[4/3] w-full">
              <div className="flex h-full w-full flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="ref-code">
                    ARTIFACT / {c.code.split("/")[1]}
                  </span>
                  <span className="ref-code">FIG. {index + 1}</span>
                </div>
                <div>
                  <div className="font-mono text-sm uppercase tracking-wide text-ink">
                    {c.artifact.label}
                  </div>
                  <div className="mt-1 font-mono text-xs text-khaki">
                    {c.artifact.caption}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-4 border-t border-rule pt-5">
      <div className="ref-code pt-1">{label}</div>
      <div>{children}</div>
    </div>
  );
}

function Work() {
  return (
    <section id="work">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-4">
        <div className="ref-code">SECTION / 03</div>
        <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
          Featured work
        </h2>
        <p className="mt-3 max-w-2xl font-mono text-xs uppercase tracking-[0.14em] text-khaki">
          Three case studies · problem → build → outcome
        </p>
      </div>
      {CASES.map((c, i) => (
        <CaseStudy key={c.code} c={c} index={i} />
      ))}
    </section>
  );
}

/* -------------------------------------------------------------------------- */

const MORE = [
  {
    code: "MORE/01",
    tag: "CONTENT & GROWTH",
    title: "Reels for Indian business owners",
    body: "Instagram Reels in Hinglish on AI tools for SMEs. Research trending terms and viral formats; one Reel pairing a Lovart promotion with a Claude / ChatGPT prompt workflow went viral.",
  },
  {
    code: "MORE/02",
    tag: "CLIENT WORK",
    title: "Social systemization",
    body: "For a client, structured a repeatable Claude prompt routine that produces branded 4:5 Instagram / LinkedIn / Facebook posts in Canva / Figma — cutting design cycle time to minutes.",
  },
  {
    code: "MORE/03",
    tag: "BRAND & PACKAGING",
    title: "Organik Doze + premium juice concept",
    body: "AI-generated packaging concept for Organik Doze supplements, plus a full packaging identity concept for a premium health juice brand.",
  },
];

function More() {
  return (
    <section id="more" className="border-b border-rule bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <div className="ref-code">SECTION / 04</div>
            <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
              Additional work
            </h2>
          </div>
          <span className="ref-code hidden sm:inline">03 ENTRIES</span>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
          {MORE.map((m) => (
            <div key={m.code} className="flex flex-col bg-paper p-6">
              <div className="flex items-center justify-between">
                <span className="ref-code">{m.code}</span>
                <span className="ref-code text-ledger">{m.tag}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl leading-snug text-ink">
                {m.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

const TOOLKIT: { group: string; items: string[] }[] = [
  {
    group: "Product & engineering",
    items: [
      "React",
      "TypeScript",
      "TanStack Router",
      "Vercel",
      "AI image-gen prompt engineering",
    ],
  },
  {
    group: "Research & strategy",
    items: [
      "Market whitespace analysis",
      "Competitor / sourcing analysis",
      "Evaluation frameworks",
    ],
  },
  {
    group: "Operations",
    items: [
      "Excel systems architecture",
      "GST compliance",
      "Inventory & financial systems",
      "China sourcing",
    ],
  },
  {
    group: "Content & growth",
    items: [
      "Short-form video",
      "Hinglish copywriting",
      "Canva / Figma",
      "Brand systemization",
    ],
  },
];

function Toolkit() {
  return (
    <section id="toolkit" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="ref-code">SECTION / 05</div>
        <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">Toolkit</h2>
        <div className="mt-10 space-y-8">
          {TOOLKIT.map((t) => (
            <div
              key={t.group}
              className="grid grid-cols-1 gap-4 border-t border-rule pt-6 md:grid-cols-[240px_1fr]"
            >
              <div className="ref-code text-ink">{t.group}</div>
              <ul className="flex flex-wrap gap-2">
                {t.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-sm border border-ink/25 bg-paper px-3 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-ink"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function Contact() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="ref-code" style={{ color: "var(--color-paper)", opacity: 0.6 }}>
          SECTION / 06 — CONTACT
        </div>
        <h2 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">
          Let's talk.
        </h2>
        <p className="mt-4 max-w-xl font-serif text-xl text-paper/85">
          Hiring, admissions, collaborations, or just want to compare notes on
          Indian SME markets — reach out.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-paper/20 pt-8 md:grid-cols-2">
          <div>
            <div className="ref-code" style={{ color: "var(--color-paper)", opacity: 0.6 }}>
              EMAIL
            </div>
            <a
              href="mailto:hello@example.com"
              className="mt-2 block font-serif text-2xl text-paper underline decoration-stamp decoration-2 underline-offset-[6px] hover:decoration-paper"
            >
              hello@example.com
            </a>
          </div>
          <div>
            <div className="ref-code" style={{ color: "var(--color-paper)", opacity: 0.6 }}>
              ELSEWHERE
            </div>
            <ul className="mt-2 space-y-2 font-mono text-sm">
              {[
                ["listingsready.com", "https://listingsready.com"],
                ["Product Hunt", "#"],
                ["Instagram", "#"],
                ["LinkedIn", "#"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-paper/90 underline decoration-paper/30 underline-offset-4 hover:text-paper hover:decoration-stamp"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="/priyans-resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-sm bg-paper px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:bg-stamp hover:text-paper"
          >
            Resume · PDF ↗
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6">
          <span
            className="ref-code"
            style={{ color: "var(--color-paper)", opacity: 0.55 }}
          >
            PRIYANS / MANIFEST / © 2026
          </span>
          <span
            className="ref-code"
            style={{ color: "var(--color-paper)", opacity: 0.55 }}
          >
            CANADA → INDIA
          </span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */

function Index() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <TopBar />
      <Hero />
      <About />
      <Work />
      <More />
      <Toolkit />
      <Contact />
    </main>
  );
}
