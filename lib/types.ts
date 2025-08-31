export type KPI = { label: string; value: number | string };

export type Settings = {
  calendly: string;
  outboundEmail: string;
  tone: string;
  draftOnly: boolean;
};

export type Agent = {
  code: string;
  name: string;
  role: string;
  initials: string;
  gradient: string; // tailwind from-*/to-* classes
  enabled: boolean;
};
