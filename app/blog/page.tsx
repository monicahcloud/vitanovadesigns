"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Example blog post data (replace later with real data)
const blogPosts = [
  {
    title: "7 Ways to Build Brand Authority Through Content",
    excerpt:
      "Build trust and visibility with long-form content, educational assets, and content partnerships that establish expertise.",
    date: "July 15, 2025",
    slug: "brand-authority-through-content",
  },
  {
    title: "Optimizing Marketing Funnels for Real Results",
    excerpt:
      "Learn how to fine-tune every stage of your funnel—from traffic to conversion—with a focus on messaging, UX, and timing.",
    date: "July 10, 2025",
    slug: "marketing-funnel-optimization",
  },
  {
    title: "Understanding KPIs: What to Track and Why",
    excerpt:
      "Not all metrics matter. Learn how to select key performance indicators that reflect real business impact—not just vanity.",
    date: "June 30, 2025",
    slug: "understanding-kpis",
  },
  {
    title: "How to Write Emails That Actually Get Clicked",
    excerpt:
      "From subject lines to CTAs, we break down the anatomy of a high-performing email for every stage of the buyer journey.",
    date: "June 20, 2025",
    slug: "email-marketing-clicks",
  },
];

export default function BlogPage() {
  return (
    <main className="w-full bg-white text-purple-950 px-4 sm:px-8 md:px-20 pb-24 pt-20">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
          The Insights Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
          Actionable advice, expert commentary, and the latest in digital
          marketing strategy.
        </motion.p>
      </header>

      {/* Blog Grid */}
      <section className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {blogPosts.map((post, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group border-b pb-6 hover:bg-gray-50 rounded-lg transition">
            <div className="mb-2 text-sm text-gray-500">{post.date}</div>
            <h2 className="text-2xl font-bold text-purple-800 group-hover:text-purple-600 transition-colors duration-200">
              {post.title}
            </h2>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-cyan-600 font-medium hover:underline">
              Read more →
            </Link>
          </motion.article>
        ))}
      </section>

      {/* CTA */}
      <div className="text-center mt-24">
        <Link href="/contact">
          <Button
            size="lg"
            variant="outline"
            className="text-purple-800 border-purple-500 hover:bg-purple-100 hover:text-purple-900 text-xl font-semibold">
            Need Help With Your Marketing?
          </Button>
        </Link>
      </div>
    </main>
  );
}
