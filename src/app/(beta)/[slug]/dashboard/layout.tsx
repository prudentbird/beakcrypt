'use cache'

import { ReactNode } from "react";

export const metadata = {
  title: "Dashboard - Beakcrypt",
  description: "Manage your organization and projects",
};

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
