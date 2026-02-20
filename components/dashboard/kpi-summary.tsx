import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  Activity,
  Zap,
  AlertCircle,
  CheckCircle2,
  Smile,
} from 'lucide-react';

interface KPI {
  totalUsers: number;
  activeSessions: number;
  avgPageLoadTime: string;
  errorRate: number;
  apiSuccessRate: number;
  customerSatisfaction: number;
}

interface KPISummaryProps {
  data: KPI;
}

export function KPISummary({ data }: KPISummaryProps) {
  const kpis = [
    {
      icon: Users,
      label: 'Total Users',
      value: data.totalUsers.toLocaleString(),
      color: 'bg-blue-500/20 text-blue-400',
    },
    {
      icon: Activity,
      label: 'Active Sessions',
      value: data.activeSessions.toLocaleString(),
      color: 'bg-purple-500/20 text-purple-400',
    },
    {
      icon: Zap,
      label: 'Avg Page Load Time',
      value: data.avgPageLoadTime,
      color: 'bg-amber-500/20 text-amber-400',
    },
    {
      icon: AlertCircle,
      label: 'Error Rate',
      value: `${data.errorRate}%`,
      color: 'bg-red-500/20 text-red-400',
    },
    {
      icon: CheckCircle2,
      label: 'API Success Rate',
      value: `${data.apiSuccessRate}%`,
      color: 'bg-green-500/20 text-green-400',
    },
    {
      icon: Smile,
      label: 'Customer Satisfaction',
      value: `${data.customerSatisfaction}%`,
      color: 'bg-cyan-500/20 text-cyan-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <Card key={kpi.label} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-border/80 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.label}
              </CardTitle>
              <div className={`p-2 rounded-lg ${kpi.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">
                {kpi.value}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
