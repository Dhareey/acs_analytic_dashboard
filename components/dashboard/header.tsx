import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface HeaderProps {
  environment: 'QA' | 'Live';
  onEnvironmentChange: (env: 'QA' | 'Live') => void;
}

export function Header({ environment, onEnvironmentChange }: HeaderProps) {
  return (
    <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Broadband Apps Analytics
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              QA & Live Environments Monitoring
            </p>
          </div>
        </div>

        {/* Environment Toggle */}
        <Tabs value={environment} onValueChange={(value) => onEnvironmentChange(value as 'QA' | 'Live')}>
          <TabsList className="bg-secondary">
            <TabsTrigger value="Live" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Live Environment
            </TabsTrigger>
            <TabsTrigger value="QA" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              QA Environment
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
