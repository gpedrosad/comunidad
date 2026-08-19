import { redirect } from "next/navigation";

export default async function ConectadoPage({
  params,
}: {
  params: Promise<{ sellerId: string }>;
}) {
  const { sellerId } = await params;
  redirect(`/c/${sellerId}`);
}
