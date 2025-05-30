"use client";

import { motion } from "framer-motion";

const ContactHeader = () => (
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-bold text-center mb-12">
    <p>Start a conversation with us</p>
  </motion.h1>
);

export default ContactHeader;
