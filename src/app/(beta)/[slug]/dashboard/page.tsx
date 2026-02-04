import { Suspense } from "react";
import AppLoader from "~/components/loader";
import DashboardHandler from "./handler";

export default function DashboardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<AppLoader />}>
      <DashboardHandler paramsPromise={params} />
    </Suspense>
  );
}
