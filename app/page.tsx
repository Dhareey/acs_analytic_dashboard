'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Header } from '@/components/dashboard/header';
import { KPISummary } from '@/components/dashboard/kpi-summary';
import { UsageAnalytics } from '@/components/dashboard/usage-analytics';
import { QualityMetrics } from '@/components/dashboard/quality-metrics';
import { IncidentMonitoring } from '@/components/dashboard/incident-monitoring';
import { GeographicDistribution } from '@/components/dashboard/geographic-distribution';
import { mockDataQA, mockDataLive } from '@/lib/mock-data';

export default function Dashboard() {
  const [environment, setEnvironment] = useState<'QA' | 'Live'>('Live');
  const currentData = environment === 'QA' ? mockDataQA : mockDataLive;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header environment={environment} onEnvironmentChange={setEnvironment} />

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="p-6 lg:p-8">
        <div className="space-y-6">
          {/* KPI Summary Cards */}
          <KPISummary data={currentData.kpis} />

          {/* Usage Analytics */}
          <UsageAnalytics data={currentData} />

          {/* Quality & Performance Metrics */}
          <QualityMetrics data={currentData} />

          {/* Incident & Error Monitoring */}
          <IncidentMonitoring data={currentData} />

          {/* Geographic Distribution */}
          <GeographicDistribution data={currentData} />
        </div>
      </main>
    </div>
  );
}
