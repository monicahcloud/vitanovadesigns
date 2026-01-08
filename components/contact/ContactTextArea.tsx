"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  minLength?: number;
  className?: string; // Added to fix the TS error from the parent
};

const ContactTextArea = ({
  label,
  name,
  value,
  onChange,
  error,
  minLength = 0,
  className = "",
}: Props) => {
  const id = `${name}-textarea`;
  const errId = `${id}-error`;
  const countId = `${id}-count`;
  const len = value?.length ?? 0;
  const isTooShort = minLength > 0 && len < minLength && len > 0;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {/* High-Authority Slate Label */}
      <label
        htmlFor={id}
        className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] ml-1">
        {label}
      </label>

      <motion.textarea
        whileFocus={{ scale: 1.01 }}
        id={id}
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        required
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={`${countId}${error ? ` ${errId}` : ""}`}
        className={`
          w-full px-5 py-4 rounded-2xl border outline-none transition-all duration-300 shadow-sm resize-none
          ${
            error
              ? "border-red-400 bg-red-50 text-red-900 focus:ring-red-100"
              : "border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-500/5 hover:border-slate-300"
          }
        `}
      />

      <div className="mt-2 flex items-center justify-between px-1">
        {/* Character Count / Validation */}
        <span
          id={countId}
          className={`text-[10px] font-mono uppercase tracking-widest ${
            isTooShort ? "text-orange-500 font-bold" : "text-slate-400"
          }`}>
          {minLength
            ? `Length: ${len} / ${minLength} Min`
            : `${len} Characters`}
        </span>

        {/* Error Message */}
        {error && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            id={errId}
            className="text-[10px] font-bold text-red-500 uppercase tracking-tighter">
            [ Error: {error} ]
          </motion.span>
        )}
      </div>
    </div>
  );
};

export default ContactTextArea;
