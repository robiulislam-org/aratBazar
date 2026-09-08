"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <Mail className="h-4 w-4" />
          <span>EDITORIAL & SUPPORT DESK</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Contact AratBazar</h1>
        <p className="mt-2 text-slate-400 text-sm">
          Have feedback, press inquiries, technical questions, or corporate advertising requests? Get in touch with our team.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Contact Info */}
        <div className="space-y-4 md:col-span-1">
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-400" />
              Direct Inquiries
            </h3>
            <p className="text-xs text-slate-400 mb-1">General & Support:</p>
            <span className="font-mono text-xs text-emerald-400 block font-semibold">
              support@aratbazar.com
            </span>
            <p className="text-xs text-slate-400 mt-3 mb-1">Editorial Desk:</p>
            <span className="font-mono text-xs text-cyan-400 block font-semibold">
              editor@aratbazar.com
            </span>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-400" />
              Headquarters
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              AratBazar Financial Intelligence Media<br />
              Web: <span className="text-slate-300 font-mono">https://aratbazar.com</span><br />
              Global Digital Operations
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6 md:col-span-2">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-white">Message Dispatched</h3>
              <p className="mt-2 text-xs text-slate-400 max-w-sm">
                Thank you for contacting AratBazar. Our editorial and support team will review your inquiry within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Trader Name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Partnership, Market Data Feedback, Ad Placement"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your inquiry..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center space-x-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
