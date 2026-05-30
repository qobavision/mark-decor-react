export const WHATSAPP_PHONE = '51989387410'

export const WHATSAPP_QUOTE_MESSAGE = 'Hola Mark Decor, quisiera una cotización.'
export const WHATSAPP_PROJECT_MESSAGE = 'Hola Mark Decor, quisiera cotizar mi proyecto.'
export const WHATSAPP_INFO_MESSAGE = 'Hola Mark Decor, quisiera más información.'

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

export const whatsappQuoteUrl = buildWhatsAppUrl(WHATSAPP_QUOTE_MESSAGE)
export const whatsappProjectUrl = buildWhatsAppUrl(WHATSAPP_PROJECT_MESSAGE)
export const whatsappInfoUrl = buildWhatsAppUrl(WHATSAPP_INFO_MESSAGE)

export function whatsappProductUrl(productName) {
  return buildWhatsAppUrl(
    `Hola Mark Decor, me interesa ${productName}. Quisiera una cotización.`,
  )
}
