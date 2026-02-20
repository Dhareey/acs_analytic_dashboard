export interface DashboardData {
  kpis: {
    totalUsers: number;
    activeSessions: number;
    avgPageLoadTime: string;
    errorRate: number;
    apiSuccessRate: number;
    customerSatisfaction: number;
  };
  dailyActiveUsers: Array<{ date: string; users: number }>;
  portalUsage: Array<{ portal: string; users: number }>;
  trafficOverTime: Array<{ time: string; qa: number; live: number }>;
  responseTimeByPortal: Array<{ portal: string; time: number }>;
  errorDistribution: Array<{ name: string; value: number }>;
  impactedPages: Array<{ rank: number; page: string; errors: number }>;
  systemHealth: number;
  recentErrors: Array<{
    id: string;
    timestamp: string;
    portal: string;
    errorType: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    count: number;
  }>;
  errorsByPortal: Array<{ portal: string; errors: number }>;
  incidentsTrend: Array<{ date: string; incidents: number }>;
  geographicData: Array<{
    country: string;
    activeUsers: number;
    errorRate: number;
    region: string;
  }>;
}

export const mockDataQA: DashboardData = {
  kpis: {
    totalUsers: 5240,
    activeSessions: 382,
    avgPageLoadTime: '1.2s',
    errorRate: 2.4,
    apiSuccessRate: 98.6,
    customerSatisfaction: 87,
  },
  dailyActiveUsers: [
    { date: 'Feb 6', users: 4200 },
    { date: 'Feb 7', users: 4500 },
    { date: 'Feb 8', users: 4100 },
    { date: 'Feb 9', users: 4800 },
    { date: 'Feb 10', users: 5100 },
    { date: 'Feb 11', users: 4900 },
    { date: 'Feb 12', users: 5240 },
    { date: 'Feb 13', users: 5000 },
    { date: 'Feb 14', users: 5150 },
    { date: 'Feb 15', users: 4950 },
    { date: 'Feb 16', users: 5300 },
    { date: 'Feb 17', users: 5200 },
    { date: 'Feb 18', users: 5100 },
    { date: 'Feb 19', users: 5240 },
  ],
  portalUsage: [
    { portal: 'Business Portal', users: 2800 },
    { portal: 'Customer Portal', users: 1600 },
    { portal: 'Agent Portal', users: 840 },
  ],
  trafficOverTime: [
    { time: '12h ago', qa: 4200, live: 8100 },
    { time: '11h ago', qa: 4500, live: 8400 },
    { time: '10h ago', qa: 4100, live: 7800 },
    { time: '9h ago', qa: 4800, live: 8600 },
    { time: '8h ago', qa: 5100, live: 9200 },
    { time: '7h ago', qa: 4900, live: 8800 },
    { time: '6h ago', qa: 5240, live: 9100 },
    { time: '5h ago', qa: 5000, live: 8900 },
    { time: '4h ago', qa: 5150, live: 9300 },
    { time: '3h ago', qa: 4950, live: 8700 },
    { time: '2h ago', qa: 5300, live: 9400 },
    { time: '1h ago', qa: 5200, live: 9200 },
    { time: 'Now', qa: 5240, live: 9100 },
  ],
  responseTimeByPortal: [
    { portal: 'Business Portal', time: 280 },
    { portal: 'Customer Portal', time: 320 },
    { portal: 'Agent Portal', time: 240 },
  ],
  errorDistribution: [
    { name: 'Server Error', value: 35 },
    { name: 'Timeout', value: 28 },
    { name: 'Invalid Request', value: 22 },
    { name: 'Auth Error', value: 15 },
  ],
  impactedPages: [
    { rank: 1, page: '/dashboard', errors: 145 },
    { rank: 2, page: '/settings', errors: 98 },
    { rank: 3, page: '/reports', errors: 76 },
    { rank: 4, page: '/users', errors: 54 },
    { rank: 5, page: '/analytics', errors: 42 },
  ],
  systemHealth: 94,
  recentErrors: [
    {
      id: '1',
      timestamp: '2 mins ago',
      portal: 'Business Portal',
      errorType: 'Server Error',
      severity: 'Critical',
      count: 12,
    },
    {
      id: '2',
      timestamp: '5 mins ago',
      portal: 'Customer Portal',
      errorType: 'Timeout',
      severity: 'High',
      count: 8,
    },
    {
      id: '3',
      timestamp: '8 mins ago',
      portal: 'Agent Portal',
      errorType: 'Invalid Request',
      severity: 'Medium',
      count: 5,
    },
    {
      id: '4',
      timestamp: '12 mins ago',
      portal: 'Business Portal',
      errorType: 'Auth Error',
      severity: 'Low',
      count: 2,
    },
  ],
  errorsByPortal: [
    { portal: 'Business Portal', errors: 78 },
    { portal: 'Customer Portal', errors: 52 },
    { portal: 'Agent Portal', errors: 28 },
  ],
  incidentsTrend: [
    { date: 'Feb 13', incidents: 5 },
    { date: 'Feb 14', incidents: 3 },
    { date: 'Feb 15', incidents: 8 },
    { date: 'Feb 16', incidents: 4 },
    { date: 'Feb 17', incidents: 6 },
    { date: 'Feb 18', incidents: 2 },
    { date: 'Feb 19', incidents: 3 },
  ],
  geographicData: [
    { country: 'United States', activeUsers: 2100, errorRate: 1.8, region: 'North America' },
    { country: 'United Kingdom', activeUsers: 980, errorRate: 2.1, region: 'Europe' },
    { country: 'Canada', activeUsers: 560, errorRate: 1.5, region: 'North America' },
    { country: 'Germany', activeUsers: 420, errorRate: 2.4, region: 'Europe' },
    { country: 'India', activeUsers: 890, errorRate: 3.2, region: 'Asia' },
    { country: 'Japan', activeUsers: 290, errorRate: 1.2, region: 'Asia' },
  ],
};

