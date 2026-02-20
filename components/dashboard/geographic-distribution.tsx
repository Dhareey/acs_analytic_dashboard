import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Users, TrendingDown } from 'lucide-react';
import { DashboardData } from '@/lib/mock-data';

interface GeographicDistributionProps {
  data: DashboardData;
}

export function GeographicDistribution({ data }: GeographicDistributionProps) {
  const regionStats = data.geographicData.reduce(
    (acc, item) => {
      const existing = acc.find((r) => r.region === item.region);
      if (existing) {
        existing.users += item.activeUsers;
        existing.errorRate = (existing.errorRate + item.errorRate) / 2;
        existing.countries.push(item.country);
      } else {
        acc.push({
          region: item.region,
          users: item.activeUsers,
          errorRate: item.errorRate,
          countries: [item.country],
        });
      }
      return acc;
    },
    [] as Array<{
      region: string;
      users: number;
      errorRate: number;
      countries: string[];
    }>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Geographic Distribution</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Geographic Overview */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Active Users by Region</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.geographicData.map((item) => {
                const maxUsers = Math.max(...data.geographicData.map((d) => d.activeUsers));
                const percentage = (item.activeUsers / maxUsers) * 100;
                return (
                  <div
                    key={item.country}
                    className="p-4 rounded-lg border border-border/50 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-foreground">{item.country}</p>
                        <p className="text-xs text-muted-foreground">{item.region}</p>
                      </div>
                      <div className="text-xs font-semibold px-2 py-1 rounded bg-primary/20 text-primary">
                        {item.activeUsers}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {/* Users Progress Bar */}
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            Active Users
                          </span>
                          <span className="text-foreground font-medium">{percentage.toFixed(0)}%</span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Error Rate */}
                      <div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground flex items-center gap-1">
                            <TrendingDown className="w-3 h-3" />
                            Error Rate
                          </span>
                          <span className={`font-medium ${
                            item.errorRate > 2 ? 'text-red-400' : item.errorRate > 1 ? 'text-yellow-400' : 'text-green-400'
                          }`}>
                            {item.errorRate.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Regional Summary */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Regional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionStats.map((region) => (
                <div key={region.region} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{region.region}</p>
                      <p className="text-xs text-muted-foreground">
                        {region.countries.length} countr{region.countries.length > 1 ? 'ies' : 'y'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{region.users}</p>
                      <p className="text-xs text-muted-foreground">Active Users</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${(region.users / Math.max(...regionStats.map((r) => r.users))) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {region.errorRate.toFixed(1)}% error
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Regions */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Regional Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionStats
                .sort((a, b) => b.users - a.users)
                .map((region, idx) => (
                  <div key={region.region} className="flex items-center justify-between pb-4 last:pb-0 border-b border-border/50 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{region.region}</p>
                        <p className="text-xs text-muted-foreground">
                          {region.users} active users
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-semibold ${
                        region.errorRate > 2 ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {region.errorRate.toFixed(1)}% error rate
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
