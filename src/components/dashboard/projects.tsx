import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Plus, ArrowRight } from "lucide-react";
import { Empty } from "~/components/ui/empty";

interface Project {
  _id: string;
  name: string;
  slug: string;
  createdAt: number;
}

interface DashboardProjectsProps {
  projects: Project[];
  organizationId: string;
}

export default function DashboardProjects({
  projects,
  organizationId,
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
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {!hasProjects ? (
        <Empty
          title="No projects yet"
          description="Create your first project to start managing secrets securely."
          action={
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          }
        />
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4 hover:bg-muted transition-colors"
            >
              <div>
                <h3 className="font-medium text-foreground">{project.name}</h3>
                <p className="text-sm text-muted-foreground">
                  /{project.slug}
                </p>
              </div>
              <Button variant="ghost" size="sm">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
