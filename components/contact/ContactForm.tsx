"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "../ui/button";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import ContactHeader from "./ContactHeader";
import Turnstile from "react-turnstile";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: "website" | "branding" | "church" | "education" | "bi" | "other";
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
  const [tsError, setTsError] = useState<string | null>(null);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const captchaRef = useRef<HTMLDivElement>(null);

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
    setErrors({}); // reset

    if (formData.company) return; // honeypot

    // quick client-side validations
    const msg = formData.message?.trim() ?? "";
    const newErrors: FieldErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.budget) newErrors.budget = "Please select a budget range.";
    if (msg.length < 10)
      newErrors.message =
        "Please provide at least 10 characters so we can help.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      toast(
        <div>
          <p className="font-semibold text-red-600">Fix and resend</p>
          <p className="text-sm">{Object.values(newErrors)[0]}</p>
        </div>
      );
      return;
    }

    // If Turnstile is configured but not yet verified, reveal it neatly near the button
    if (hasSiteKey && !tsToken) {
      setShowCaptcha(true);
      setTimeout(
        () =>
          captchaRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          }),
        0
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken: tsToken }),
      });

      if (!res.ok) {
        let serverMsg = "Invalid form data.";
        try {
          const data = await res.json();
          const fieldErrors = data?.details?.fieldErrors || {};
          const mapped: FieldErrors = {
            name: fieldErrors.name?.[0],
            email: fieldErrors.email?.[0],
            budget: fieldErrors.budget?.[0],
            message: fieldErrors.message?.[0],
          };
          setErrors(mapped);
          serverMsg =
            mapped.message ||
            mapped.email ||
            mapped.budget ||
            mapped.name ||
            data?.error ||
            serverMsg;
        } catch {}
        toast(
          <div>
            <p className="font-semibold text-red-600">
              Please check your entries
            </p>
            <p className="text-sm">{serverMsg}</p>
          </div>
        );
        return;
      }

      toast(
        <div>
          <p className="font-semibold text-green-800">Success!</p>
          <p className="text-sm text-muted-foreground">
            Your message has been sent.
          </p>
        </div>
      );

      // reset form + token (forces user to verify again for next submit)
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
      setTsError(null);
      setShowCaptcha(false);
      setErrors({});
    } catch (err) {
      console.error("Contact submit error:", err);
      toast(
        <div>
          <p className="font-semibold text-red-600">Unexpected Error</p>
          <p className="text-sm">
            Please try again or email monicahcloud@vitanovadesigns.cloud.
          </p>
        </div>
      );
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
      className="w-full bg-white/10 backdrop-blur-md text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6 border border-white/20">
      <ContactHeader />

      {/* Name + Email */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex-1">
          <ContactInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>
        <div className="flex-1">
          <ContactInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
      </div>

      {/* Phone + Budget */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex-1">
          <ContactInput
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="budget" className="block text-sm font-medium mb-1">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border text-slate-900 bg-white">
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
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium mb-1">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border text-slate-900 bg-white">
          <option value="website">Website</option>
          <option value="branding">Branding</option>
          <option value="church">Church Website</option>
          <option value="education">School/Training</option>
          <option value="bi">BI/Dashboard</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <ContactTextArea
        label="About your project..."
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        minLength={10}
      />

      {/* Consent + honeypot */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1"
          required
        />
        <label htmlFor="consent" className="text-sm text-purple-100">
          I consent to be contacted. We typically reply within 24 hours.
        </label>
      </div>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Subtle captcha row (hidden until needed) */}
      {hasSiteKey && showCaptcha && (
        <div ref={captchaRef} className="mt-2 flex justify-end">
          <div className=" items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-2">
            <div className="text-xs text-purple-200">Quick verification</div>
            <Turnstile
              sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              theme="auto"
              size="normal"
              onVerify={(token) => {
                setTsToken(token);
                setTsError(null);
              }}
              onExpire={() => setTsToken("")}
              onError={() => {
                setTsToken("");
                setTsError(
                  "Verification failed. If this is localhost, ensure your Turnstile site allows it."
                );
                console.error("Turnstile onError");
              }}
            />
          </div>
        </div>
      )}
      {tsError && <p className="text-xs text-red-300 text-right">{tsError}</p>}

      {/* Submit */}
      <div className="flex">
        <Button
          type="submit"
          disabled={submitting} // we gate captcha in handleSubmit instead of disabling here
          aria-label="Send message to Vita Nova Designs"
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-3 text-base rounded-lg transition-all duration-300 shadow-md">
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <p className="text-md text-purple-200 whitespace-nowrap">
          Prefer to book time?
        </p>
        <a
          href="https://calendly.com/vitanovadesigns/30min-1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition-all duration-300">
            Book a Free 15-min Call
          </button>
        </a>
      </div>
    </motion.form>
  );
}
