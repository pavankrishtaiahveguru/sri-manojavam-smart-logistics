export const WHATSAPP_NUMBER = "919440688737";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function createWhatsAppMessageUrl(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppMessage(message) {
  const url = createWhatsAppMessageUrl(message);
  const whatsappWindow = window.open(url, "_blank");

  if (whatsappWindow) {
    whatsappWindow.opener = null;
  } else {
    window.location.href = url;
  }
}
