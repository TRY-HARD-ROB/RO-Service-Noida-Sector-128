/**
 * =======================================================================
 * BUSINESS CONFIGURATION (EDIT YOUR DETAILS HERE)
 * =======================================================================
 * You can change brand name, phone number, WhatsApp number, email,
 * and service sectors in this file. The entire website updates automatically!
 */

export const BUSINESS_CONFIG = {
  // Brand name displayed in header, hero, footer, and schemas
  brandName: "AquaFix Noida",
  tagline: "Same-Day RO Water Purifier Repair & AMC in Sector 128",

  // Phone number for direct phone calls (tel: link)
  phoneDisplay: "+91 98712 34567",
  phoneNumber: "+919871234567",

  // WhatsApp number (include country code without + for wa.me links)
  whatsappNumber: "919871234567",
  whatsappDisplay: "+91 98712 34567",

  // Support email
  email: "support@aquafixnoida.com",

  // Physical workshop / hub location in Sector 128
  address: "Shop 12, Wish Town Plaza, Sector 128, Noida, Uttar Pradesh 201304",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.518608678687!2d77.36531985!3d28.51996765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce651dfab5c09%3A0xebe7754f9d45e45a!2sSector%20128%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Google review page link
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJCV-rX6HmDDkRWuRFnU915-s",

  // Working hours
  workingHours: "8:00 AM – 9:00 PM (All 7 Days)",
  responseTime: "Within 45 to 90 Minutes",

  // Primary service sectors along the Expressway
  primarySectors: [
    { code: "Sector 128", highlight: "Primary Hub (Wish Town, Kalpataru Vista, Pavilion Court)", arrivalTime: "30-45 mins" },
    { code: "Sector 127", highlight: "Near HCL / Amity Tech Zone", arrivalTime: "45-60 mins" },
    { code: "Sector 126", highlight: "Amity University Belt & Plotted Houses", arrivalTime: "45-60 mins" },
    { code: "Sector 131", highlight: "Jaypee Wish Town Klassic & Kosmos", arrivalTime: "30-45 mins" },
    { code: "Sector 132", highlight: "DPS Noida & Express Trade Towers Belt", arrivalTime: "45-60 mins" },
    { code: "Sector 134", highlight: "Jaypee Kosmos, Aman & Expressway Societies", arrivalTime: "45-60 mins" },
    { code: "Sector 137 / 143", highlight: "Paras Tierea, Gulshan Vivante, Logix Blossom", arrivalTime: "60-75 mins" },
  ],

  // Common RO brands supported
  supportedBrands: [
    "Kent",
    "Aquaguard (Eureka Forbes)",
    "Pureit (HUL)",
    "Livpure",
    "AO Smith",
    "Havells",
    "Blue Star",
    "Zero B",
    "Custom / Assembled RO",
  ],

  // Promotional offer banner
  discountOffer: {
    code: "NOIDA200",
    text: "Flat ₹200 OFF on your first RO service visit or filter replacement!",
    expiry: "Valid today only for Sector 128, 127, 126, 131, 132, 134 residents",
  },
};
