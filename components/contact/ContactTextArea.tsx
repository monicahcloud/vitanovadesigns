// components/contact/ContactTextArea.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string; // ← add
  minLength?: number; // ← add
};

const ContactTextArea = ({
  label,
  name,
  value,
  onChange,
  error,
  minLength = 0,
}: Props) => {
  const id = `${name}-textarea`;
  const errId = `${id}-error`;
  const countId = `${id}-count`;
  const len = value?.length ?? 0;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        id={id}
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        required
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={`${countId}${error ? ` ${errId}` : ""}`}
        className={[
          "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2",
          error
            ? "border-red-400 focus:ring-red-300"
            : "border-white/40 focus:ring-indigo-400",
          "text-slate-900 bg-white", // ensure readable on dark bg
        ].join(" ")}
      />
      <div className="mt-1 flex items-center justify-between">
        <span id={countId} className="text-xs text-white/70">
          {minLength ? `${len}/${minLength} min.` : `${len} chars`}
        </span>
        {error && (
          <span id={errId} className="text-xs text-red-300">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default ContactTextArea;
