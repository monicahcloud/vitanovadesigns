"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const ContactInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
}: Props) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium mb-1">
      {label}
    </label>
    <motion.input
      whileFocus={{ scale: 1.02 }}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>
);

export default ContactInput;
