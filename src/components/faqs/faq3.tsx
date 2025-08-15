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
export default function Faq3() {
  const faqItems = [
    {
      question: "How long does it take to buy a home?",
      answer:
        "On average, it takes 30-45 days from the time your offer is accepted to closing, but it can vary based on inspections, appraisals, and financing.",
    },
    {
      question: "How much money do I need for a down payment?",
      answer:
        "Many loans allow as little as 3–5% down, and some programs require no down payment. Your lender can tell you what works best for you.",
    },
    {
      question: "Why should I use a real estate agent instead of buying or selling on my own?",
      answer:
        "An agent brings market expertise, negotiation skills, and guidance to avoid costly mistakes, often saving you time and money in the long run.",
    },
    {
      question: "What’s the difference between pre-qualification and pre-approval?",
      answer:
        "Pre-qualification is an estimate of what you can afford, while pre-approval is a lender’s written commitment after reviewing your finances.",
    },
    {
      question: " Can I buy a home with bad credit? ",
      answer:
        "Potentially, some loan programs work with lower credit scores, however improving your credit score may give you better rates and terms.",
    },
    {
      question: "How do you help sellers get the best price?",
      answer:
        "We use professional marketing, staging advice, and market analysis to position your home for maximum value.",
    },
    {
      question: "Do I need a 20% down payment to buy a home?",
      answer:
        " No. Many loans require far less, and some programs even offer zero down payment options.",
    },
    {
      question: "How much does it cost to work with a buyer’s agent?",
      answer:
        "Buyer’s agent fees can be paid by the buyer, the seller, or both. We’ll outline costs upfront.",
    },
  ];

  return (
    <main className="mx-auto  px-4 py-16 sm:py-20 bg-[#F1F8F4]">
      <h1 className="text-center text-[#171B26] text-3xl font-extrabold tracking-tight sm:text-4xl">
        Real Estate Services
      </h1>
      <div className="mt-8 sm:mt-12 container">
        <FaqAccordion items={faqItems} defaultOpen={1} />
      </div>
    </main>
  );
}
