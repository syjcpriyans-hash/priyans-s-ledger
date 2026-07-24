import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyans — Builder, Researcher, Operator" },
      {
        name: "description",
        content:
          "AI-powered products, client-built Excel business systems, and structured research into Indian SME and D2C markets. See ListingsReady, the Product Shopping Zone Excel system, and the Delmen shipping workflow.",
      },
      { property: "og:title", content: "Priyans — Builder, Researcher, Operator" },
      {
        property: "og:description",
        content:
          "AI-powered products, client-built Excel business systems, and structured research into Indian SME and D2C markets. See ListingsReady, the Product Shopping Zone Excel system, and the Delmen shipping workflow.",
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
            ["AI School", "#ai-school"],
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
  status: "LIVE" | "IN USE" | "ONGOING" | "CLIENT PROJECT";
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
    file?: string;
    fileName?: string;
  };
  links?: {
    label: string;
    href: string;
    download?: boolean | string;
  }[];
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
    category: "CLIENT SYSTEM · EXCEL AUTOMATION",
    status: "CLIENT PROJECT",
    title: "Product Shopping Zone — Excel Operations System",
    summary:
      "A client-built Excel business management system connecting transactions, inventory, supplier and customer balances, accounting, financial statements, and management reporting across 11 worksheets.",
    problem:
      "Product Shopping Zone approached me to design a practical Excel system for managing its day-to-day business information in one connected place. The requirement was broader than stock tracking: the system needed to record purchases and sales, distinguish cash and credit transactions, monitor supplier and customer balances, calculate inventory values, and produce financial and management reports without repeatedly entering the same information.",
    build: [
      "Gathered the client requirements and translated the operating process into an 11-sheet workbook architecture covering Transactions, SKU Master, Inventory, Ledger, Accounts Payable, Accounts Receivable, Profit & Loss, Balance Sheet, Item by Contact, Purchase Reports, and Sales Reports.",
      "Designed a single-entry Transactions sheet supporting purchases, sales, expenses, income, payments received, and payments made, with automated cash-versus-credit account logic.",
      "Built a SKU-driven inventory model that calculates total purchased, total sold, current stock, average purchase cost, latest purchase price, inventory value, and reorder status.",
      "Created connected supplier and customer balance systems, an automated debit-and-credit ledger, a Profit & Loss statement, and a Balance Sheet with an accounting balance check.",
      "Developed item-, contact-, and category-level purchase and sales reports, supported by six management charts for quicker business analysis.",
      "Structured the workbook for up to 10,000 transaction rows using 156,000+ formulas, named ranges, data validation, conditional formatting, VLOOKUP, SUMIFS, SUMPRODUCT, INDEX/MATCH, LOOKUP, and error-handling logic.",
    ],
    outcome:
      "Delivered a working Excel-based operations prototype that centralizes the client's core records and converts transaction entries into inventory, receivable, payable, accounting, financial-statement, and reporting outputs. The project demonstrates my ability to gather business requirements, map operational processes, design a connected system, apply financial logic, and turn a client's request into a usable business tool.",
    meta: [
      {
        label: "ROLE",
        value:
          "Business systems designer · Excel developer · Client requirements lead",
      },
      {
        label: "SCALE",
        value:
          "11 connected sheets · 10,000 transaction rows · 156,000+ formulas · 6 charts",
      },
      {
        label: "TOOLS",
        value:
          "Microsoft Excel · VLOOKUP · SUMIFS · SUMPRODUCT · INDEX/MATCH · Data validation · Conditional formatting",
      },
      {
        label: "SKILLS",
        value:
          "Requirements gathering · Process mapping · Inventory modelling · Financial reporting · Systems thinking · Client communication",
      },
    ],
    artifact: {
      label: "Product Shopping Zone — Excel operations workbook",
      caption:
        "Downloadable client workbook containing 11 connected operational, accounting, and reporting sheets.",
      file: "/product-shopping-zone-excel-system.xlsx",
      fileName: "Product_Shopping_Zone_Excel_Operations_System.xlsx",
    },
    links: [
      {
        label: "Download Excel workbook",
        href: "/product-shopping-zone-excel-system.xlsx",
        download: "Product_Shopping_Zone_Excel_Operations_System.xlsx",
      },
      {
        label: "View Product Shopping Zone",
        href: "https://www.instagram.com/productshoppingzone/?hl=en",
      },
    ],
  },
  {
    code: "WORK/03",
    category: "WORKPLACE SYSTEM · LOGISTICS",
    status: "IN USE",
    title: "Delmen Shipping Quote & Tracking System",
    summary:
      "An Excel-based logistics workflow used at Delmen Pharmacy and Medical Equipment to compare carrier quotes, standardize shipment data, retrieve tracking links, and monitor delivery timelines.",
    problem:
      "Delmen ships pharmacy and medical equipment to customers across Canada. Each shipment may require quotes from multiple carriers with different prices, transit times, and service levels. Managing quote information, customer details, booked shipments, tracking numbers, carrier links, and delivery status across separate records created repeated data entry and made shipment information slower to retrieve.",
    build: [
      "Mapped the full quote-to-shipment workflow used in my day-to-day shipping responsibilities and identified the information required at each stage.",
      "Built a carrier Quote Tracker that records customer, pharmacy, destination, product, carrier, transit time, quoted amount, service level, quote number, and additional shipment items.",
      "Created a connected Shipment Tracker for shipment date, customer, destination, carrier, expected delivery time, tracking number, delivery status, delay status, and carrier tracking links.",
      "Automated repeated fields so the Shipment Tracker retrieves business name, city, province, transit time, and carrier link from the quote and master-data sheets.",
      "Developed a supporting master-data architecture containing Canadian cities, province-specific city lists, carrier information, tracking links, and Delmen product codes.",
      "Implemented Excel Tables, structured references, INDEX/MATCH, IF, IFERROR, named ranges, data-validation dropdowns, and cross-sheet lookup logic to keep data standardized and expandable.",
    ],
    outcome:
      "The system is currently used in my work at Delmen Pharmacy and Medical Equipment to organize carrier quotes and shipment information in one structured workflow. It supports faster quote comparison, reduces repeated entry, centralizes tracking information, and improves visibility into expected delivery timelines without requiring a separate logistics platform.",
    meta: [
      {
        label: "ROLE",
        value:
          "Operations systems designer · Excel automation developer · Shipping workflow owner",
      },
      {
        label: "USE",
        value:
          "Current workplace system · Canada-wide pharmacy and medical-equipment shipments",
      },
      {
        label: "TOOLS",
        value:
          "Microsoft Excel · Excel Tables · INDEX/MATCH · IF/IFERROR · Named ranges · Data validation",
      },
      {
        label: "SKILLS",
        value:
          "Workflow mapping · Logistics operations · Process improvement · Data architecture · Master-data management · Operational automation",
      },
    ],
    artifact: {
      label: "Delmen — shipping operations workflow",
      caption:
        "Sanitized portfolio preview showing the carrier Quote Tracker and Shipment Tracker with fictional customer, quote, and tracking data.",
      image: "/delmen-shipping-system-proof.png",
      alt: "Sanitized Delmen Shipping Quote and Tracking System showing a carrier quote comparison table and a shipment tracking table with fictional data.",
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
                        target={link.download ? undefined : "_blank"}
                        rel={link.download ? undefined : "noreferrer"}
                        download={link.download}
                        className="ledger-link font-mono text-xs uppercase tracking-[0.14em]"
                      >
                        {link.label} {link.download ? "↓" : "↗"}
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
            ) : project.artifact.file ? (
              <a
                href={project.artifact.file}
                download={project.artifact.fileName ?? true}
                className="artifact-frame group block aspect-[4/3] w-full transition-shadow hover:shadow-[0_0_0_1px_var(--color-ink)]"
                aria-label={`Download ${project.artifact.label}`}
              >
                <div className="flex h-full flex-col justify-between p-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="ref-code">{project.category}</span>
                    <span
                      aria-hidden
                      className="font-mono text-xl text-ink transition-transform group-hover:translate-y-0.5"
                    >
                      ↓
                    </span>
                  </div>
                  <div>
                    <div className="font-mono text-sm uppercase tracking-wide text-ink">
                      {project.artifact.label}
                    </div>
                    <div className="mt-2 font-mono text-xs leading-relaxed text-khaki">
                      {project.artifact.caption}
                    </div>
                    <div className="mt-4 border-t border-rule pt-3 font-mono text-xs uppercase tracking-[0.1em] text-ledger">
                      Download workbook
                    </div>
                  </div>
                </div>
              </a>
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

type AIReel = {
  title: string;
  outcome: string;
  tools: string;
  image: string;
  href: string;
};

const AI_REELS: AIReel[] = [
  {
    title: "Extract Business Data at Scale",
    outcome:
      "Learn how Claude and Apify can collect and organize high-volume business information for research and lead-generation workflows.",
    tools: "Claude · Apify",
    image: "/ai-school/extract-business-data.jpg",
    href: "https://www.instagram.com/aischoolforbusiness/?hl=en",
  },
  {
    title: "Design Professional Product Packaging",
    outcome:
      "See how AI can support packaging concepts, product positioning, and visual direction for a business.",
    tools: "Claude · Gemini",
    image: "/ai-school/product-packaging.jpg",
    href: "https://www.instagram.com/aischoolforbusiness/?hl=en",
  },
  {
    title: "Create Product Videos with AI",
    outcome:
      "Learn a practical workflow for turning product ideas and assets into short promotional videos.",
    tools: "ChatGPT · Kling AI",
    image: "/ai-school/product-videos.jpg",
    href: "https://www.instagram.com/aischoolforbusiness/?hl=en",
  },
  {
    title: "Develop Clothing Design Concepts",
    outcome:
      "Explore how generative AI can help businesses visualize clothing concepts before production.",
    tools: "Gemini",
    image: "/ai-school/clothing-designs.jpg",
    href: "https://www.instagram.com/aischoolforbusiness/?hl=en",
  },
  {
    title: "Create Product Photography",
    outcome:
      "Learn how AI can produce product-photo concepts for e-commerce, advertising, and social media.",
    tools: "Gemini",
    image: "/ai-school/product-photography.jpg",
    href: "https://www.instagram.com/aischoolforbusiness/?hl=en",
  },
  {
    title: "Automate Repetitive Business Emails",
    outcome:
      "See how ChatGPT can draft recurring customer, supplier, and operational emails more efficiently.",
    tools: "ChatGPT",
    image: "/ai-school/automate-emails.jpg",
    href: "https://www.instagram.com/aischoolforbusiness/?hl=en",
  },
  {
    title: "Design Social Media Content",
    outcome:
      "Learn a structured AI workflow for creating professional social-media concepts and branded posts.",
    tools: "ChatGPT · Lovart",
    image: "/ai-school/social-media-posts.jpg",
    href: "https://www.instagram.com/aischoolforbusiness/?hl=en",
  },
  {
    title: "Build a Professional Business Website",
    outcome:
      "See how an AI website builder can turn a business concept into a functional web presence.",
    tools: "Lovable",
    image: "/ai-school/business-website.jpg",
    href: "https://www.instagram.com/aischoolforbusiness/?hl=en",
  },
];

function AISchool() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const moveCarousel = (direction: 1 | -1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const distance = Math.max(carousel.clientWidth * 0.82, 300);
    carousel.scrollBy({
      left: distance * direction,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const isNearEnd =
        carousel.scrollLeft + carousel.clientWidth >=
        carousel.scrollWidth - 24;

      if (isNearEnd) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        moveCarousel(1);
      }
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="ai-school" className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="ref-code">SECTION / 04</div>
            <h2 className="mt-2 max-w-3xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
              Turning AI Tools into Business Workflows
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/75 sm:text-lg">
              I created AI School for Business to translate emerging AI tools
              into practical workflows for small-business owners. Through short
              educational reels, I demonstrated applications across automation,
              research, branding, content, product photography, and website
              development.
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              className="flex size-11 items-center justify-center border border-ink font-serif text-xl text-ink transition-colors hover:bg-ink hover:text-paper"
              aria-label="View previous AI School reel"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              className="flex size-11 items-center justify-center border border-ink font-serif text-xl text-ink transition-colors hover:bg-ink hover:text-paper"
              aria-label="View next AI School reel"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onPointerDown={() => setIsPaused(true)}
        >
          {AI_REELS.map((reel) => (
            <a
              key={reel.title}
              href={reel.href}
              target="_blank"
              rel="noreferrer"
              className="group min-w-[84%] snap-start border border-rule bg-paper transition-shadow hover:shadow-[0_0_0_1px_var(--color-ink)] sm:min-w-[47%] lg:min-w-[31%]"
              aria-label={`View ${reel.title} on Instagram`}
            >
              <div className="overflow-hidden border-b border-rule bg-white">
                <img
                  src={reel.image}
                  alt={`${reel.title} reel cover from AI School for Business`}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                  loading="lazy"
                />
              </div>

              <div className="flex min-h-[250px] flex-col p-5 sm:p-6">
                <span className="ref-code text-ledger">AI SCHOOL FOR BUSINESS</span>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-ink">
                  {reel.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {reel.outcome}
                </p>

                <div className="mt-auto border-t border-rule pt-5">
                  <div className="ref-code">TOOLS</div>
                  <div className="mt-1 font-mono text-xs leading-relaxed text-ink">
                    {reel.tools}
                  </div>
                  <div className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-ledger">
                    View on Instagram ↗
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-5 border-t border-rule pt-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="ref-code">ROLE</div>
            <p className="mt-2 font-mono text-xs leading-relaxed text-ink">
              Founder · AI content strategist · Business educator
            </p>
            <div className="ref-code mt-5">SKILLS</div>
            <p className="mt-2 font-mono text-xs leading-relaxed text-ink">
              AI research · Business education · Content strategy · Workflow
              design · Short-form communication · Audience building
            </p>
          </div>

          <a
            href="https://www.instagram.com/aischoolforbusiness/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center border border-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            View @aischoolforbusiness ↗
          </a>
        </div>
      </div>
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
            <div className="ref-code">SECTION / 05</div>
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
        <div className="ref-code">SECTION / 06</div>
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
      <AISchool />
      <More />
      <Toolkit />
      <Contact />
    </main>
  );
}
