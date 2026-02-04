'use cache'

import { Card } from "~/components/ui/card";
import {
  Package,
  Users,
  Key,
  Shield,
} from "lucide-react";

interface DashboardStatsProps {
  stats?: {
    projects: number;
    teamMembers: number;
    secretsManaged: number;
    securityScore: number;
  };
}

export default async function DashboardStats({ stats: statsProp }: DashboardStatsProps) {
  const stats = statsProp ? [
    {
      name: "Total Projects",
      value: statsProp.projects.toString(),
      icon: Package,
      change: "+2 this month",
    },
    {
      name: "Team Members",
      value: statsProp.teamMembers.toString(),
      icon: Users,
      change: "+1 this week",
    },
    {
      name: "Secrets Managed",
      value: statsProp.secretsManaged.toString(),
      icon: Key,
      change: "+24 this month",
    },
    {
      name: "Security Score",
      value: `${statsProp.securityScore}%`,
      icon: Shield,
      change: "Excellent",
    },
  ] : [
    {
      name: "Total Projects",
      value: "12",
      icon: Package,
      change: "+2 this month",
    },
    {
      name: "Team Members",
      value: "8",
      icon: Users,
      change: "+1 this week",
    },
    {
      name: "Secrets Managed",
      value: "156",
      icon: Key,
      change: "+24 this month",
    },
    {
      name: "Security Score",
      value: "98%",
      icon: Shield,
      change: "Excellent",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.name}
            className="p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
