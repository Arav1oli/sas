"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: real visitors never fill this hidden field in.
    if (data.company) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-accent bg-accent-tint-soft p-6 text-ink">
        <p className="font-medium">Thanks — your enquiry has been sent.</p>
        <p className="mt-1 text-sm text-ink-soft">
          One of our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          Full name
          <input
            required
            name="name"
            type="text"
            className="rounded-sm border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-accent-deep"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          Phone
          <input
            required
            name="phone"
            type="tel"
            className="rounded-sm border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-accent-deep"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm">
        Email
        <input
          required
          name="email"
          type="email"
          className="rounded-sm border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-accent-deep"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        What can we help with?
        <select
          name="matter"
          className="rounded-sm border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-accent-deep"
          defaultValue=""
        >
          <option value="" disabled>Select a matter type</option>
          <option value="Family Law">Family Law</option>
          <option value="Property & Conveyancing">Property &amp; Conveyancing</option>
          <option value="Commercial Law">Commercial Law</option>
          <option value="Wills & Estates">Wills &amp; Estates</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        Message
        <textarea
          required
          name="message"
          rows={4}
          className="rounded-sm border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-accent-deep"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 rounded-sm bg-accent-deep px-6 py-3 text-sm font-medium text-white hover:bg-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending that — please call us instead.
        </p>
      )}
    </form>
  );
}
