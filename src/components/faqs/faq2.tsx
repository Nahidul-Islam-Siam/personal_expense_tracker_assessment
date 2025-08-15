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
export default function Faq2() {
  const faqItems = [
    {
      question:
        " What do I need to file my business taxes?",
      answer:
        "You’ll need your income records, expense receipts, payroll reports (if applicable), and any other documents that show your business’ sfinancial activity for the year.",
    },
    {
      question: "Can you help me reduce my tax liability? ",
      answer:
        "Yes,we look for every deduction and credit you qualify for, and we can suggest strategies to reduce your tax liability in the future.",
    },
    {
      question: "When are business taxes due?",
      answer:
        "Most business tax returns are due by March 15 or April 15, depending on your business type, but deadlines can vary.",
    },
    {
      question: "Can you file the return if my business is in another state?",
      answer:
        "Yes, we file for businesses in all 50 states and can work with you remotely through our secure portal.",
    },
    {
      question: "When should I consider quarterly tax payments to the IRS?",
      answer:
        "If your business owes more than $1,000 in taxes, you may need to make estimated payments every quarter to avoid penalties.",
    },
  ];

  return (
    <main className="mx-auto  px-4 py-16 sm:py-20 bg-[#FAF6ED]">
      <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
        Business tax Filling
      </h1>
      <div className="mt-8 sm:mt-12 container">
        <FaqAccordion items={faqItems} defaultOpen={1} />
      </div>
    </main>
  );
}
