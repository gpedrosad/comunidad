import {
  parseClientEvent,
  sendCapiEvent,
  userDataFromRequest,
} from "@/lib/meta-capi";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const event = parseClientEvent(body);
  if (!event) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const result = await sendCapiEvent({
    ...event,
    user_data: await userDataFromRequest(),
  });

  return Response.json({ ok: result.ok, skipped: result.skipped });
}
