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
export default function Faq1() {
  const faqItems = [
    {
      question: "How much do you charge?",
      answer:
        "Pricing depends on the forms and schedules needed. Each has a set fee; your total is the sum required for an accurate filing. We’ll confirm the price after review, and it may vary year to year.",
    },
    {
      question: "How long does it take to get my refund?",
      answer:
        "If the Child Tax Credit or Earned Income Credit was claimed, the IRS cannot release your refund until at least February 15, and it may arrive around February 27 or later.For most other refunds, the IRS states that about 90% are issued within 21 days. You can track yours using the Can you file in any state",
    },
    {
      question: "Can you file in any state?",
      answer:
        "Yes, we work with clients nationwide.Most of our work is done through our secure portal, email, and phone appointments.In-person meetings are not required.",
    },
    {
      question: "What should I do if I receive a notice from the IRS?",
      answer:
        "Send us the notice right away. We’ll review it,and instruct you on how to respond.IRS notices are not always correct, andmost require a response within 30 days.In some cases, a special form is needed if you want us to sign on your behalf.",
    },
     {
      question: " I filed my tax return on [Date], I still have not received my refund.",
      answer:
        "If your refund is late, it could be due to a debt offset (call 800-304-3107) A processing delay (call the IRS at 800-829-4477 If it’s been over 3 weeks), incorrect deposit or mailing info, or because federal and state refunds are issued separately.",
    },
  ];

  return (
    <main className="mx-auto px-4 py-16 sm:py-20">
      <h1 className="text-center text-3xl font-extrabold tracking-tigh text-[#171B26]  sm:text-4xl">
        Individual Tax Filling
      </h1>
      <div className="mt-8 sm:mt-12 container">
        <FaqAccordion items={faqItems} defaultOpen={1} />
      </div>
    </main>
  );
}
