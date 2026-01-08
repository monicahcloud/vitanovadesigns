"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
  className?: string;
};

const ContactInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  autoComplete,
  className = "", // Default to empty string
}: Props) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label
      htmlFor={name}
      className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] ml-1">
      {label}
    </label>

    <motion.input
      whileFocus={{ scale: 1.01 }}
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      required
      className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 outline-none transition-all focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-500/5 shadow-sm"
    />
  </div>
);

export default ContactInput;
