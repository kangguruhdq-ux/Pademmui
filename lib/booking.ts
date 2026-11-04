export interface BookingFormData {
  bookingType: "barbershop" | "academy";
  bookingTypeTitle: string;
  serviceId: string;
  serviceName: string;
  appointmentDate: string; // YYYY-MM-DD
  appointmentDateFormatted: string; // e.g. "Rabu, 15 November 2026"
  preferredTime: string; // e.g. "14:30 WIB"
  fullName: string;
  whatsappNumber: string;
  additionalNotes?: string;
}

/**
 * Sanitizes user text input to prevent XSS and control characters.
 */
export function sanitizeInput(value: string, maxLength: number = 200): string {
  if (!value) return "";
  return value
    .replace(/[<>'"\\`]/g, "") // Remove potentially dangerous chars
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // Remove control characters
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates and normalizes Indonesian / International WhatsApp numbers.
 * E.g. "0821-3406-0584" -> "082134060584"
 */
export function validateAndCleanPhone(phone: string): { isValid: boolean; cleaned: string } {
  const digits = phone.replace(/\D/g, "");
  // Must be between 9 and 15 digits, starting with 08, 62, or 8
  const isValid =
    (digits.startsWith("08") && digits.length >= 10 && digits.length <= 14) ||
    (digits.startsWith("62") && digits.length >= 10 && digits.length <= 15) ||
    (digits.startsWith("8") && digits.length >= 9 && digits.length <= 13);

  return { isValid, cleaned: digits };
}

/**
 * Formats YYYY-MM-DD date to Indonesian friendly date (e.g. "Rabu, 15 November 2026")
 */
export function formatIndonesianDate(dateString: string): string {
  if (!dateString) return "";
  try {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

/**
 * Generates plain text WhatsApp message adhering strictly to Anti-Slop and prompt requirements:
 * NO emoji, NO symbols, NO markdown, NO asterisks, NO bullet points.
 */
export function generateBookingWhatsAppMessage(data: BookingFormData): string {
  const lines: string[] = [];

  lines.push("Halo Pademmui, saya ingin melakukan booking.");
  lines.push("");
  lines.push("Informasi Booking");
  lines.push("");
  lines.push(`Jenis Booking: ${data.bookingTypeTitle}`);
  lines.push(`Layanan: ${data.serviceName}`);
  lines.push(`Tanggal: ${data.appointmentDateFormatted || data.appointmentDate}`);
  lines.push(`Waktu: ${data.preferredTime}`);
  lines.push("");
  lines.push("Informasi Pelanggan");
  lines.push("");
  lines.push(`Nama: ${data.fullName}`);
  lines.push(`Nomor WhatsApp: ${data.whatsappNumber}`);

  // Include Additional Notes ONLY if non-empty
  const cleanNotes = (data.additionalNotes || "").trim();
  if (cleanNotes.length > 0) {
    lines.push("");
    lines.push(`Catatan Tambahan: ${cleanNotes}`);
  }

  lines.push("");
  lines.push("Mohon informasi mengenai ketersediaan jadwal dan konfirmasi booking saya.");
  lines.push("");
  lines.push("Terima kasih.");

  return lines.join("\n");
}

/**
 * Official verified destination WhatsApp number for Pademmui
 * Format international: 6282134060584 (no +, no space, no dash)
 */
export const OFFICIAL_BOOKING_WHATSAPP_NUMBER = "6282134060584";

/**
 * Creates the safe wa.me URL
 */
export function createBookingWhatsAppUrl(data: BookingFormData): string {
  const message = generateBookingWhatsAppMessage(data);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${OFFICIAL_BOOKING_WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
