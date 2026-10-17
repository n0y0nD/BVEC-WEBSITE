"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const topics = ["Admissions", "Academics", "Examinations", "Placements", "Other"];

const inputClass =
  "mt-1.5 w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-slate-200 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:focus:bg-white/10";

export default function ContactForm({ email }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${data.get("topic")}] Message from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}${data.get("phone") ? `\n${data.get("phone")}` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-8 rounded-2xl bg-emerald-50 p-6 text-emerald-900 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-500/20" role="status">
        <CheckCircle2 className="size-6" aria-hidden />
        <p className="mt-3 font-semibold">Your email app should now be open.</p>
        <p className="mt-1 text-sm opacity-80">
          If it didn&apos;t open, write to us directly at <a className="underline" href={`mailto:${email}`}>{email}</a>.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-4 text-sm font-semibold underline">
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Full name
        <input name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
      </label>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Email
        <input name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@example.com" />
      </label>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Phone <span className="font-normal text-slate-400">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+91" />
      </label>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Topic
        <select name="topic" className={inputClass} defaultValue="Admissions">
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-slate-700 sm:col-span-2 dark:text-slate-300">
        Message
        <textarea name="message" required rows={5} className={inputClass} placeholder="How can we help?" />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto"
        >
          Send message <Send className="size-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}
