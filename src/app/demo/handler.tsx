'use cache'

import Link from "next/link";
import { Button } from "~/components/ui/button";
import DashboardHeader from "~/components/dashboard/header";
import DashboardContent from "~/components/dashboard/content";

const MOCK_ORG = {
  id: "org_demo",
  name: "Acme Corp",
  slug: "acme-corp",
  logo: "🚀",
};

const MOCK_STATS = {
  projects: 12,
  teamMembers: 8,
  secretsManaged: 347,
  securityScore: 94,
};

const MOCK_PROJECTS = [
  {
    id: "proj_1",
    name: "API Service",
    description: "Main API backend service",
    secretCount: 23,
    lastUpdated: "2 hours ago",
    environment: "production",
  },
  {
    id: "proj_2",
    name: "Web Dashboard",
    description: "Admin dashboard application",
    secretCount: 18,
    lastUpdated: "1 day ago",
    environment: "staging",
  },
  {
    id: "proj_3",
    name: "Mobile App",
    description: "iOS and Android mobile apps",
    secretCount: 15,
    lastUpdated: "3 days ago",
    environment: "development",
  },
  {
    id: "proj_4",
    name: "Data Pipeline",
    description: "ETL and data processing",
    secretCount: 31,
    lastUpdated: "5 hours ago",
    environment: "production",
  },
];

export default async function DemoHandler() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader org={MOCK_ORG} />
      <DashboardContent
        stats={MOCK_STATS}
        projects={MOCK_PROJECTS}
        isDemoMode={true}
      />
      
      <div className="absolute top-4 right-4 flex gap-2">
        <Link href="/">
          <Button variant="outline" size="sm">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
