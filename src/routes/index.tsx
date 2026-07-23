import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Boxes,
  Search,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyans Kevadia — AI Enthusiast" },
      {
        name: "description",
        content:
          "Priyans Kevadia is a marketing student and AI enthusiast building practical digital systems, automation workflows, and AI-powered products.",
      },
      {
        property: "og:title",
        content: "Priyans Kevadia — AI Enthusiast",
      },
      {
        property: "og:description",
        content:
          "Selected AI, automation, operations, and market-research projects by Priyans Kevadia.",
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
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-tight text-ink sm:text-2xl"
        >
          Priyans Kevadia
        </a>

        <nav className="hidden items-center gap-7 sm:flex">
          {[
            ["Work", "#work"],
            ["More", "#more"],
            ["Toolkit", "#toolkit"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-stamp"
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
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          AI Enthusiast
        </h1>

        <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
          I build AI-powered products and practical digital systems that connect
          marketing, technology, and real business operations.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-khaki">
            Location
          </span>
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

/* -------------------------------------------------------------------------- */

function About() {
  return (
    <section id="about" className="border-b border-rule">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-[220px_1fr]">
        <h2 className="font-serif text-2xl text-ink">About</h2>

        <div className="max-w-3xl font-serif text-xl leading-relaxed text-ink">
          <p>
            I’m a 4th-year Marketing student at Toronto Metropolitan University,
            focused on combining business, technology, and AI. I work with data
            workflows, documentation systems, and contribute to website
            development and SEO optimization. I’m passionate about using AI and
            digital tools to streamline processes and build practical solutions
            that drive real business impact.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

type ProjectStatus = "LIVE" | "IN USE" | "ONGOING";

type Project = {
  category: string;
  status: ProjectStatus;
  title: string;
  summary: string;
  tags: string[];
  icon: LucideIcon;
  problem: string;
  build: string[];
  outcome: string;
  meta: { label: string; value: string }[];
  links?: { label: string; href: string }[];
};

const PROJECTS: Project[] = [
  {
    category: "AI PRODUCT",
    status: "LIVE",
    title: "ListingsReady",
    summary:
      "A structured workflow library that helps e-commerce sellers create more accurate AI-generated product photography.",
    tags: ["React", "TypeScript", "AI Workflows", "Vercel"],
    icon: Sparkles,
    problem:
      "E-commerce sellers need consistent AI image-generation prompts for product photography. Without a structured workflow, sellers repeatedly rebuild prompts and often receive images that alter product colours, proportions, branding, or visible details.",
    build: [
      "Built a React and TypeScript product deployed through Vercel.",
      "Created the data structure for 30 apparel-focused prompt workflows.",
      "Organized each workflow around prompt instructions, common errors, fixes, compliance, and practical execution guidance.",
      "Resolved TanStack Router issues affecting direct links to individual workflow pages.",
    ],
    outcome:
      "ListingsReady became a live product and a practical testing ground for product accuracy, workflow design, organic marketing, and user feedback in the e-commerce market.",
    meta: [
      { label: "Role", value: "Product, workflow design, data, testing" },
      { label: "Stack", value: "React, TypeScript, TanStack Router, Vercel" },
      { label: "State", value: "Live and being developed" },
    ],
    links: [
      { label: "Visit ListingsReady", href: "https://listingsready.com" },
    ],
  },
  {
    category: "OPERATIONS",
    status: "IN USE",
    title: "Trading Operations System",
    summary:
      "A connected business-management system for purchases, sales, inventory, payments, reporting, and daily operating visibility.",
    tags: ["Excel", "Inventory", "Reporting", "Operations"],
    icon: Boxes,
    problem:
      "A trading business handling a large product catalogue needed one reliable system to connect purchasing, sales, stock movement, customer and supplier balances, expenses, payments, and management reporting.",
    build: [
      "Designed the workbook architecture across transactions, SKU master, inventory, ledger, and reports.",
      "Created transaction logic for purchases, sales, expenses, income, payments received, and payments made.",
      "Connected cash and credit rules to accounts receivable and accounts payable behaviour.",
      "Defined inventory movement, reorder alerts, latest purchase pricing, and contact-level reporting.",
    ],
    outcome:
      "The system provides a practical operating structure for tracking stock, transactions, balances, and business performance without requiring a complex enterprise platform.",
    meta: [
      { label: "Role", value: "System architecture and workflow design" },
      { label: "Tools", value: "Excel, formulas, validation, reporting logic" },
      { label: "State", value: "Used for business operations" },
    ],
  },
  {
    category: "MARKET RESEARCH",
    status: "ONGOING",
    title: "India Opportunity Research",
    summary:
      "Structured research into customer pain points and business opportunities across AI, D2C, renewable energy, and healthcare.",
    tags: ["Research", "India", "AI", "Business Strategy"],
    icon: Search,
    problem:
      "Business ideas often appear attractive before there is enough evidence of customer urgency, purchasing behaviour, competitive gaps, or realistic execution conditions in the Indian market.",
    build: [
      "Created recurring research frameworks for identifying evidence-backed customer pain points.",
      "Compared opportunities using market urgency, customer willingness to pay, competition, operational difficulty, and automation potential.",
      "Reviewed business press, government publications, industry reports, community discussions, and startup activity.",
      "Focused the research on practical opportunities that can be validated and operated by a small team.",
    ],
    outcome:
      "The research creates a disciplined pipeline of opportunities to investigate rather than relying only on trends, assumptions, or attractive market-size claims.",
    meta: [
      { label: "Role", value: "Research design, synthesis, opportunity evaluation" },
      { label: "Focus", value: "AI, D2C, renewable energy, pharma and healthcare" },
      { label: "State", value: "Ongoing research programme" },
    ],
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="work-modal-panel mx-auto my-4 max-w-4xl rounded-[2rem] border border-white/10 bg-[#0b0b0b] text-white shadow-2xl sm:my-10"
      >
        <div className="border-b border-white/10 p-6 sm:p-9">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#ff6a3d] text-black">
                <Icon aria-hidden size={25} strokeWidth={2} />
              </span>

              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] text-[#ff7a4d]">
                  {project.category}
                </span>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-white/50">
                  {project.status}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-[#ff6a3d]/60 hover:text-white"
              aria-label="Close project details"
            >
              <X aria-hidden size={20} />
            </button>
          </div>

          <h3
            id="project-dialog-title"
            className="mt-8 max-w-3xl font-sans text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
          >
            {project.title}
          </h3>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">
            {project.summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/[0.06] px-3 py-1.5 text-sm text-white/65"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-9">
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#ff7a4d]">
                Problem
              </h4>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#ff7a4d]">
                What I built
              </h4>
              <ul className="mt-4 space-y-4">
                {project.build.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[30px_1fr] gap-3 text-sm leading-relaxed text-white/72 sm:text-base"
                  >
                    <span className="flex size-7 items-center justify-center rounded-full bg-white/[0.06] font-mono text-xs text-[#ff7a4d]">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#ff7a4d]">
                Outcome
              </h4>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                {project.outcome}
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <h4 className="font-sans text-lg font-semibold text-white">
              Project facts
            </h4>

            <dl className="mt-5 space-y-5">
              {project.meta.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-white/40">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-white/75">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {project.links && (
              <div className="mt-7 border-t border-white/10 pt-6">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#ff6a3d] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#ff815c]"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden size={17} />
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="work" className="border-b border-[#1f1f1f] bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <h2 className="font-sans text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Featured work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
            Select a project to see the problem, process, tools, and outcome in
            detail.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => {
            const Icon = project.icon;

            return (
              <button
                key={project.title}
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`Open details for ${project.title}`}
                className="group flex min-h-[410px] w-full flex-col rounded-[2rem] border border-[#252525] bg-[#0b0b0b] p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#ff6a3d]/60 hover:shadow-[0_22px_70px_rgba(0,0,0,0.45)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="flex size-14 items-center justify-center rounded-full bg-[#ff6a3d] text-black transition-transform duration-300 group-hover:scale-105">
                    <Icon aria-hidden size={25} strokeWidth={2} />
                  </span>

                  <span className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/55 transition group-hover:border-[#ff6a3d]/50 group-hover:text-[#ff7a4d]">
                    <ArrowUpRight aria-hidden size={21} />
                  </span>
                </div>

                <div className="mt-8">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] text-[#ff7a4d]">
                    {project.category}
                  </span>

                  <h3 className="mt-6 font-sans text-2xl font-semibold leading-tight tracking-tight text-white sm:text-[1.7rem]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-white/60">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.055] px-3 py-1.5 text-sm text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
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
    tag: "CONTENT & GROWTH",
    title: "Content for Indian business owners",
    body: "Educational content focused on AI tools, practical prompts, digital workflows, and business applications for Indian audiences.",
  },
  {
    tag: "CLIENT WORK",
    title: "Social systemization",
    body: "A repeatable AI-assisted process for creating branded social posts across Instagram, LinkedIn, and Facebook.",
  },
  {
    tag: "BRAND & PACKAGING",
    title: "AI-assisted brand concepts",
    body: "Product imagery, packaging concepts, and visual direction created for healthcare, retail, and consumer-product ideas.",
  },
];

function More() {
  return (
    <section id="more" className="border-b border-rule bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">
          Additional work
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
          {MORE.map((item) => (
            <div key={item.title} className="flex flex-col bg-paper p-6">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-ledger">
                {item.tag}
              </span>

              <h3 className="mt-4 font-serif text-xl leading-snug text-ink">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                {item.body}
              </p>
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
      "AI workflow design",
    ],
  },
  {
    group: "Research & strategy",
    items: [
      "Market research",
      "Competitor analysis",
      "Opportunity evaluation",
      "SEO optimization",
    ],
  },
  {
    group: "Operations",
    items: [
      "Excel systems",
      "Inventory workflows",
      "Documentation",
      "Shipping and logistics",
    ],
  },
  {
    group: "Content & growth",
    items: [
      "AI-assisted content",
      "Prompt engineering",
      "Canva / Figma",
      "Brand systems",
    ],
  },
];

function Toolkit() {
  return (
    <section id="toolkit" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">Toolkit</h2>

        <div className="mt-10 space-y-8">
          {TOOLKIT.map((tool) => (
            <div
              key={tool.group}
              className="grid grid-cols-1 gap-4 border-t border-rule pt-6 md:grid-cols-[240px_1fr]"
            >
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink">
                {tool.group}
              </div>

              <ul className="flex flex-wrap gap-2">
                {tool.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-ink/25 bg-paper px-3 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-ink"
                  >
                    {item}
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
        <h2 className="font-serif text-4xl text-paper sm:text-5xl">
          Let&apos;s talk.
        </h2>

        <p className="mt-4 max-w-xl font-serif text-xl text-paper/85">
          Hiring, admissions, collaborations, or conversations about AI and
          practical business systems — reach out.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-paper/20 pt-8 md:grid-cols-2">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-paper/60">
              Email
            </div>

            <a
              href="mailto:hello@example.com"
              className="mt-2 block font-serif text-2xl text-paper underline decoration-stamp decoration-2 underline-offset-[6px] hover:decoration-paper"
            >
              hello@example.com
            </a>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-paper/60">
              Elsewhere
            </div>

            <ul className="mt-2 space-y-2 font-mono text-sm">
              {[
                ["ListingsReady", "https://listingsready.com"],
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
          <span className="font-mono text-xs tracking-[0.04em] text-paper/55">
            Priyans Kevadia © 2026
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-paper/55">
            Canada → India
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
