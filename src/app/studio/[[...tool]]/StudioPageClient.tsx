"use client";

import dynamic from "next/dynamic";

const StudioClient = dynamic(() => import("./StudioClient"), {
  ssr: false,
});

export default function StudioPageClient() {
  return <StudioClient />;
}
