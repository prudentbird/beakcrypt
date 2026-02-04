'use cache'

import { api } from "conv/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { notFound } from "next/navigation";
import DashboardContent from "~/components/dashboard/content";
import DashboardHeader from "~/components/dashboard/header";
import DashboardStats from "~/components/dashboard/stats";
import DashboardProjects from "~/components/dashboard/projects";

export default async function DashboardHandler({
  paramsPromise,
}: {
  paramsPromise: Promise<{ slug: string }>;
}) {
  const { slug } = await paramsPromise;
  const organization = await fetchQuery(api.organizations.getBySlug, { slug });

  if (!organization) {
    return notFound();
  }

  const projects = await fetchQuery(api.projects.list, {
    organizationId: organization._id,
  });

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader organization={organization} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DashboardContent>
          <DashboardStats />
          <DashboardProjects projects={projects} organizationId={organization._id} />
        </DashboardContent>
      </main>
    </div>
  );
}
