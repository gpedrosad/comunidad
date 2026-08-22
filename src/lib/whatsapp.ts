/** Número del test de demanda (Meta Ads). No usar otro canal como CTA. */
export const WHATSAPP_E164 = "5491133017403";
export const WHATSAPP_DISPLAY = "+549 1133017403";
export const WHATSAPP_MESSAGE =
  "Hola, quiero crear mi membresía en Sociar.";

export function whatsappHref(message = WHATSAPP_MESSAGE) {
  const url = new URL(`https://wa.me/${WHATSAPP_E164}`);
  url.searchParams.set("text", message);
  return url.toString();
}
