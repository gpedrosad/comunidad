import LandingContent from "@/app/landing-content";
import { getPublicSeller } from "@/lib/sellers";

export const dynamic = "force-dynamic";

export default async function LandingPage({
  params,
  searchParams,
}: {
  params: Promise<{ sellerId: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { sellerId } = await params;
  const { error } = await searchParams;
  const seller = await getPublicSeller(sellerId);

  return <LandingContent seller={seller} error={error} />;
}
