import { ReactNode } from "react";
import DashboardStats from "./stats";
import DashboardProjects from "./projects";

interface DashboardContentProps {
  children?: ReactNode;
  stats?: {
    projects: number;
    teamMembers: number;
    secretsManaged: number;
    securityScore: number;
  };
  projects?: Array<{
    id: string;
    name: string;
    description: string;
    secretCount: number;
    lastUpdated: string;
    environment: string;
  }>;
  isDemoMode?: boolean;
}

export default function DashboardContent({
  children,
  stats,
  projects,
  isDemoMode,
}: DashboardContentProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
        {stats && (
          <>
            <DashboardStats stats={stats} />
            {projects && (
              <DashboardProjects 
                projects={projects} 
                isDemoMode={isDemoMode}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
