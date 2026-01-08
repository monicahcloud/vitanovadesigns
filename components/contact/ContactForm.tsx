"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "../ui/button";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import { ArrowUpRight } from "lucide-react"; // Ensure this is imported
import Turnstile from "react-turnstile";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType:
    | "website"
    | "branding"
    | "church"
    | "education"
    | "bi"
    | "other"
    | "marketing";
  budget: "" | "<1500" | "1500-3000" | "3000-5000" | "5000-10000" | ">10000";
  message: string;
  consent: boolean;
  company: string; // honeypot
};

type FieldErrors = {
  name?: string;
  email?: string;
  budget?: string;
  message?: string;
};

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [tsToken, setTsToken] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  // const captchaRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    projectType: "website",
    budget: "",
    message: "",
    consent: false,
    company: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData((s) => ({
        ...s,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((s) => ({ ...s, [name]: value }));
    }
  };

  const hasSiteKey = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (formData.company) return;

    const msg = formData.message?.trim() ?? "";
    const newErrors: FieldErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.budget) newErrors.budget = "Please select a budget range.";
    if (msg.length < 10)
      newErrors.message = "Please provide at least 10 characters.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      toast.error("Please fix errors and resend.");
      return;
    }

    if (hasSiteKey && !tsToken) {
      setShowCaptcha(true);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken: tsToken }),
      });

      if (!res.ok) throw new Error("Submission failed");

      toast.success("Project Brief Sent Successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "website",
        budget: "",
        message: "",
        consent: false,
        company: "",
      });
      setTsToken("");
      setShowCaptcha(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="w-full bg-white text-slate-900 space-y-8">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ContactInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          className="text-xs font-bold text-slate-400 uppercase tracking-widest"
        />
        <ContactInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          className="text-xs font-bold text-slate-400 uppercase tracking-widest"
        />
      </div>

      {/* Phone + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ContactInput
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          className="text-xs font-bold text-slate-400 uppercase tracking-widest"
        />

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="budget"
            className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/5 transition-all outline-none appearance-none cursor-pointer">
            <option value="">Select a range</option>
            <option value="<1500">&lt; $1,500</option>
            <option value="1500-3000">$1,500–$3,000</option>
            <option value="3000-5000">$3,000–$5,000</option>
            <option value="5000-10000">$5,000–$10,000</option>
            <option value=">10000">&gt; $10,000</option>
          </select>
        </div>
      </div>

      {/* Project Type */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="projectType"
          className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/5 transition-all outline-none appearance-none cursor-pointer">
          <option value="website">Website Design and Development</option>
          <option value="branding">Branding & Identity</option>
          <option value="marketing">Growth Marketing</option>
          <option value="bi">SaaS / BI Dashboard</option>
          <option value="other">Other Engineering</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <ContactTextArea
          label="Tell us about your project goals..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          className="text-xs font-bold text-slate-400 uppercase tracking-widest"
        />
      </div>

      {/* Consent */}
      <div className="flex items-center gap-3 py-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          className="w-5 h-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
          required
        />
        <label htmlFor="consent" className="text-sm text-slate-500 font-medium">
          I consent to be contacted. We typically reply within 24 hours.
        </label>
      </div>

      {/* Turnstile */}
      {hasSiteKey && showCaptcha && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-start">
          <Turnstile
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            theme="light"
            onVerify={(token) => setTsToken(token)}
          />
        </motion.div>
      )}

      {/* Submit */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold py-8 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.01] transition-all text-xl flex items-center justify-center gap-2 border-none">
          {submitting ? "Initiating..." : "Send Project Brief"}
          {!submitting && <ArrowUpRight className="w-6 h-6" />}
        </Button>
      </div>

      {/* CTA Section */}
      <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 font-medium">
          Prefer a direct conversation?
        </p>
        <a
          href="https://calendly.com/vitanovadesigns/30min-1"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-purple-600 font-bold hover:text-cyan-500 transition-colors">
          Book a Discovery Call
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.form>
  );
}
