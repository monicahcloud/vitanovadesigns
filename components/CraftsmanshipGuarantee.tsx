// components/CraftsmanshipGuarantee.tsx
"use client";

import { Shield } from "lucide-react";

export function GuaranteeBlurb() {
  return (
    <div className="mt-4 text-sm text-slate-600 flex items-start gap-2">
      <Shield className="h-4 w-4 mt-0.5 text-cyan-500" />
      <p>
        <strong>90-day craftsmanship guarantee:</strong> We fix defects we
        introduced after launch.
        <a
          href="#guarantee"
          className="ml-1 underline underline-offset-4 decoration-purple-400 hover:text-purple-700">
          What’s included?
        </a>
      </p>
    </div>
  );
}

export function GuaranteeDetails() {
  return (
    <section
      id="guarantee"
      className="max-w-7xl mx-auto mt-10 rounded-2xl border bg-white p-6">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-cyan-500" />
        <h3 className="text-lg font-semibold text-slate-900">
          90-day craftsmanship guarantee
        </h3>
      </div>

      <p className="mt-3 text-slate-700">
        For 90 days after launch, we fix any defects introduced by our
        work—things like broken links, layout glitches, form errors, or
        responsive issues.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-slate-50 p-4">
          <p className="font-medium text-slate-900">Included</p>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>Bug fixes (links, forms, layout, mobile/responsive)</li>
            <li>Accessibility/SEO metadata we configured</li>
            <li>Minor styling inconsistencies</li>
            <li>Performance regressions we caused</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-slate-50 p-4">
          <p className="font-medium text-slate-900">Not included</p>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>New features or pages</li>
            <li>Content changes outside the agreed scope</li>
            <li>Third-party outages (hosting, plugins, CRMs, etc.)</li>
            <li>Issues caused by edits made after handoff</li>
          </ul>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600">
        <span className="font-medium">Response time:</span> we acknowledge
        within 1 business day and aim to resolve within 3–5 business days
        depending on complexity.
      </p>
    </section>
  );
}
