import { ReactNode } from "react";

interface DashboardContentProps {
  children: ReactNode;
}

export default function DashboardContent({
  children,
}: DashboardContentProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {children}
    </div>
  );
}
