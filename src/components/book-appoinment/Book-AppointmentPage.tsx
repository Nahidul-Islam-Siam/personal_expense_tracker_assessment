"use client";

import { useState } from "react";
import { CalendarIcon, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type AppointmentFormProps = {
  services?: { value: string; label: string }[];
  className?: string;
};

export default function AppointmentForm({
  services = [
    { value: "", label: "Choose a service" },
    { value: "consult", label: "Initial Consultation" },
    { value: "followup", label: "Follow-up Meeting" },
    { value: "virtual", label: "Virtual Call" },
  ],
  className,
}: AppointmentFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Simulate async submit
    await new Promise((r) => setTimeout(r, 800));

    setSubmitting(false);
    setMessage(
      `Thanks ${
        data.get("firstName") || "there"
      } — your appointment request has been received. We’ll be in touch soon.`
    );
    form.reset();
  }

  const inputBase =
    "w-full rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500";

  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto  rounded-2xl bg-[#F1F8F4] px-4 py-10 sm:px-8">
      

              <h1 className="md:text-5xl text-4xl text-gray-900 leading-[120%] font-bold text-black-900 font-inter mb-10 text-center">
          Book an Appointment
          </h1>

        <form onSubmit={onSubmit} className="mt-8 space-y-5 container">
          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="mb-1 block text-xs font-medium text-slate-700"
            >
              Select a Service
            </label>
            <select
              id="service"
              name="service"
              required
              className={cn(inputBase, "appearance-none")}
            >
              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="date"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Preferred Date
              </label>
              <div className="relative">
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className={cn(inputBase, "pr-10")}
                />
                <CalendarIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-700/70" />
              </div>
            </div>
            <div>
              <label
                htmlFor="time"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Preferred Time
              </label>
              <div className="relative">
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className={cn(inputBase, "pr-10")}
                />
                <Clock3 className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-700/70" />
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                className={inputBase}
                autoComplete="given-name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                className={inputBase}
                autoComplete="family-name"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className={inputBase}
                autoComplete="email"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Mobile Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Mobile Number"
                className={inputBase}
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-xs font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Type here..."
              className="w-full rounded-lg border border-emerald-200 bg-white p-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Policy */}
          <div className="flex items-start gap-2">
            <input
              id="policy"
              name="policy"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
            />
            <label htmlFor="policy" className="text-xs text-slate-700">
              I agree to the{" "}
              <Link
                href="#"
                className="font-medium text-emerald-700 underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button className="mt-6 hover:bg-white hover:text-green-800 bg-green-800 text-white px-6 py-3 rounded-full font-medium  border-2 border-green-800 transition">
              {submitting ? "Submitting..." : "Book My Appointment"}
            </button>
          </div>

          {message && <p className="text-sm text-emerald-800/90">{message}</p>}
        </form>
      </div>
    </section>
  );
}
