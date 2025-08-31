"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bot,
  FileText,
  Gauge,
  Inbox,
  Plug,
  Repeat2,
  Settings as SettingsIcon,
  Table as TableIcon,
  Users,
} from "lucide-react";
import HeaderBar from "./_components/HeaderBar";
import QuickActions from "./_components/QuickActions";
import AgentsGrid from "./_components/AgentsGrid";
import AutomationsList from "./_components/AutomationsList";
import IntegrationsGrid from "./_components/IntegrationsGrid";
import SettingsForm from "./_components/SettingsForm";
import { DEFAULTS, AGENTS } from "@/lib/constants";
import type { KPI, Settings } from "@/lib/types";
// Your existing tables
import LeadsTable from "./LeadsTable";
import ProposalsTable from "./ProposalsTable";
import ContentTable from "./ContentTable";
import Faq from "./Faq";
import OverviewSection from "./_components/OverviewSection";

export default function AdminDashboard() {
  const settings: Settings = { ...DEFAULTS, draftOnly: true };
  const kpis: KPI[] = useMemo(
    () => [
      { label: "Leads (this week)", value: 8 },
      { label: "Calls booked", value: 4 },
      { label: "Proposals sent", value: 3 },
      { label: "Avg reply time", value: "2h 11m" },
    ],
    []
  );

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-10 text-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto">
        <HeaderBar />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="flex flex-wrap gap-2">
            <TabsTrigger value="overview">
              <Gauge className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="leads">
              <Users className="w-4 h-4 mr-2" />
              Leads
            </TabsTrigger>
            <TabsTrigger value="proposals">
              <FileText className="w-4 h-4 mr-2" />
              Proposals
            </TabsTrigger>
            <TabsTrigger value="content">
              <TableIcon className="w-4 h-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger value="faqs">
              <Inbox className="w-4 h-4 mr-2" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="agents">
              <Bot className="w-4 h-4 mr-2" />
              Agents
            </TabsTrigger>
            <TabsTrigger value="automations">
              <Repeat2 className="w-4 h-4 mr-2" />
              Automations
            </TabsTrigger>

            <TabsTrigger value="integrations">
              <Plug className="w-4 h-4 mr-2" />
              Integrations
            </TabsTrigger>
            <TabsTrigger value="settings">
              <SettingsIcon className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            <OverviewSection />
            <QuickActions settings={settings} />
          </TabsContent>

          <TabsContent value="leads" className="mt-4">
            <LeadsTable />
          </TabsContent>
          <TabsContent value="proposals" className="mt-4">
            <ProposalsTable />
          </TabsContent>
          <TabsContent value="content" className="mt-4">
            <ContentTable />
          </TabsContent>
          <TabsContent value="faqs" className="mt-4">
            <Faq />
          </TabsContent>
          <TabsContent value="agents" className="mt-4">
            <AgentsGrid agents={AGENTS} />
          </TabsContent>
          <TabsContent value="automations" className="mt-4">
            <AutomationsList />
          </TabsContent>
          <TabsContent value="integrations" className="mt-4">
            <IntegrationsGrid />
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <SettingsForm initial={settings} />
          </TabsContent>
        </Tabs>

        <footer className="text-xs text-slate-500 mt-8 text-center">
          Design with purpose. Strategy with vision. — VitaNova Designs &
          Marketing LLC
        </footer>
      </motion.div>
    </div>
  );
}
