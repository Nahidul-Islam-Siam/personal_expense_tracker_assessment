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
export default function Faq5() {
  const faqItems = [
    {
      question: "What is a notary public? ",
      answer:
        "A notary public is an official authorized to verify identities, witness signatures, and administer oaths on important documents.",
    },
    {
      question: "What types of documents can you notarize?",
      answer:
        "We can notarize a variety of documents, including contracts, real estate documents, affidavits, wills, powers of attorney, and more.",
    },
    {
      question: "Do I need to bring an ID for notarization? ",
      answer:
        "Yes, you must present a valid government-issued photo ID such as a driver’s license or passport.",
    },
    {
      question: " Can you come to me for a notarization? ",
      answer:
        "Yes, we offer flexible scheduling and can travel to your location when needed.",
    },
     {
      question: "How long does the notarization process take?",
      answer:
        "Most appointments take just a few minutes once all documents and identification are ready",
    },
  ];

  return (
    <main className="mx-auto px-4 py-16 sm:py-20">
      <h1 className="text-center text-3xl font-extrabold tracking-tigh text-[#171B26]  sm:text-4xl">
        Notary Services
      </h1>
      <div className="mt-8 sm:mt-12 container">
        <FaqAccordion items={faqItems} defaultOpen={1} />
      </div>
    </main>
  );
}
