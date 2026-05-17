"use client";

import { FormEvent, useState } from "react";

interface ContactFormState {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const initialState: ContactFormState = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to send your message. Please try again later.",
        );
      }

      setStatus("success");
      setFeedback("Message sent successfully. I will get back to you soon.");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again later.";
      setFeedback(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-3xl rounded-3xl border border-white/20 bg-white/2 backdrop-blur-xl p-10 shadow-2xl shadow-black/40 hover:border-white/30 transition-all duration-300"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-left">
          <span className="mb-3 block text-sm font-semibold text-white uppercase tracking-wide">
            Full Name
          </span>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white placeholder-zinc-500 outline-none transition-all duration-200 hover:border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 focus:bg-white/10"
            placeholder="Your name"
          />
        </label>

        <label className="block text-left">
          <span className="mb-3 block text-sm font-semibold text-white uppercase tracking-wide">
            Company
          </span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white placeholder-zinc-500 outline-none transition-all duration-200 hover:border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 focus:bg-white/10"
            placeholder="Your company (optional)"
          />
        </label>

        <label className="block text-left">
          <span className="mb-3 block text-sm font-semibold text-white uppercase tracking-wide">
            Phone Number
          </span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white placeholder-zinc-500 outline-none transition-all duration-200 hover:border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 focus:bg-white/10"
            placeholder="+30 69x xxx xxxx"
          />
        </label>

        <label className="block text-left">
          <span className="mb-3 block text-sm font-semibold text-white uppercase tracking-wide">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white placeholder-zinc-500 outline-none transition-all duration-200 hover:border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 focus:bg-white/10"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-8 block text-left">
        <span className="mb-3 block text-sm font-semibold text-white uppercase tracking-wide">
          Project Details
        </span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={7}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder-zinc-500 outline-none transition-all duration-200 hover:border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 focus:bg-white/10"
          placeholder="Tell me about your project, timeline, budget, or any specific technical requirements."
        />
      </label>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-block bg-white text-black px-10 py-4 font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-white/20 active:scale-95"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {feedback && (
          <p
            className={`text-sm font-medium ${
              status === "error"
                ? "text-rose-400"
                : status === "success"
                  ? "text-emerald-400"
                  : "text-zinc-400"
            }`}
            aria-live="polite"
          >
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}
