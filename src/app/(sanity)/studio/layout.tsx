// import {
//   // metadata as studioMetadata,
//   viewport as studioViewport,
// } from "next-sanity/studio";

export const dynamic = "force-static";

// Här exporterar vi metadata och viewport för admin-panelen

// export const metadata = {
//   ...studioMetadata,
//   title: "Folketshustranas.se - Admin",
// };

// export const viewport = {
//   ...studioViewport,
// };

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
