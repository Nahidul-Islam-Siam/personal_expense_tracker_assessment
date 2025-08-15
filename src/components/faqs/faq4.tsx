"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export const metadata = {
  title: "Tax Preparation & Strategy – FAQ",
  description: "Frequently asked questions about tax preparation and strategy.",
};

type FaqItem = {
  question: string;
  answer: string;
};

const FaqAccordion = ({
  items = [
    {
      question: "Sample question?",
      answer: "Sample answer.",
    },
  ],
  defaultOpen = 0,
}: {
  items?: FaqItem[];
  defaultOpen?: number | null;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    typeof defaultOpen === "number" ? defaultOpen : null
  );

  const baseId = `faq-${Math.random().toString(36).substring(2, 9)}`; // Simulate useId manually if needed

  const toggle = (idx: number) => {
    setOpenIndex((cur) => (cur === idx ? null : idx));
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const headerId = `${baseId}-header-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <section key={idx} aria-labelledby={headerId}>
            <div
              className={[
                "w-full transition-colors",
                isOpen
                  ? "rounded-xl bg-emerald-700 text-white"
                  : "rounded-full border border-gray-200 bg-white",
              ].join(" ")}
            >
              {/* Accordion Header */}
              <button
                id={headerId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
                className={[
                  "flex w-full items-center justify-between gap-4",
                  "px-5 py-4 text-left",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl",
                  isOpen ? "text-white" : "text-gray-800",
                ].join(" ")}
              >
                <span className="text-[15px] sm:text-base font-medium">
                  {item.question}
                </span>
                <span
                  className={[
                    "inline-flex h-8 w-8 items-center justify-center rounded-full",
                    isOpen ? "bg-emerald-800/60" : "bg-gray-50",
                    "border",
                    isOpen ? "border-emerald-600" : "border-gray-200",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4 text-gray-700" />
                  )}
                  <span className="sr-only">
                    {isOpen ? "Collapse" : "Expand"}
                  </span>
                </span>
              </button>

              {/* Accordion Panel */}
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className="px-5 pb-4 -mt-1"
                >
                  <p
                    className={[
                      "text-sm leading-6",
                      isOpen ? "text-emerald-50" : "text-gray-600",
                    ].join(" ")}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

// Main Page Component
export default function Faq4() {
  const faqItems = [
    {
      question: "Why is strategy important for my business?",
      answer:
        "A clear strategy helps you set goals, make smart decisions based on data, and grow your business by a measurable metric towards the set goal.",
    },
    {
      question: "How can IT consulting help my business? ",
      answer:
        "IT consulting aligns technology with your goals so you reach more customers and run leaner process. We assess your needs, map your processes, and implement the right tools and then train your team.",
    },
    {
      question: "How can you help our marketing?",
      answer:
        "Set up and optimize Google Ads/Meta Ads, run SEO audits/fixes, implement GA4 + Tag Manager for end-to-end tracking.",
    },
    {
      question: "How do we know what’s working? ",
      answer:
        "Define KPIs, build marketing dashboards, and set up attribution so spend maps to results.",
    },
    {
      question: "How can you streamline our operations? ",
      answer:
        "Map processes, remove bottlenecks, and automate handoffs.",
    },
    {
      question: "Can you help pick or implement an ERP/CRM?",
      answer:
        "Yes—evaluate options (e.g., NetSuite, Odoo, Salesforce, HubSpot), run pilots, migrate data, and train teams.",
    },
    {
      question: "We need better reporting, where do we start? ",
      answer:
        "Stand up a data warehouse, automate pipelines, and deliver Power BI dashboards for finance, sales, and ops.",
    },
    {
      question: "Can you clean up our data? ",
      answer:
        "Standardize, dedupe, and validate data; add governance so reports stay trustworthy.",
    },
    {
      question: "Can you fix our website performance and SEO? ",
      answer:
        "Improve speed, UX, schema, and technical SEO; connect GA4 + Search Console.",
    },
  ];

  return (
    <main className="mx-auto  px-4 py-16 sm:py-20 bg-white">
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-[#171B26] sm:text-4xl">
        Strategy & IT Consulting
      </h1>
      <div className="mt-8 sm:mt-12 container">
        <FaqAccordion items={faqItems} defaultOpen={1} />
      </div>
    </main>
  );
}
