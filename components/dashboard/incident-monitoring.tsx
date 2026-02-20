'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DashboardData } from '@/lib/mock-data';
import { AlertCircle, AlertTriangle, Info, AlertOctagon } from 'lucide-react';

interface IncidentMonitoringProps {
  data: DashboardData;
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
    case 'High':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'Medium':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'Low':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return AlertOctagon;
    case 'High':
      return AlertTriangle;
    case 'Medium':
      return AlertCircle;
    case 'Low':
      return Info;
    default:
      return AlertCircle;
  }
};

export function IncidentMonitoring({ data }: IncidentMonitoringProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Incident & Error Monitoring</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Errors Table */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Recent Errors</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 hover:bg-transparent">
                  <TableHead className="text-muted-foreground">Timestamp</TableHead>
                  <TableHead className="text-muted-foreground">Portal</TableHead>
                  <TableHead className="text-muted-foreground">Error Type</TableHead>
                  <TableHead className="text-muted-foreground">Severity</TableHead>
                  <TableHead className="text-muted-foreground text-right">Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.recentErrors.map((error) => {
                  const Icon = getSeverityIcon(error.severity);
                  return (
                    <TableRow key={error.id} className="border-border/50 hover:bg-secondary/30">
                      <TableCell className="text-muted-foreground">{error.timestamp}</TableCell>
                      <TableCell className="text-foreground">{error.portal}</TableCell>
                      <TableCell className="text-foreground">{error.errorType}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getSeverityColor(error.severity)}
                        >
                          <Icon className="w-3 h-3 mr-1" />
                          {error.severity}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-foreground">
                        {error.count}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Errors by Portal */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Errors by Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.errorsByPortal}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="portal" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(20, 20, 20, 0.9)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="errors" fill="var(--destructive)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Incidents Over Time Trend */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Incidents Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.incidentsTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(20, 20, 20, 0.9)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="incidents"
                  stroke="var(--chart-5)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--chart-5)', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