export const mockDataLive: DashboardData = {
  kpis: {
    totalUsers: 12850,
    activeSessions: 856,
    avgPageLoadTime: '0.8s',
    errorRate: 0.8,
    apiSuccessRate: 99.4,
    customerSatisfaction: 92,
  },
  dailyActiveUsers: [
    { date: 'Feb 6', users: 10200 },
    { date: 'Feb 7', users: 10800 },
    { date: 'Feb 8', users: 10400 },
    { date: 'Feb 9', users: 11200 },
    { date: 'Feb 10', users: 11600 },
    { date: 'Feb 11', users: 11900 },
    { date: 'Feb 12', users: 12100 },
    { date: 'Feb 13', users: 12300 },
    { date: 'Feb 14', users: 12400 },
    { date: 'Feb 15', users: 12600 },
    { date: 'Feb 16', users: 12750 },
    { date: 'Feb 17', users: 12800 },
    { date: 'Feb 18', users: 12850 },
    { date: 'Feb 19', users: 12850 },
  ],
  portalUsage: [
    { portal: 'Business Portal', users: 6800 },
    { portal: 'Customer Portal', users: 4200 },
    { portal: 'Agent Portal', users: 1850 },
  ],
  trafficOverTime: [
    { time: '12h ago', qa: 4200, live: 8100 },
    { time: '11h ago', qa: 4500, live: 8900 },
    { time: '10h ago', qa: 4100, live: 8200 },
    { time: '9h ago', qa: 4800, live: 9100 },
    { time: '8h ago', qa: 5100, live: 9800 },
    { time: '7h ago', qa: 4900, live: 9400 },
    { time: '6h ago', qa: 5240, live: 10100 },
    { time: '5h ago', qa: 5000, live: 9900 },
    { time: '4h ago', qa: 5150, live: 10200 },
    { time: '3h ago', qa: 4950, live: 9800 },
    { time: '2h ago', qa: 5300, live: 10400 },
    { time: '1h ago', qa: 5200, live: 10200 },
    { time: 'Now', qa: 5240, live: 10100 },
  ],
  responseTimeByPortal: [
    { portal: 'Business Portal', time: 180 },
    { portal: 'Customer Portal', time: 220 },
    { portal: 'Agent Portal', time: 140 },
  ],
  errorDistribution: [
    { name: 'Server Error', value: 12 },
    { name: 'Timeout', value: 8 },
    { name: 'Invalid Request', value: 5 },
    { name: 'Auth Error', value: 3 },
  ],
  impactedPages: [
    { rank: 1, page: '/dashboard', errors: 45 },
    { rank: 2, page: '/settings', errors: 28 },
    { rank: 3, page: '/reports', errors: 18 },
    { rank: 4, page: '/users', errors: 12 },
    { rank: 5, page: '/analytics', errors: 8 },
  ],
  systemHealth: 97,
  recentErrors: [
    {
      id: '1',
      timestamp: '15 mins ago',
      portal: 'Agent Portal',
      errorType: 'Server Error',
      severity: 'High',
      count: 4,
    },
    {
      id: '2',
      timestamp: '28 mins ago',
      portal: 'Business Portal',
      errorType: 'Timeout',
      severity: 'Medium',
      count: 3,
    },
    {
      id: '3',
      timestamp: '45 mins ago',
      portal: 'Customer Portal',
      errorType: 'Invalid Request',
      severity: 'Low',
      count: 2,
    },
  ],
  errorsByPortal: [
    { portal: 'Business Portal', errors: 24 },
    { portal: 'Customer Portal', errors: 16 },
    { portal: 'Agent Portal', errors: 8 },
  ],
  incidentsTrend: [
    { date: 'Feb 13', incidents: 2 },
    { date: 'Feb 14', incidents: 1 },
    { date: 'Feb 15', incidents: 3 },
    { date: 'Feb 16', incidents: 1 },
    { date: 'Feb 17', incidents: 2 },
    { date: 'Feb 18', incidents: 0 },
    { date: 'Feb 19', incidents: 1 },
  ],
  geographicData: [
    { country: 'United States', activeUsers: 5200, errorRate: 0.6, region: 'North America' },
    { country: 'United Kingdom', activeUsers: 2400, errorRate: 0.8, region: 'Europe' },
    { country: 'Canada', activeUsers: 1300, errorRate: 0.5, region: 'North America' },
    { country: 'Germany', activeUsers: 1000, errorRate: 0.9, region: 'Europe' },
    { country: 'India', activeUsers: 1800, errorRate: 1.2, region: 'Asia' },
    { country: 'Japan', activeUsers: 750, errorRate: 0.4, region: 'Asia' },
  ],
};
