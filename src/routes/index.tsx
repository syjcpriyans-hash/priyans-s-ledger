import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
          "AI-powered products and structured research into Indian SME and D2C markets. See ListingsReady, the trading operations system, and the India market research.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/* -------------------------------------------------------------------------- */

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 sm:flex-nowrap sm:px-6">
        <a href="#top" className="ref-code text-ink">
          PRIYANS / PORTFOLIO — 2026
        </a>
        <nav className="flex w-full items-center gap-4 overflow-x-auto pb-1 sm:w-auto sm:gap-6 sm:overflow-visible sm:pb-0">
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

/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-28 sm:pb-32">
        <div className="ref-code mb-8">MANIFEST / 01 — INDEX</div>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          Priyans
        </h1>
        <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
          I build AI-powered products and back them with on-the-ground research
          into where Indian SME and D2C markets are underserved.
        </p>
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

/* -------------------------------------------------------------------------- */

function About() {
  return (
    <section id="about" className="border-b border-rule">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[220px_1fr] md:gap-10">
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
  category: string;
  status: "LIVE" | "IN USE" | "ONGOING";
  title: string;
  summary: string;
  problem: string;
  build: string[];
  outcome: string;
  meta: { label: string; value: string }[];
  artifact: {
    label: string;
    caption: string;
    image?: string;
    alt?: string;
  };
  links?: { label: string; href: string }[];
};

const CASES: Case[] = [
  {
    code: "WORK/01",
    category: "AI PRODUCT · E-COMMERCE",
    status: "LIVE",
    title: "ListingsReady",
    summary:
      "An AI workflow platform that helps e-commerce sellers create professional product images while preserving exact product accuracy.",
    problem:
      "Small e-commerce sellers often cannot justify professional photography for every listing. Generative AI can reduce production time and cost, but it frequently changes commercially important details such as colour, texture, shape, proportions, stitching, logos, prints, packaging, and labels. These inaccuracies can create misleading listings, weaken customer trust, increase returns, and introduce marketplace-compliance risk.",
    build: [
      "Defined the product as a structured workflow layer rather than another image generator. I deliberately excluded user accounts, image uploads, automatic product detection, and AI validation from the first version so I could launch faster and test the core value proposition before investing in heavier infrastructure.",
      "Selected clothing as the initial category because fabric, colour, fit, stitching, prints, embroidery, and branding make product-accuracy problems visible, measurable, and commercially important.",
      "Created a repeatable workflow architecture covering the complete prompt, recommended AI tool, common generation mistakes, correction prompts, execution guidance, marketplace considerations, and product-fidelity constraints.",
      "Developed and tested instructions designed to preserve the original product's colour, texture, shape, proportions, stitching, branding, packaging, and all visible details across white-background, lifestyle, flat-lay, detail, front-and-back, size-guide, and packaging use cases.",
      "Built and deployed the responsive platform using React, TypeScript, TanStack Router, GitHub, and Vercel, while resolving routing and workflow-detail-page issues.",
      "Led the product positioning, information architecture, SEO, brand system, educational content, community outreach, and organic go-to-market strategy for e-commerce and D2C sellers.",
    ],
    outcome:
      "ListingsReady became a live product with an initial library of 30 apparel workflows, a defined target customer, a scalable content system, and an organic distribution strategy. The project demonstrates end-to-end ownership across customer-problem research, market positioning, MVP scoping, prompt engineering, UX planning, front-end execution, deployment, SEO, and go-to-market development.",
    meta: [
      {
        label: "ROLE",
        value:
          "Founder · Product strategist · Prompt engineer · Front-end contributor",
      },
      {
        label: "TOOLS",
        value:
          "React · TypeScript · TanStack Router · GitHub · Vercel · ChatGPT",
      },
      {
        label: "SKILLS",
        value:
          "Customer research · Product positioning · MVP scoping · Workflow design · Prompt engineering · UX · SEO · Organic marketing",
      },
    ],
    artifact: {
      label: "ListingsReady — live website",
      caption:
        "Live homepage screenshot showing the workflow platform and product positioning.",
      image: "/listingsready-website-proof.png",
      alt: "ListingsReady website homepage showing its navigation, product-photography value proposition, example product images, and latest workflow additions.",
    },
    links: [
      { label: "Visit ListingsReady", href: "https://listingsready.com" },
    ],
  },
  {
    code: "WORK/02",
    category: "OPERATIONS",
    status: "IN USE",
    title: "Trading Operations System",
    summary:
      "A connected system for purchases, sales, inventory, payments, and reporting.",
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
    category: "RESEARCH",
    status: "ONGOING",
    title: "India Market Research",
    summary:
      "Structured opportunity research across AI automation and Indian D2C markets.",
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

function CaseModal({
  project,
  onClose,
}: {
  project: Case;
  onClose: () => void;
}) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  useEffect(() => {
    if (!isImageExpanded) return;

    const closeExpandedImage = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopImmediatePropagation();
        setIsImageExpanded(false);
      }
    };

    window.addEventListener("keydown", closeExpandedImage, true);

    return () => {
      window.removeEventListener("keydown", closeExpandedImage, true);
    };
  }, [isImageExpanded]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-paper"
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-modal-title"
        className="min-h-dvh w-full bg-paper"
      >
        <div className="sticky top-0 z-10 border-b border-rule bg-paper/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-5 sm:flex-row sm:gap-6 sm:px-6 sm:py-7">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="ref-code text-ink">{project.category}</span>
              <span className="status-stamp">{project.status}</span>
            </div>
            <h3
              id="case-modal-title"
              className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-5xl"
            >
              {project.title}
            </h3>
            <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-ink/85 sm:text-xl">
              {project.summary}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="min-h-11 shrink-0 self-end border border-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper sm:self-auto"
            aria-label="Close project details"
          >
            Close
          </button>
          </div>
        </div>

        <div
          className={`mx-auto grid grid-cols-1 gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-12 ${
            project.artifact.image
              ? "max-w-7xl lg:grid-cols-[minmax(0,0.8fr)_minmax(520px,1.2fr)]"
              : "max-w-6xl lg:grid-cols-[minmax(0,1fr)_360px]"
          }`}
        >
          <div className="space-y-10">
            <section className="grid grid-cols-1 gap-3 border-t border-rule pt-5 sm:grid-cols-[110px_1fr]">
              <h4 className="ref-code pt-1">Problem</h4>
              <p className="font-serif text-xl leading-relaxed text-ink">
                {project.problem}
              </p>
            </section>

            <section className="grid grid-cols-1 gap-3 border-t border-rule pt-5 sm:grid-cols-[110px_1fr]">
              <h4 className="ref-code pt-1">Build</h4>
              <ol className="space-y-4">
                {project.build.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[32px_1fr] gap-3 text-base leading-relaxed text-ink"
                  >
                    <span className="ref-code pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="grid grid-cols-1 gap-3 border-t border-rule pt-5 sm:grid-cols-[110px_1fr]">
              <h4 className="ref-code pt-1">Outcome</h4>
              <div>
                <p className="font-serif text-xl leading-relaxed text-ink">
                  {project.outcome}
                </p>
                {project.links && (
                  <div className="mt-5 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="ledger-link font-mono text-xs uppercase tracking-[0.14em]"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </div>

          <aside>
            {project.artifact.image ? (
              <figure>
                <button
                  type="button"
                  onClick={() => setIsImageExpanded(true)}
                  className="group block w-full border border-ink bg-paper p-2 text-left transition-shadow hover:shadow-[0_0_0_1px_var(--color-ink)] sm:p-3"
                  aria-label={`Enlarge image: ${project.artifact.label}`}
                >
                  <img
                    src={project.artifact.image}
                    alt={project.artifact.alt ?? project.artifact.label}
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                  <span className="mt-3 flex items-center justify-between gap-4 border-t border-rule pt-3 font-mono text-xs uppercase tracking-[0.1em] text-ledger">
                    Click to enlarge
                    <span
                      aria-hidden
                      className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </span>
                </button>
                <figcaption className="mt-3">
                  <div className="font-mono text-sm uppercase tracking-wide text-ink">
                    {project.artifact.label}
                  </div>
                  <div className="mt-1 font-mono text-xs leading-relaxed text-khaki">
                    {project.artifact.caption}
                  </div>
                </figcaption>
              </figure>
            ) : (
              <div className="artifact-frame aspect-[4/3] w-full">
                <div className="flex h-full flex-col justify-between p-5">
                  <span className="ref-code">{project.category}</span>
                  <div>
                    <div className="font-mono text-sm uppercase tracking-wide text-ink">
                      {project.artifact.label}
                    </div>
                    <div className="mt-1 font-mono text-xs text-khaki">
                      {project.artifact.caption}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <dl className="mt-6 space-y-5 border-t border-rule pt-5">
              {project.meta.map((item) => (
                <div key={item.label}>
                  <dt className="ref-code">{item.label}</dt>
                  <dd className="mt-1 font-mono text-xs leading-relaxed text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {isImageExpanded && project.artifact.image && (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Expanded image: ${project.artifact.label}`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsImageExpanded(false);
              }
            }}
          >
            <div className="relative flex max-h-full w-full max-w-[96rem] flex-col">
              <button
                type="button"
                onClick={() => setIsImageExpanded(false)}
                className="mb-3 min-h-11 self-end border border-paper bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-paper transition-colors hover:bg-paper hover:text-ink"
                aria-label="Close enlarged screenshot"
              >
                Close
              </button>

              <div className="min-h-0 flex-1 overflow-auto bg-paper p-2 sm:p-3">
                <img
                  src={project.artifact.image}
                  alt={project.artifact.alt ?? project.artifact.label}
                  className="mx-auto block h-auto max-h-[calc(100dvh-7rem)] max-w-none object-contain sm:max-w-full"
                />
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

function Work() {
  const [selectedProject, setSelectedProject] = useState<Case | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [selectedProject]);

  return (
    <section id="work" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-4 sm:px-6 sm:pt-20">
        <div className="ref-code">SECTION / 03</div>
        <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
          Featured work
        </h2>
        <p className="mt-3 max-w-2xl font-mono text-xs uppercase tracking-[0.14em] text-khaki">
          Select a project to view the complete case study
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pb-20">
        <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
        {CASES.map((project) => (
          <button
            key={project.code}
            type="button"
            onClick={() => setSelectedProject(project)}
            className="group flex min-h-[300px] min-w-0 flex-col bg-paper p-5 text-left outline-none transition-shadow hover:shadow-[inset_0_0_0_1px_var(--color-ink)] focus-visible:relative focus-visible:z-10 sm:min-h-[350px] sm:p-7"
            aria-label={`Open case study for ${project.title}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="ref-code text-ink">{project.category}</span>
              <span
                aria-hidden
                className="flex size-10 items-center justify-center border border-ink font-serif text-xl text-ink transition-colors group-hover:bg-ink group-hover:text-paper"
              >
                ↗
              </span>
            </div>

            <div className="mt-8">
              <span className="status-stamp">{project.status}</span>
              <h3 className="mt-5 font-serif text-2xl leading-tight text-ink sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                {project.summary}
              </p>
            </div>

            <div className="mt-auto border-t border-rule pt-5">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {project.meta.slice(0, 2).map((item) => (
                  <span key={item.label} className="ref-code">
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
        </div>
      </div>

      {selectedProject && (
        <CaseModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
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
    <section id="more" className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
  const navigation = [
    ["Home", "#top"],
    ["About", "#about"],
    ["Skills", "#toolkit"],
    ["Portfolio", "#work"],
  ];

  return (
    <footer id="contact" className="border-t border-rule bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1.15fr_1fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex size-12 shrink-0 items-center justify-center rounded-full border border-ink font-mono text-sm font-semibold text-ink"
              >
                PR
              </span>
              <div className="font-serif text-2xl font-semibold tracking-tight text-ink">
                Priyans Kevadia
              </div>
            </div>

            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/75">
              Commerce student applying AI, marketing, and systems thinking to
              solve modern business challenges.
            </p>

            <div className="mt-6">
              <a
                href="https://www.linkedin.com/in/priyans-kevadia-29805b334/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center border border-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div>
            <h3 className="ref-code text-ink">Navigation</h3>
            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {navigation.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-base text-ink/75 transition-colors hover:text-stamp"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="ref-code text-ink">Contact</h3>
            <address className="mt-5 space-y-4 not-italic">
              <div>
                <div className="ref-code">Email</div>
                <a
                  href="mailto:priyans.kevadia@torontomu.ca"
                  className="mt-1 block break-all text-base text-ink/75 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-stamp hover:decoration-stamp"
                >
                  priyans.kevadia@torontomu.ca
                </a>
              </div>

              <div>
                <div className="ref-code">Phone</div>
                <a
                  href="tel:+14378585011"
                  className="mt-1 block text-base text-ink/75 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-stamp hover:decoration-stamp"
                >
                  +1 437-858-5011
                </a>
              </div>

              <div>
                <div className="ref-code">Location</div>
                <p className="mt-1 text-base text-ink/75">
                  Mississauga, ON, Canada
                </p>
              </div>
            </address>
          </div>

          <div>
            <h3 className="ref-code text-ink">Let&apos;s work together</h3>
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              Interested in AI automation, marketing, or business projects?
              Let&apos;s connect.
            </p>

            <a
              href="mailto:priyans.kevadia@torontomu.ca"
              className="ledger-link mt-6 inline-block font-mono text-xs uppercase tracking-[0.12em]"
            >
              Start a conversation ↗
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-rule pt-6 text-center">
          <p className="font-mono text-xs tracking-[0.04em] text-khaki">
            © 2026 Priyans. All rights reserved.
          </p>
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
