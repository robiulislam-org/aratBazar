"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactFormClient() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });
        if (res.ok) {
          setFormState("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          const data = await res.json();
          setErrorMsg(data?.errors?.[0]?.message || "Submission failed. Please try again.");
          setFormState("error");
        }
      } catch {
        setErrorMsg("Network error. Please check your connection and try again.");
        setFormState("error");
      }
    } else {
      const mailtoLink = `mailto:support@aratbazar.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setFormState("success");
    }
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-lg font-bold text-white">Message Dispatched</h3>
        <p className="mt-2 text-xs text-slate-400 max-w-sm">
          Thank you for contacting AratBazar. Our editorial and support team will review your
          inquiry within 24 business hours.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-6 rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formState === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMsg || "Something went wrong. Please try again."}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
          <input
            type="text"
            required
            disabled={formState === "loading"}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Name"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none disabled:opacity-50"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
          <input
            type="email"
            required
            disabled={formState === "loading"}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@domain.com"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none disabled:opacity-50"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1">Inquiry Subject</label>
        <input
          type="text"
          required
          disabled={formState === "loading"}
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="e.g. Partnership, Product Feedback, Ad Placement"
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
        <textarea
          rows={5}
          required
          disabled={formState === "loading"}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your inquiry in detail..."
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none disabled:opacity-50 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={formState === "loading"}
        className="flex items-center justify-center space-x-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="h-3.5 w-3.5" />
            <span>Submit Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
