'use cache'

import { Suspense } from "react";
import DemoHandler from "./handler";
import AppLoader from "~/components/loader";

export const metadata = {
  title: "Beakcrypt Dashboard - Demo",
  description: "See the Beakcrypt dashboard in action with sample data",
};

export default function DemoPage() {
  return (
    <Suspense fallback={<AppLoader />}>
      <DemoHandler />
    </Suspense>
  );
}
