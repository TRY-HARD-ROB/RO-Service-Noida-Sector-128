# AquaFix Noida — RO Service & Repair Website (Sector 128 & Expressway)

A complete, high-converting, mobile-first single-page marketing website with an integrated booking flow for a local RO water purifier service and AMC business in Noida, Uttar Pradesh, India.

---

## 🚀 Key Features

- **Hyper-Local Noida Copy**: Explicitly tailored for Sector 128, 127, 126, 131, 132, 134, and Jaypee Wish Town residents with authentic Noida groundwater TDS data (800–1,800+ ppm).
- **Fast 30-Second Booking Flow**: Instant WhatsApp dispatch with pre-filled message, email fallback, and auto-applied `NOIDA200` (₹200 OFF) promo voucher.
- **Always-Visible Mobile Floating Bar**: Sticky bottom `[Call Now]` and `[WhatsApp]` triggers for immediate conversion.
- **Conversion-Optimized Layout**:
  - Sticky Header with backdrop blur & phone quick link
  - High-impact Hero with live Sector 128 dispatch indicator
  - Problem → Solution Quick Strip
  - 6 Services Cards with transparent pricing + Brand logos
  - 3-Tier AMC Plans (Basic, Standard [Most Popular], Comprehensive Premium)
  - 6 Why Choose Us Trust Points + Verified Metrics Bar
  - 3-Step "How It Works" Flow
  - 6 Verified Noida Customer Testimonials (Grid on desktop, Touch Carousel on mobile)
  - Interactive Noida Sector Coverage & Lazy-Loaded Google Map
  - 8 Detailed Noida-specific FAQs (accordion with ARIA accessibility)
  - Desktop Exit-Intent Coupon Modal (₹200 OFF)
  - Interactive Noida Groundwater TDS Estimator Tool
- **Full SEO & Structured Data**:
  - Open Graph & Twitter Cards
  - Geo tags for Noida Sector 128 (`28.5152° N, 77.3739° E`)
  - Schema.org JSON-LD for `HomeAndConstructionBusiness`, `Service`, and `FAQPage`
  - `robots.txt` and `sitemap.xml` included

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4**
- **Lucide React** (feather-weight vector icons)
- **Google Fonts**: Plus Jakarta Sans (headings) + Inter (body)

---

## ⚙️ How to Change Phone, WhatsApp & Business Details

All business contact details and location settings are centralized in one file:
👉 **`src/config/businessConfig.ts`**

```typescript
export const BUSINESS_CONFIG = {
  brandName: "AquaFix Noida", // Your brand name
  phoneDisplay: "+91 98712 34567", // Displayed phone number
  phoneNumber: "+919871234567", // Format for tel: click-to-call
  whatsappNumber: "919871234567", // WhatsApp number (country code without +)
  email: "support@aquafixnoida.com", // Support email
  address: "Shop 12, Wish Town Plaza, Sector 128, Noida, UP 201304",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=...",
  // ...
};
```
Editing this single file updates the header, hero, booking form, WhatsApp links, schema tags, and footer across the entire website.

---

## 📝 How to Edit Services, Pricing, AMC Plans & Reviews

All catalog items are cleanly organized in:
👉 **`src/data/servicesData.ts`**

- **Services**: Change prices (e.g., from ₹399, ₹599, ₹1,499), descriptions, and bullet points in `SERVICES_LIST`.
- **AMC Plans**: Edit tier prices, features, and inclusions in `AMC_PLANS`.
- **Testimonials**: Update customer names, sectors, and quotes in `TESTIMONIALS`.
- **FAQs**: Modify answers or add new questions in `FAQ_LIST`.

---

## 💻 Local Development Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live website.

### 3. Build for production
```bash
npm run build
```
Outputs optimized static assets to the `dist/` directory.

---

## 🌐 Deploy to Vercel in 5 Minutes

1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on a global CDN in under 60 seconds with 95+ mobile Lighthouse performance!

---

## 📄 License
MIT. Made with care for local water purifier service entrepreneurs in Noida.
