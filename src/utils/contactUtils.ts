import { BUSINESS_CONFIG } from "../config/businessConfig";
import { BookingFormData } from "../types";

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = "Hi, I need RO service in Sector 128 Noida";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${text}`;
}

export function getPhoneUrl(): string {
  return `tel:${BUSINESS_CONFIG.phoneNumber}`;
}

export function getEmailMailto(formData?: Partial<BookingFormData>): string {
  const subject = encodeURIComponent(
    `New RO Service Booking - ${formData?.sector || "Sector 128"} - ${formData?.fullName || "Customer"}`
  );
  const body = encodeURIComponent(
    `Name: ${formData?.fullName || ""}\nPhone: ${formData?.phone || ""}\nSector: ${
      formData?.sector || ""
    }\nRO Brand: ${formData?.roBrand || ""}\nService: ${
      formData?.serviceNeeded || ""
    }\nPreferred Time: ${formData?.preferredTime || ""}\nNotes: ${
      formData?.notes || "None"
    }`
  );
  return `mailto:${BUSINESS_CONFIG.email}?subject=${subject}&body=${body}`;
}

export function formatBookingWhatsAppText(data: BookingFormData, couponApplied: boolean = true): string {
  return `Hi ${BUSINESS_CONFIG.brandName}, I would like to book an RO service:

*Name:* ${data.fullName.trim()}
*Phone:* ${data.phone.trim()}
*Address/Sector:* ${data.sector.trim()}
*RO Brand:* ${data.roBrand}
*Service Needed:* ${data.serviceNeeded}
*Preferred Time:* ${data.preferredTime}
${couponApplied ? "*Promo Code:* NOIDA200 (₹200 OFF applied)" : ""}
${data.notes ? `*Extra Details:* ${data.notes.trim()}` : ""}

Please confirm my technician visit slot. Thank you!`;
}
