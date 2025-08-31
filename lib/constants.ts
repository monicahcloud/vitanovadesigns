import type { Agent } from "./types";

export const DEFAULTS = {
  calendly: "https://calendly.com/vitanovadesigns/30min-1",
  outboundEmail: "monicahcloud@vitanovadesigns.cloud",
  tone: "Avoid salesy language. Keep it neighborly, direct, and plain-spoken. Prefer calls to action like: ‘Click on the link to schedule a call.’",
};

export const AGENTS: Agent[] = [
  {
    code: "Scout",
    name: "Alex Rivera",
    role: "Lead Prospector",
    initials: "AR",
    gradient: "from-indigo-500 to-sky-500",
    enabled: true,
  },
  {
    code: "Scribe",
    name: "Riley Chen",
    role: "Proposal & Comms",
    initials: "RC",
    gradient: "from-fuchsia-500 to-purple-500",
    enabled: true,
  },
  {
    code: "Spark",
    name: "Thyri James",
    role: "Content & SEO",
    initials: "TJ",
    gradient: "from-emerald-500 to-teal-500",
    enabled: true,
  },
  {
    code: "Care",
    name: "Harper Lee",
    role: "Client Success",
    initials: "HL",
    gradient: "from-amber-500 to-rose-500",
    enabled: true,
  },
];
