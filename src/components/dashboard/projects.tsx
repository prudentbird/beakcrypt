import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Plus, ArrowRight } from "lucide-react";
import { Empty } from "~/components/ui/empty";

interface Project {
  _id?: string;
  id?: string;
  name: string;
  slug?: string;
  description?: string;
  secretCount?: number;
  lastUpdated?: string;
  environment?: string;
  createdAt?: number;
}

interface DashboardProjectsProps {
  projects: Project[];
  organizationId?: string;
  isDemoMode?: boolean;
}

export default function DashboardProjects({
  projects,
  organizationId,
  isDemoMode,
}: DashboardProjectsProps) {
  const hasProjects = projects && projects.length > 0;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Projects</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your environment variables and secrets
          </p>
        </div>
        {!isDemoMode && (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        )}
      </div>

      {!hasProjects ? (
        <Empty
          title="No projects yet"
          description="Create your first project to start managing secrets securely."
          action={
            !isDemoMode && (
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Project
              </Button>
            )
          }
        />
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => {
            const projectId = project._id || project.id;
            return (
              <div
                key={projectId}
                className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4 hover:bg-muted transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{project.name}</h3>
                  {project.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mt-2">
                    {project.slug && (
                      <p className="text-xs text-muted-foreground">
                        /{project.slug}
                      </p>
                    )}
                    {project.secretCount !== undefined && (
                      <p className="text-xs text-muted-foreground">
                        {project.secretCount} secrets
                      </p>
                    )}
                    {project.environment && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {project.environment}
                      </span>
                    )}
                    {project.lastUpdated && (
                      <p className="text-xs text-muted-foreground">
                        {project.lastUpdated}
                      </p>
                    )}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
